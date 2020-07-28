// Calling dependencies in package.json
const express 				= require("express"),
			app 						= express();

// Setting up Express
app.use(express.static("public"));


// Setting the port for the server
const port = 3000;
app.listen(port, () => {
	console.log("Server is on")
});