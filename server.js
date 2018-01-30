const http          = require('http');
const app           = require('./app.js');
const page          = require('./page.js');
const pageApi       = require('./page-api.js');

const myApp         = new app();

myApp.get('/', page.homePage);
myApp.get('/home', page.homePage);
myApp.get('/about', page.homePage);
myApp.post('/api/users', pageApi.users);
myApp.post('/api/users', pageApi.users);

http.createServer( (req, res) => {
  myApp.serveRoute(req, res);

}).listen(myApp.port, () => {
  console.info(`[Server] Listening on port ${myApp.port}`);
});
