const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const ROOT = path.join(__dirname, "_site");

const mime = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "text/javascript",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".gif":  "image/gif",
  ".xml":  "application/xml",
  ".ico":  "image/x-icon",
};

http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  let filePath = path.join(ROOT, urlPath);

  // directory → try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end("Not found"); return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
  fs.createReadStream(filePath).pipe(res);
}).listen(PORT, () => console.log(`Preview at http://localhost:${PORT}/`));
