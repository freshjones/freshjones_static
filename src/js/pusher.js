(function ($) {
  $(function() {
    $('.chatbot-close').click(function(){
        if( $(this).parent().hasClass('chatbot-collapsed') )
        {
            $(this).parent().removeClass('chatbot-collapsed');
            $(this).text('Close');
        } else {
            $(this).parent().addClass('chatbot-collapsed');
            $(this).text('Chat');
        }
    });

    $('.chatbot-message-input').keypress(function(event){
      if(event.keyCode == 13){

        if(!$(this).val())
            return;

        $('.chatbot-content').append('<div class="chatbot-request"><div>' + $(this).val() + '</div></div>');
        $(this).val('');

        $.ajax({
            url: 'http://localhost:9000/',
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify({ "user" : "me!" })
        });

      }
    });

  });
}(jQuery));
