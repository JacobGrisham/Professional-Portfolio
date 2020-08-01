// Calling dependencies in package.json
const express 				= require("express"),
			app 						= express(),
			path 						= require('path'),
			sslRedirect 		= require('heroku-ssl-redirect'),
			helmet 					= require("helmet"),
			lozad           = require('lozad');

// Setting up Express
app.use("/", express.static(path.join(__dirname, "public")))
// If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve

// Enable ssl redirect
app.use(sslRedirect());

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

/*
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
*/

// Thumbnail image route
app.get("/thumbnail", function(req,res){        
	res.send('<img src="public/img/thumbnail.png">');
});

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});