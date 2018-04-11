$(function () { 

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax() 
    .fromTo(".scroll-item-2", 1, {y: "-100%"}, {y: "0%"})
    .fromTo(".scroll-item-3", 1, {y: "-100%"}, {y: "0%"})
    .fromTo(".scroll-item-4", 1, {y: "-100%"}, {y: "0%"});

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: ".scrollTrigger",
      triggerHook: "onLeave",
      duration: "100%"
    })
    .setPin(".scrollTrigger")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);
});
