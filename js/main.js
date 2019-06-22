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

splitScroll();
