let users = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('{"success": {"id": "10", "username": "root"} }');
  res.end();
};


module.exports = {
  "users": users
};