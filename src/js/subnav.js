
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
