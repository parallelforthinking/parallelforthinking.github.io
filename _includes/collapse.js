$( document ).ready(function() {
  $("#contributors-collapse").click(function(event){
    $(event.target).hide()
    $(".contributor-table").hide()
    $(".contributors").height("40px")
    $("#contributors-expand").show()

    $("#contributors-expand").click(function(event){
      $(".contributor-table").show()
      $(".contributors").height("340px")
      $("#contributors-expand").hide()
      $("#contributors-collapse").show()
    })
  });

  $("#archive-collapse").click(function(event){
    $(event.target).hide()
    $(".archives-inner").hide()
    $(".archives").height("40px")
    $("#archive-expand").show()

    $("#archive-expand").click(function(event){
      $(".archives-inner").show()
      $(".archives").height("420px")
      $("#archive-expand").hide()
      $("#archive-collapse").show()
    })
  });
});
