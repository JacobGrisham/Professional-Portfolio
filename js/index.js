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
// Drop Down Button
// --------------------------------------

$(".btn--slideToggle").click(function() {
  $(this).next().toggle({
    duration: 1000,
    start: function() {
      jQuery(this).css('display','grid');
      }
    })
  
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
