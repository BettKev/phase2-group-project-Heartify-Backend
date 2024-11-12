const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

// Create the JSON server instance
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use CORS to handle cross-origin requests
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes or middleware (optional)
// For example, you could add authentication middleware here if needed.

// Use the JSON Server router
server.use('/api', router);

// Start the server on the default port or a specified environment port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
