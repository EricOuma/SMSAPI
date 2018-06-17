var express  = require("express");
var mysql = require("mysql");
var app = express();

//Establishing connection
var con = mysql.createConnection({
	host:"kuchristianunion.org",
	user:"kuchrist_admin",
	password:"b63mWoTw0Q",
	database:"kuchrist_registerdb"
});

//Fetching the phone numbers from the phone column
con.connect(function(err){
	if(err) throw err;
	con.query("SELECT phone FROM phone", function(err, results, fields){
		if(err) throw err;
		console.log(results);
	});
});

app.get('/', function(req, res){
	res.send('Hello World');
});

var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});

