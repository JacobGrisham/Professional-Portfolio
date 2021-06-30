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
// Parallax with lax.js
// --------------------------------------
window.onload = function() {
	lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.lax', {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY", "elOutY"],
          {
            375: [100, 0, 100], // Screen width < 375
            500: [100, 0, 200], // Screen width > 375 and < 500
            900: [100, 0, 350], // Screen width > 900
          },
        ]
      }
    })
}

// --------------------------------------
// Fade Out Banner Image when Scrolling Down
// --------------------------------------
$(window).scroll(() => {
  var scrollTop = $(this).scrollTop();

  $('.banner').css(
    'background', () => {
      var elementHeight = $(this).height(),
      opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.4) + 0.8;
      return `linear-gradient(to right bottom, rgba(13, 35, 55, 0.99), rgba(23, 45, 65, ${opacity}))`
    }
  );
});


// --------------------------------------
// Popup For Each Project Info Description
// --------------------------------------
const btns = document.getElementsByClassName('card__popup');
const closebtns = document.getElementsByClassName('popup__close');
const popups = document.getElementsByClassName('popup');
const popup_contents = document.getElementsByClassName('popup__content');

[...btns].forEach((btn, i) => {
  btn.onclick = () => {
    popups[i].classList.add("active")
  }
});

[...closebtns].forEach((closebtn, i) => {
  closebtn.onclick = () => {
    popups[i].classList.remove("active")
  }
});

window.onclick = (e) => {
  [...popups].forEach((modal) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
};  

// --------------------------------------
// Drop Down Button
// --------------------------------------
$(".btn--stack").click(function() {
  $(this).next().slideToggle(150);
});

$(".btn--slideToggle").click(function() {
  $(this).next().toggle(1000);
});

// --------------------------------------
// Hide/Show Links
// --------------------------------------
$("#technologies-link").click(function() {
  $("#technologies").toggle();
});
$("#background-link").click(function() {
  $("#background").toggle();
});

// --------------------------------------
// Skill SVGs fade-in
// --------------------------------------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  root: null,
  threshold: 0.2,
  rootMargin: "-50px"
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