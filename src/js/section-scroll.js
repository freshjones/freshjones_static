$(function () { 

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo(".scroll-item-1", .2, {opacity: "0"}, {opacity: "1"}) 
    .fromTo(".scroll-item-2", .2, {opacity:  "0"}, {opacity: "1"})
    .fromTo(".scroll-item-3", .2, {opacity: "0"}, {opacity: "1"})
    .fromTo(".scroll-item-4", .2, {opacity: "0"}, {opacity: "1"});

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
