const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to homepage");
  }
  if (req.url === "/about") {
    res.end("short history");
  } else {
    res.end(`
    <h1>OOps!..</h1>
    <a href='/'>back Home</a>
    <p>
    `);
  }
});

server.listen(5000);
