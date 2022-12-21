use actix_web::{get, middleware, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use serde::Serialize;

fn gcd(mut n: u64, mut m: u64) -> u64 {
    assert!(n != 0 && m != 0);
    while m != 0 {
        if m < n {
            let t = m;
            m = n;
            n = t;
        }
        m = m % n;
    }
    n
}

#[derive(Serialize, Deserialize)]
struct GcdParams {
    n: u64,
    m: u64,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(get_index)
            .service(post_gcd)
    })
    .bind(("127.0.0.1", 3000))?
    .run()
    .await
}

#[get("/")]
async fn get_index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(include_str!("../page/index.html"))
}

#[post("/gcd")]
async fn post_gcd(data: web::Form<GcdParams>) -> impl Responder {
    if data.n == 0 || data.m == 0 {
        return HttpResponse::BadRequest()
            .content_type("text/html; charset=utf-8")
            .body("n and m must be positive");
    }

    let body = format!(
        "The greatest common divisor of the numbers {} and {} is {}",
        data.n,
        data.m,
        gcd(data.n, data.m)
    );

    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(body)
}

#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::{http::header::ContentType, test, App};

    #[test]
    async fn test_gcd() {
        assert_eq!(gcd(14, 15), 1);
        assert_eq!(gcd(2 * 3 * 5 * 11 * 17, 3 * 7 * 11 * 13 * 19), 3 * 11);
    }

    #[actix_web::test]
    async fn test_get_index() {
        let app = test::init_service(App::new().service(get_index)).await;
        let req = test::TestRequest::default()
            .insert_header(ContentType::plaintext())
            .to_request();
        let resp = test::call_service(&app, req).await;
        assert!(resp.status().is_success());
    }

    #[actix_web::test]
    async fn test_post_gcd_is_non_zero() {
        let app = test::init_service(App::new().service(post_gcd)).await;
        let req = test::TestRequest::post()
            .uri("/gcd")
            .set_form(&GcdParams { n: 14, m: 15 })
            .to_request();
        let resp = test::call_service(&app, req).await;
        assert!(resp.status().is_success());
    }

    #[actix_web::test]
    async fn test_post_gcd_is_zero() {
        let app = test::init_service(App::new().service(post_gcd)).await;
        let req = test::TestRequest::post()
            .uri("/gcd")
            .set_form(&GcdParams { n: 0, m: 15 })
            .to_request();
        let resp = test::call_service(&app, req).await;
        assert!(resp.status().is_client_error());
    }
}
