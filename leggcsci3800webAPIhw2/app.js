/**Christopher Legg
 ** CSCI 3800 WebAPI hw2
 ** adapted from Hs2Server.js, Created by shawnmccarthy on 2/22/16.
 **/

var express = require('express');
var app = express();

// GETs
app.get('/gets', function(req, res){
  if (req.method === 'GET') if (Object.keys(req.query).length > 0) {
    res.send(req.query);
  } else {
    res.send('No headers or query parameters were sent in');
  }
});

// POST
app.post('/posts', function (req, res) {
  if (req.method === 'POST') if (Object.keys(req.query).length > 0) {
    res.send(req.query);
  } else {
    res.send('No headers or query parameters were sent in');
  }
});

// PUT
app.put('/puts', function (req, res) {
  if (req.method === 'PUT') if (Object.keys(req.query).length > 0) {
    res.send(req.query);
  } else {
    res.send('No headers or query parameters were sent in');
  }
});

// DELETE
app.delete('/deletes', function (req, res) {
  if (req.method === 'DELETE') if (Object.keys(req.query).length > 0) {
    res.send(req.query);
  } else {
    res.send('No headers or query parameters were sent in');
  }
});

// requests made to the base URL rejected
app.all('/', function (req, res) {
  res.status(403).send('No URN specified');
});

// invalid request response
app.use('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  err.message = "Given HTTP method not accepted";
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }

  res.send(err.message || '** no unicorns here **');
});

app.listen(3001);
console.log("server running on http://localhost:3001/");
