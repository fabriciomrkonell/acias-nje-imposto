'use strict';

var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(3001);