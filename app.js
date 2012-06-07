var app = require('express').createServer();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {layout:false});
});

app.get('/login', function(req, res){
    res.render('login', {layout:false});
});

app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});

app.listen(3000);