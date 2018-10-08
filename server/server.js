const http = require('http');
const app = require('./app');
const port = process.env.PORT || 2222;

// Create server
const server = http.createServer(app);

server.listen(port, () => console.log(`Server running at ${port}`))