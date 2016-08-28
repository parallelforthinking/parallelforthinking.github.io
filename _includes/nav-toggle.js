console.log('we out here')
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
});
