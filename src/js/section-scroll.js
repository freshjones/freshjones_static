$(function () { 

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo(".trigger-1", .2, {opacity: "0"}, {opacity: "1"}) 
    .fromTo(".trigger-2", .2, {opacity:  "0"}, {opacity: "1"})
    .fromTo(".trigger-3", .2, {opacity: "0"}, {opacity: "1"})
    .fromTo(".trigger-4", .2, {opacity: "0"}, {opacity: "1"});

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
