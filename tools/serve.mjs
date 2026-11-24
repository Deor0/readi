// Tiny static server for the READI concept: node serve.mjs <root> [port]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(process.argv[2]); const port = +(process.argv[3] || 4399);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.avif': 'image/avif', '.webp': 'image/webp' };
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/readi-home-concept.html';
  const file = path.join(root, url);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; } // no path traversal
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found'); return; }
    res.writeHead(200, { 'content-type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' }).end(data);
  });
}).listen(port, '127.0.0.1', () => console.log(`READI concept at http://localhost:${port}/`));
