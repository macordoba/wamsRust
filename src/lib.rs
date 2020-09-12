use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn suma(a: i32, b: i32) -> i32 {
    return a + b;
}

#[wasm_bindgen]
pub fn resta(a: i32, b: i32) -> i32 {
    return a - b;
}
