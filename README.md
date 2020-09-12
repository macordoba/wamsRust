# WebAssembly con Rust
## Proceso de preparación

```mermaid
graph LR 
A[Instalar wasm-pack]-->B[Compilar a WebAssamble];
B-->C[Copy file .wasm];
C-->D[Install package nodeJS];
D-->E[Start the server];
```
## Comandos
1. Install de compiler from Rust to WebAssembly
```
cargo install wasm-pack
 ``` 
2. Compiler the code rust with the command
```
cd (path project)/
was-pack build
 ``` 
3. Copy file _.wasm_ from folder _pkg_ to _html_ 
4. Move to html dir and execute install package nodeJS
```
cd (path html)/
npm i
 ```
5. Start the server with the command
```
npm run start
 ```
