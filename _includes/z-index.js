var findHighestIndex = function(){
  var indexHighest = 0; 
  // more effective to have a class for the div you want to search and 
  // pass that to your selector
  $(".draggable, .resize-drag").each(function() {
    // always use a radix when using parseInt
    var index_current = parseInt($(this).css("zIndex"), 10);
    if(index_current > indexHighest) {
      indexHighest = index_current;
    }
  });

  return indexHighest;
}


$( document ).ready(function() {
  $(".draggable, .resize-drag").click(function(event){
    var indexHighest = findHighestIndex()+1;

    console.log("click", event.target)
    $(event.target).css("zIndex", indexHighest)

  })
})
