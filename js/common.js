// --------------------------------------
// Loading screen Animation
// --------------------------------------
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

// --------------------------------------
// Loading screen logic
// --------------------------------------
document.onreadystatechange = () => { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector(".loader").style.visibility = "visible"; 
  } else { 
      document.querySelector(".loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
};

// --------------------------------------
// Global site tag (gtag.js) - Google Analytics
// --------------------------------------
window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SV51NLJS21');

// --------------------------------------
// Lazyloading Videos and Images
// --------------------------------------
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

// --------------------------------------
// Copyright Date
// --------------------------------------
var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;