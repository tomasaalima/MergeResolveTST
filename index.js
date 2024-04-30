import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('A request are received');
});

// Versão "right" adiciona um comentário diferente
/* Este é um comentário na versão "right" */
console.log('This is a right version.');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
