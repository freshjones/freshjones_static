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
