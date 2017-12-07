// var path = require('path');
// var express = require('express');
// var exhbs = require('express-handlebars');
// var app = express();
// var port = process.env.PORT || 3000;

var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var postData = require('./postData');

var app = express();
var port = process.env.PORT || 3000;

// MongoDB Stuff //
var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/data'; // For sake of time and other finals, we decided to stick with localhost using local user.
var mongoConnection = null;

console.log("== Mongo URL:", mongoURL);


app.engine('handlebars', exhbs({
	defaultLayout: 'main'
}));

app.use(bodyParser.json());

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	console.log("== Root page called.")
	res.status(200).render('homePage', {
		post: postData
	});

});



app.post('/addPost', function (req, res, res) {
	if (req.body.postTitle && req.body.userName && req.body.postContent) {
		console.log("Processing a new post...");
		res.status(200).send("New post added!");
	} else {
		res.status(400).send("Please make sure all fields are completed and try again.");
	}
});

app.use(express.static('public'));

app.get('*', function (req, res) {

	console.log("== 404 page called.")

	res.status(404).render('404Page');
});

MongoClient.connect(mongoURL, function (err, connection) {
	if (err) {
		throw err;
	}
	mongoConnection = connection;
	app.listen(port, function () {
		console.log("== Server is listening on port: ", port);
	});
});