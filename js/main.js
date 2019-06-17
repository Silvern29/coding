function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.title',
    triggerHook: 0
  })
    .setPin('.title')
  .addIndicators()
  .addTo(controller);
}

splitScroll();
