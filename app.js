// Calling dependencies in package.json
const sslRedirect 		= require('heroku-ssl-redirect'),
			express 				= require("express"),
			app 						= express(),
			path 						= require('path'),
			lozad 					= require('lozad');

// Enable ssl redirect
app.use(sslRedirect());

// Setting up Express
app.use("/", express.static(path.join(__dirname, "public")))
// If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve

// Thumbnail url
app.get("/thumbnail", function(req,res){        
	res.send('<img src="public/img/thumbnail.png">');
});

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});