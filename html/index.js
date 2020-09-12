var app = new Vue({
  el: "#app",
  data: {
    a: 0,
    b: 0,
    result: 0,
    funciones: {},
  },
  created: function () {
    WebAssembly.instantiateStreaming(fetch("propio_wasm_bg.wasm")).then(
      (result) => {
        this.funciones = result.instance.exports;
      }
    );
  },
  methods: {
    sumar: function () {
      this.result = this.funciones.suma(this.a, this.b);
    },
    resta: function () {
      this.result = this.funciones.resta(this.a, this.b);
    },
  },
});
