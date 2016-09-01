$( document ).ready(function() {
  $('#contributors-collapse').click(function(event){
    $(event.target).hide()
    $(".contributor-table").hide()
    $(".contributors").height("40px")

    setTimeout(function(){
      console.log('we in here')
      $("#contributors-panel").click(function(event){
        $(".contributor-table").show()
        $(".contributors").height("340px")
        $("#contributors-collapse").show()
        $("#contributors-panel").off()
      })
    }, 100)
  });
});
