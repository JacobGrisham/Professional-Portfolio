// Calling dependencies in package.json
const express 				= require("express");
const	app 						= express();
const	helmet 					= require("helmet");
const	compression 		= require("compression");

// Setting up Express
// app.use("/", express.static(path.join(__dirname, "public")))
app.use(express.static(__dirname + "/public")); // Using __dirname + is a better way to navigate to the file
app.set('view engine', 'ejs');

app.use(compression()); // Compress Javascript

app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.

app.get("/", function(req,res){
	res.render("index");
});

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});