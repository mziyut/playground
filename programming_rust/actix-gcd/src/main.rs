use actix_web::{middleware, web, App, HttpRequest, HttpServer, HttpResponse, Result};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(web::resource("/").route(web::get().to(get_index)))
    })
    .bind(("127.0.0.1", 3000))?
    .run()
    .await
}

async fn get_index(req: HttpRequest) -> Result<HttpResponse> {
     Ok(HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(

    r#"
        <!DOCTYPE html>
        <html>
            <head><title>GCD Calculator</title></head>
            <body>
                <h1>Hello, world!</h1>
                <form action="/gcd" method="post">
                    <input type="text" name="n" />
                    <input type="text" name="m" />
                    <button type="submit">Compute GCD</button>
                </form>
            </body>
        </html>
        "#)
}

