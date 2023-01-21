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