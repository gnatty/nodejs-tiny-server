class App {

  constructor(port = 'undefined') {
    this.port = port !== 'undefined' ? port : 8080;
    this.routes = [];
  }

  get(path, action) {
    this.addRoute("GET", path, action);
  }

  post(path, action) {
    this.addRoute("POST", path, action);
  }

  addRoute(method, path, action) {
    let searchRes = this.routes.find( (route) => {
      return route.path == path && route.method == method;
    });
    if(typeof searchRes != 'undefined') {
      // --- Throw error.
      console.error(`[App] Route already exist for method ${method} and path ${path}`);
    } else {
      this.routes.push(
        {
          "method"  : method,
          "path"    : path,
          "action"  : action
        }
      );
      console.info(`[App] New Route added\nMethod : ${method}\nPath : ${path}`);
    }
  }

  serveRoute(req, res) {
    let routePath     = req.url;
    let routeMethod   = req.method;

    let searchRes = this.routes.find( (route) => {
      return route.path == routePath && route.method == routeMethod;
    });

    if(typeof searchRes == 'undefined') {
      // --- Throw error.
      this.errorPage(req, res);
      console.error("[App] Route not found");
    } else {
      searchRes.action(req, res);
    }
  }

  errorPage(req, res) {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.write('{"error": "page_not_found"}');
    res.end();
  }

}

module.exports = App;