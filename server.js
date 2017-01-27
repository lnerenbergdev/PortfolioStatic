// Requires express, mongoose, body-parser

// Initialize express
var express = require("express");
// Initialize express app
var app = express();


// Initialize port constant
const PORT = process.env.port || 8000;


// Initialize bodyparser
var bodyParser = require("body-parser");
// Set body parser urlencoding 
app.use(bodyParser.urlencoded({extended: false}));
// Set first layer of express stack as bodyParser
app.use(bodyParser.json());

// Use public folder
app.use(express.static('public'));

// Set secound layer of express stack to server index on get request to "/" 
app.get("/", (req, res) => {
	// Send index.html stored in current directory 
	res.sendFile(__dirname + "/public/index.html");
});



// Express Stack: Error Handling 

// Handle 404 error
app.use((req, res, next) => {
	res.status(404);
	res.send("File not found.");
});

// Handle 500 error
app.use((err, req, res, next) => {
	res.status(500);
	res.send("500 Error: Too much sass");
});

// Set express app to listen on defined port constant
app.listen(PORT, () => {
	console.log("Blog server Port: " + PORT);
});