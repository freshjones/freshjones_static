(function ($) {
  $(function() {
    $('.internal-notes .icon').on('click',function(){
      //$('section').css("z-index", '20');
      //$('.internal-notes .contents').removeClass('contents-active');
      //$(this).parents('section').css("z-index", "100");
      $(this).siblings().toggleClass('contents-active');
    });
  });
}(jQuery));

(function ($) {
  $(function() {
    $('.menu-toggle, .mobile-nav .toggle').on('click',function(){
      $('body').toggleClass('show-mobile-nav');
    })
  });
}(jQuery));






var scrollFunctions = {};

(function($) {
   
  scrollFunctions.visible = function() 
  {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("main section")
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  };
 
})(jQuery);

$(function() {
  scrollFunctions.visible();
  $(document).on("scroll", function () {
    scrollFunctions.visible();
  })
});






$(function () { 

  $(".section-scroll").click(function(e) {
    e.preventDefault();
    $('html, body').animate({ 
      scrollTop: $(".solutions-" + $(this).data('section') ).offset().top - 120 
    }, 1000);
  });

});

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


(function ($) {
  $(function() {
    /*
    var timeout;
    $('.show-subnav')
      .click(function(e){
        e.preventDefault();
        clearTimeout(timeout);
        $('.show-subnav').removeClass('show-subnav-active');
        $(this).addClass('show-subnav-active');
        $('.subnav-panel').removeClass('subnav-panel-active');
        $(this).find('.subnav-panel').addClass('subnav-panel-active');
      })
    */

    $('.show-subnav')
      .mouseenter(function(e) {
        $(this).addClass('show-subnav-active');
        $(this).find('.subnav-panel').show();
      })
      .mouseleave(function(e) {
        $(this).removeClass('show-subnav-active');
        $(this).find('.subnav-panel').hide();
      })

    $('.subnav-drop-down-item')
      .mouseenter(function() {
        $(this).find('ul:first').show();
      })
      .mouseleave(function() {
        $(this).find('ul:first').hide();
      })
  });
}(jQuery));

/*
(function ($) {
  $(function() {
    var timeout;
    $('.show-subnav')
      .mouseleave(function() {
        var _this = $(this);
        timeout = setTimeout(function(){ 
          _this.find('.subnav-panel').removeClass('subnav-panel-active');
        }, 200);
      })
      .mouseenter(function() {
        clearTimeout(timeout);
        $('.subnav-panel').removeClass('subnav-panel-active');
        $(this).find('.subnav-panel').addClass('subnav-panel-active');
      })
      .click(function(e){
        //e.preventDefault();
        clearTimeout(timeout);
      })

  });
}(jQuery));
*/
