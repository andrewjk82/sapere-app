const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/log-error') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] ${body}\n`;
      fs.appendFileSync('client-errors.log', logEntry);
      console.log('Received error:', body);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5174, () => {
  console.log('Error logging server listening on port 5174');
});
