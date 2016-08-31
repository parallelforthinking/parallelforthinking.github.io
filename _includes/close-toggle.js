$(document).ready(function() {
  $(".close-button").click(function(event) {
    var id = event.target.id;

    if (id == "archive-close") {
      $("#archive-panel").hide();
      $('#archive').prop('checked', false);
    }
    else if (id== "contributors-close"){
      $("#contributors-panel").hide();
      $('#contributors').prop('checked', false);
    }
    else if (id == "information-close") {
      $("#information-panel").hide();
      $('#information').prop('checked', false);
    }
    else if (id == "social-media-close") {
      $("#social-media-panel").hide();
      $('#social-media').prop('checked', false);
    }
    else if (id == "events-close") {
      $("#events-panel").hide();
      $('#events').prop('checked', false);
    }
    else if (id == "live-stream-close") {
      $("#live-stream-panel").hide();
      $('#live-stream').prop('checked', false);
    }
  });
});
