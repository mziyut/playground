fn main() {
    println!("Hello, world!");
}

fn build_vector() -> Vec<i16> {
    // let mut v: Vec<i16> = Vec::<i16n>::new();
    let mut v = Vec::new();
    // v.push(10i16);
    v.push(10);
    // v.push(20i16);
    v.push(20);
    v
}

#[test]
fn test_build_vector() {
    let v = build_vector();

    assert_eq!(v.len(), 2);
    assert_eq!(v[0], 10);
    assert_eq!(v[1], 20);
}

#[test]
fn test_cast() {
    assert_eq!( 10_i8 as u16, 10_u16);
    assert_eq!( 2525_u16 as i16, 2525_i16);
    assert_eq!( -1_i16 as i32, -1_i32);
    assert_eq!( 65535_u16 as i32, 65535_i32);

    assert_eq!( 1000_i16 as u8, 232_u8);
    assert_eq!(65535_u32 as i16, -1_i16);

    assert_eq!( -1_i8 as u8, 255_u8);
    assert_eq!(255_u8 as i8, -1_i8);

    assert_eq!( 2_u16.pow(4), 16);
    assert_eq!((-4_i32).abs(), 4);
    assert_eq!(0b101101_u8.count_ones(), 4);
}

#[test]
fn tesh_check_calc() {
    assert_eq!(10_u8.checked_add(20), Some(30));
    assert_eq!(100_u8.checked_add(200), None);
    assert_eq!((-128_i8).checked_div(-1), None);
}

#[test]
fn test_wrap_calc() {
    assert_eq!(100_u16.wrapping_mul(200), 20000);
    assert_eq!(500_u16.wrapping_mul(500), 53392);

    assert_eq!(500_i16.wrapping_mul(500), -12144);

    assert_eq!(5_i16.wrapping_shl(17), 10);
}

#[test]
fn test_saturated_calc() {
    assert_eq!(32760_i16.saturating_add(100), 32767);
    assert_eq!((-32760_i16).saturating_add(-100), -32768);
}

#[test]
fn test_overflow_calc() {
    assert_eq!(255_i16.overflowing_sub(2), (253, true));
    assert_eq!(255_i16.overflowing_add(2), (1, true));
}

#[test]
fn test_floating_point_arithmetic() {
    assert!((-1. / f32::INFINITY).is_sign_negative());
    assert_eq!(-f32::MIN, f32::MAX);

    assert_eq!(5f32.sqrt() * 5f32.sqrt(), 5.);
    assert_eq!((-1.01f64).floor(), -2.0);
}

