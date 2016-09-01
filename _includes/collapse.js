$( document ).ready(function() {
  $("#contributors-collapse").click(function(event){
    $(event.target).hide()
    $(".contributor-table").hide()

    var contributorsHeight = $(".contributors").height()
    $(".contributors").height("40px")
    $("#contributors-expand").show()

    $("#contributors-expand").click(function(event){
      $(".contributor-table").show()
      $(".contributors").height(contributorsHeight)
      $("#contributors-expand").hide()
      $("#contributors-collapse").show()
    })
  });

  $("#archive-collapse").click(function(event){
    $(event.target).hide()
    $(".archives-inner").hide()
    var archiveHeight = $(".archives").height()
    $(".archives").height("40px")
    $("#archive-expand").show()

    $("#archive-expand").click(function(event){
      $(".archives-inner").show()
      $(".archives").height(archiveHeight)
      $("#archive-expand").hide()
      $("#archive-collapse").show()
    })
  });

  $("#information-collapse").click(function(event){
    $(event.target).hide()
    $(".information-inner").hide()

    var informationHeight = $(".information").height()
    $(".information").height("40px")
    $("#information-expand").show()

    $("#information-expand").click(function(event){
      $(".information-inner").show()
      $(".information").height(informationHeight)
      $("#information-expand").hide()
      $("#information-collapse").show()
    })
  });

  $("#events-collapse").click(function(event){
    $(event.target).hide()
    $(".events-text").hide()

    $(".events").height("40px")
    $("#events-expand").show()

    $("#events-expand").click(function(event){
      $(".events-text").show()
      $(".events").height("113px")
      $("#events-expand").hide()
      $("#events-collapse").show()
    })
  });

  $("#social-media-collapse").click(function(event){
    $(event.target).hide()
    $(".social-media-container").hide()

    $(".social-media").height("40px")
    $("#social-media-expand").show()

    $("#social-media-expand").click(function(event){
      $(".social-media-container").show()
      $(".social-media").height("471px")
      $("#social-media-expand").hide()
      $("#social-media-collapse").show()
    })
  });
});
