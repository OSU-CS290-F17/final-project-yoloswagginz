var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exhbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	console.log("== Root page called.")
	res.status(200).render('homePage');
});

app.use(express.static('public'));

app.get('*', function (req, res) {
	// res.status(404).render('404Page');
	// Incorporate a 404 page at a later time

	// Test lines //
	res.status(404).send("This is a 404 Page.");
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});