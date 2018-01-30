
let homePage = (req, res) => {
  res.writeHead(404, {'Content-Type': 'application/json'});
  res.write('{"success": "home_page"}');
  res.end();
};

let errorPage = (req, res) => {
  res.writeHead(404, {'Content-Type': 'application/json'});
  res.write('{"error": "page_not_found"}');
  res.end();
}

module.exports = {
  "homePage": homePage,
  "errorPage": errorPage
};