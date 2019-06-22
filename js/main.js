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



  window.onresize = function() {
    var myUrl = window.location;
    window.location.replace(myUrl)
  }

if (document.documentElement.clientWidth > 822) {
  splitScroll();
}
