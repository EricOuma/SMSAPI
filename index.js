require('dotenv').config()
var express = require('express');
var mysql = require('mysql');
var app = express();

//Establishing connection
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Fetching the phone numbers from the phone column
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection Successfull");
        connection.query("SELECT phone FROM phone", function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            results  = results;
            console.log(results);
        });
    }

});

connection.end(function (err) {
    console.log('Connection Terminated');
});

app.get('/', function (req, res) {
    res.send("results");
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});


// var Client = require('mysql').Client;
// var client = new Client();
// client.host='kuchristianunion.org';
// client.user = 'kuchrist_admin'; 
// client.password = 'b63mWoTw0Q';//only needed if your mysql server isn't on your localhost
// client.port='3306'; //only needed if your mysql port isn't 3306

//     client.connect(
// //     	function(err) {
// //   if (err) {
// //     console.error('error connecting: ' + err.stack);
// //     return;
// //   }

// //   // console.log('connected as id ' + connection.threadId);
// //   client.query("SELECT phone FROM phone", function(err, results, fields){
// // 		if(err) {
// // 			console.log(err);
// // 		}
// // 		console.log(results);
// // 	});
// // }
// );

// var connection = mysql.createConnection({
// 	host:'kuchristianunion.org',
// 	port:'3306',
// 	user:'kuchrist_admin@138.201.56.86',
// 	password:'b63mWoTw0Q',
// 	database:'kuchrist_registerdb'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
//   connection.query("SELECT phone FROM phone", function(err, results, fields){
// 		if(err) {
// 			console.log(err);
// 		}
// 		console.log(results);
// 	});
// });



