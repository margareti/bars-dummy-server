'use strict';

var app = require('connect')();
var http = require('http');
var moment = require('moment');


var serverPort = 8080;
var cors = require('cors');
var connectRoute = require('connect-route');
var query = require('connect-query');
var orders = [];

const bodyParser = require('body-parser');

app.use(cors());
app.use(query());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(connectRoute(function(router) {
  router.get('/', require('./routes/default'));
  router.get('/bars', require('./routes/bars'));
  router.get('/bars/:id', require('./routes/bar'));
  router.post('/placeRound', function (req, res) {
    console.log(req.body)
    orders.push(req.body);
    res.end(JSON.stringify(req.body))
  });
  router.get('/lastOrder', function (req, res) {
    if (orders.length) {
      var order = orders[orders.length - 1];
      res.end(JSON.stringify(order));
    }
    res.end('no orders')
  });
  router.get('/currentBarPrices/:id', require('./routes/products'));
}));

http.createServer(app).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});


