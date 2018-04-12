/*
$(function () { 

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax() 
    .fromTo(".scroll-item-2", 1, {y: "-100%",opacity:0}, {y: "0%",opacity:1})
    .fromTo(".scroll-item-3", 1, {y: "-100%",opacity:0}, {y: "0%",opacity:1})
    .fromTo(".scroll-item-4", 1, {y: "-100%",opacity:0}, {y: "0%",opacity:1})
    .fromTo(".scroll-item-5", 1, {y: "-100%",opacity:0}, {y: "0%",opacity:1})
    .fromTo(".scroll-item-6", 1, {y: "-100%",opacity:0}, {y: "0%",opacity:1});

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: ".scrollTrigger",
      triggerHook: "onLeave",
      duration: "100%"
    })
    .setPin(".scrollTrigger")
    .setTween(wipeAnimation)
    .addTo(controller);
});
*/
