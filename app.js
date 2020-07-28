// Calling dependencies in package.json
const express 				= require("express"),
			app 						= express();

// Setting up Express
app.use(express.static("public"));

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});