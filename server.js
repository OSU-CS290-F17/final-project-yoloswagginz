var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var postData = require('./postData');

app.engine('handlebars', exhbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');