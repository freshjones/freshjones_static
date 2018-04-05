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





