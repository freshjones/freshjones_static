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
