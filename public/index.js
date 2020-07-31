
// INTERSECTION OBSERVER FOR YOUTUBE EMBED
// Create Intersection Observer
let options = {
  root: document.querySelector('#projects'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

// Targeting an element to be observed
let target = document.querySelector('#target');
observer.observe(target);