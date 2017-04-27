var express = require('express');
var app = express();
var controller = require('./controllers/mapControllers');

app.use('/', controller.place);

app.listen(3000)
