// Calling dependencies in package.json
const express 				= require("express"),
			app 						= express(),
			bodyParser 			= require("body-parser"),
			flash						= require("connect-flash"),
  		methodOverride	= require("method-override");

// Setting up Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); // Using __dirname + is a better way to navigate to the file
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());


// Setting the port for the server
const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("Server is on")
});