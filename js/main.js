function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '300%',
    triggerElement: '#courses-pin',
    triggerHook: 0,
  })
    .setPin('#courses-pin')
  // .addIndicators()
  .addTo(controller);

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '#projects-pin',
    triggerHook: 0,
  })
    .setPin('#projects-pin')
    // .addIndicators()
    .addTo(controller);
}

if (document.documentElement.clientWidth > 822) {
  splitScroll();
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var cStatus;

if (document.documentElement.clientWidth >= 822) {
  cStatus = 'large';
} else if (document.documentElement.clientWidth < 822) {
  cStatus = 'small';
}

let cReload = () => {
  var myUrl = window.location;
  window.location.replace(myUrl);
}

window.onresize = function() {
  if ((cStatus != 'small' && document.documentElement.clientWidth < 822) || (cStatus != 'large' && document.documentElement.clientWidth >= 822)) {
    cReload();
  }
}
