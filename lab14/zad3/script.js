const fs = require('fs');
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const filename = parsedUrl.pathname.slice(1);

  if (req.method === 'GET') {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      fs.appendFile(filename, body, err => {
        if (err) {
          res.statusCode = 500;
          res.end('Error writing to file');
        } else {
          res.statusCode = 200;
          res.end('File updated');
        }
      });
    });
  } else if (req.method === 'DELETE') {
    fs.unlink(filename, err => {
      if (err) {
        res.statusCode = 500;
        res.end('Error deleting file');
      } else {
        res.statusCode = 200;
        res.end('File deleted');
      }
    });
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
curl http://localhost:3000/files/file.txt
curl -X POST -d "text" http://localhost:3000/files/append.txt
curl -X DELETE http://localhost:3000/files/delete.txt
*/