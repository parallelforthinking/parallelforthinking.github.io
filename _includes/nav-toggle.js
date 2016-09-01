$( document ).ready(function() {
  $('#archive').change(function(){
    if($(this).is(':checked')){
      $('#archive-panel').show();
    } else {
      $('#archive-panel').hide();
    }
  });

  $('#information').change(function(){
    if($(this).is(':checked')){
      $('#information-panel').show();
    } else {
      $('#information-panel').hide();
    }
  });

  $('#social-media').change(function(){
    if($(this).is(':checked')){
      $('#social-media-panel').show();
    } else {
      $('#social-media-panel').hide();
    }
  });

  $('#contributors').change(function(){
    if($(this).is(':checked')){
      $('#contributors-panel').show();
    } else {
      $('#contributors-panel').hide();
    }
  });
  $('#live-stream').change(function(){
    if($(this).is(':checked')){
      $('#live-stream-panel').show();
    } else {
      $('#live-stream-panel').hide();
    }
  });
  $('#branding').change(function(){
    if($(this).is(':checked')){
      $('#branding-panel').show();
    } else {
      $('#branding-panel').hide();
    }
  });

  $('#events').change(function(){
    if($(this).is(':checked')){
      $('#events-panel').show();
    } else {
      $('#events-panel').hide();
    }
  });
});
