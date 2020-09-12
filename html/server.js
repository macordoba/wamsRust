const serveStatic = require("serve-static");
const http = require("http");
const port = 8088;

const serve = serveStatic(__dirname);
const server = http.createServer(serve);

server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`);
});
