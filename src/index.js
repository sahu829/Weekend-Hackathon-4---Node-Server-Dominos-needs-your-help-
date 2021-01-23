var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  console.log("krishna sahu");
}

module.exports = httpServer;