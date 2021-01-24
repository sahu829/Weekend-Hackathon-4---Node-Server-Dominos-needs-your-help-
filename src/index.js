var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

  if(req.url==='/welcome'){
    res.writeHead(200,{'Content-Type':'text/plane'});
    res.write("Welcome to Dominos!");
     res.end();
  }else if(req.url==="/contact"){
    const contact={
      phone: '18602100000',
     email: 'guestcaredominos@jublfood.com'
    }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(contact))
        res.end();
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write('404');
    res.end();
  }


  //res.end("respond from other side    ");
}

module.exports = httpServer;
httpServer.listen(8081);

/*httpServer.listen(8081,"127.0.0.1",()=>{
  console.log("litsening port no. 8081");
});*/