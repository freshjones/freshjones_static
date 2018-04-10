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
        $(this).find('.subnav-panel').addClass('subnav-panel-active');
      })
      .click(function(e){
        //e.preventDefault();
        clearTimeout(timeout);
      })

  });
}(jQuery));
