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
        var _this = $(this);

      if(event.keyCode == 13){

        if(!_this.val())
            return;

        $('.chatbot-content').append('<div class="chatbot-request"><div>' + _this.val() + '</div></div>');
     
        $.ajax({
            url: 'https://dxw110s3a1.execute-api.us-east-1.amazonaws.com/latest',
            type: "POST",
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify({ "message" : _this.val() }),
            success: function(data){
                $('.chatbot-content').append('<div class="chatbot-response"><div>' + data.message + '</div></div>');
                $(".chatbot-content").scrollTop($(".chatbot-content")[0].scrollHeight);
                _this.val('');
            }
        });

      }
    });

  });
}(jQuery));
