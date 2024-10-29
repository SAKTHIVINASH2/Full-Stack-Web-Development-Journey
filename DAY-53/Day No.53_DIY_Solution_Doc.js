const http = require('http');

// Define the port to run the server on
const PORT = 8900;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  const url = req.url;

  // Route handling
  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  }else if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }else if (url === '/filter') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Filter Page');
  } else if (url === '/details') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Details Page');
  } else {
    // Handle any other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

// The server listens on the defined port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});