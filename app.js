// Calling dependencies in package.json
const express 				= require("express");
const	app 						= express();
const	helmet 					= require("helmet");
const	compression 		= require("compression");

// Setting up Express
// app.use("/", express.static(path.join(__dirname, "public")))
app.use(express.static(__dirname + "/public")); // Using __dirname + is a better way to navigate to the file
app.set("view engine", "ejs");

app.use(compression()); // Compress all responses

app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["https://www.jacobgrisham.com/", "https://www.jacobgrisham.com/img/sprite.svg", "https://www.google-analytics.com/"],
      scriptSrc: ["'self'", "https://www.npmjs.com/package/lax.js", "https://cdn.jsdelivr.net/npm/lax.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", "https://www.googletagmanager.com/"],
			objectSrc: ["'none'"],
			fontSrc: ["https://fonts.gstatic.com"],
			imgSrc: ["'self'", "https://www.facebook.com/", "data:"],
			styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
			manifestSrc: ["https://www.jacobgrisham.com/site.webmanifest", "http://localhost:3000/site.webmanifest"],
			frameSrc: ["http://www.youtube.com/"]
		},
		reportOnly: true,
  })
);
app.use(
  helmet.hsts({
		maxAge: 31536000,
		includeSubDomains: true,
    preload: true
  })
);

app.get("/", function(req,res){
	res.header("Cache-control", "public, max-age=86400")
	res.render("index");
});

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});