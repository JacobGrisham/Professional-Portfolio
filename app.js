// Calling dependencies in package.json
const sslRedirect 		= require('heroku-ssl-redirect'),
			express 				= require("express"),
			app 						= express();

// Enable ssl redirect
app.use(sslRedirect());

// Setting up Express
app.use(express.static("public"));

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});