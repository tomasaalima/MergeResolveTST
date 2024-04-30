
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log('Received request!'); // New callback function
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ using Node.js ${process.version}`); // Modified message
});

