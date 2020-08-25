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
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'", "http://localhost:3000/img/sprite.svg", "https://www.jacobgrisham.com/img/sprite.svg"],
      scriptSrc: ["'self'", "https://cdn.jsdelivr.net/npm/lax.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", "https://connect.facebook.net/en_US/sdk.js"],
			objectSrc: ["'none'"],
			fontSrc: ["https://fonts.gstatic.com"],
			imgSrc: ["'self'", "https://www.facebook.com/tr/?id=2733409333567092&ev=fb_page_view&dl=http%3A%2F%2Flocalhost%3A3000%2F&rl=&if=false&ts=1598340316655&sw=1440&sh=900&at="],
			styleSrc: ["'self'", "https://fonts.googleapis.com", "'sha256-tsYFq5pUcggQKFXnvmlvUrk8MgTJLL1Gjnqenv201b8='"],
			manifestSrc: ["https://www.jacobgrisham.com/site.webmanifest", "http://localhost:3000/site.webmanifest"],
			frameSrc: ["http://www.youtube.com/"]
    },
  })
);
app.use(
  helmet.strictTransportSecurity({
		maxAge: 31536000,
		includeSubDomains: true,
    preload: true
  })
);

app.get("/", function(req,res){
	res.render("index");
});

// Use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
	console.log("Server is on");
	});