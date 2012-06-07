var express = require('express');

var app = express.createServer();

app.set("view engine", "ejs");
app.set('view options', { layout: false });

app.get("/", function(req, res){ 
   //res.send("Hello World");
   res.render("index");
});
   
app.listen(3000);
	
