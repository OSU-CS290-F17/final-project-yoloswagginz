// var path = require('path');
// var express = require('express');
// var exhbs = require('express-handlebars');
// var app = express();
// var port = process.env.PORT || 3000;

// // MongoDB //
// var MongoClient = require('mongodb').MongoClient;
// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || 27017;
// var mongoUser = process.env.MONGO_USER;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB;

// // Connection URL
// var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
//     '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

// var mongoConnection = null;

var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var postData = require('./postData');

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

// var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
//     '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoURL = 'mongodb://localhost:27017/data';

var mongoConnection = null;

// console.log("== Mongo URL:", mongoURL);


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

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});