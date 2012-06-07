express = require('express');
var app = express.createServer();
var store = new express.session.MemoryStore;
var mockusers = {'ryan':'abc123', 'bob':'xyz456'}
 

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "drawbetter", store: store}));


app.set("view engine", "ejs");
app.set("view options", { layout: false});

app.get('/', authBounce, function(req, res){
  res.redirect('/draw');
});

app.get('/draw', authBounce, function(req, res){
  res.render('draw');
});

app.get('/login', function(req, res){
  res.render('login');
});

app.all('/login_failed', function(req, res){
  res.send('login failed');
});



function authBounce(req, res, next){
  if(req.session.username){
    next();
   }
  else {
    res.redirect('/login');
  }
}

function objectChecker(obj, condition) {
  var x;
  var found;
  for(x in obj){
    if(x === condition){
      console.log('found it');
      console.log(obj[x]);
      return obj[x];
    }
  };
  return false;
}





app.all('/loginsubmit', function(req, res){

  var mybody = req.body;
  var username = req.body.username;
  var password = req.body.password;

  userCheck = objectChecker(mockusers, username);
  if (userCheck){
//    res.send(userCheck);

    if (userCheck === req.body.password){
    req.session.username = username;
    res.redirect('/draw');
    }
    else {
      res.redirect('/login');
    }

  }
  else {
    res.redirect('/login');
  }
});

app.listen(3000);

