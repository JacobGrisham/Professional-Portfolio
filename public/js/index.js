// Loading screen Animation
setTimeout(function () {
	document.getElementById("code-8").style.visibility = "visible";
}, 0);
setTimeout(function () {
	document.getElementById("code-7").style.visibility = "visible";
}, 500);
setTimeout(function () {
	document.getElementById("code-6").style.visibility = "visible";
}, 1001);
setTimeout(function () {
	document.getElementById("code-5").style.visibility = "visible";
}, 1500);
setTimeout(function () {
	document.getElementById("code-4").style.visibility = "visible";
}, 2000);
setTimeout(function () {
	document.getElementById("code-3").style.visibility = "visible";
}, 2500);
setTimeout(function () {
	document.getElementById("code-2").style.visibility = "visible";
}, 3000);
setTimeout(function () {
	document.getElementById("code-1").style.visibility = "visible";
}, 3500);

// Loading screen logic
document.onreadystatechange = () => { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector(".loader").style.visibility = "visible"; 
  } else { 
      document.querySelector(".loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 

// Parallax with lax.js
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

// Popup for Project Info

// Drop down button
$(".btn--stack").click(function(){
  var id = $(this).attr("id");
  console.log(id);
  $(".card__stack").slideToggle(150);
});

$(".btn--curriculum").click(function(){
  $(".curriculum").slideToggle(1000);
});



// More Info button


// Skill SVGs fade-in
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// Lazyloading Videos and Images
const media = document.querySelectorAll("[data-src]")

function preloadMedia(iframe) {
  const src = iframe.getAttribute("data-src");
  if(!src) {
    return;
  }
  iframe.src = src;
}

const mediaOptions = {
  threshold: 0,
  rootMargin: "0px 0px 500px 0px"
};

const mediaObserver = new IntersectionObserver((entries, mediaObserver) => {
  entries.forEach (entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadMedia(entry.target);
      mediaObserver.unobserve(entry.target);
    }
  });
}, mediaOptions);

media.forEach(video => {
  mediaObserver.observe(video);
})

// Copyright Date
var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;

// Facebook Analytics
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2733409333567092',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));