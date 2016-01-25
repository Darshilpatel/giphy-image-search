var express = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res){

res.send('Hello, World!');

});


app.get ('/gifs', function (req,res){
	var search = req.query.search;
 	request('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + search, function(err, reqe, body){
 		var json = JSON.parse(body);
 		var gif = json.data[0].images.fixed_height.url;
 		res.send('<img src="' + gif + '" />');
 	});

});

app.get('/bye', function(req,res){
	res.send('Goodbye, World!');
});


app.get('/:name', function(req,res){
var name = req.params.name;
res.send('Hello ' + name);
});


app.listen(3000);