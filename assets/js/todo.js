// Checks off a to-do by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
})

// Click on X to delete to-do
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

// Gets new to-do from input and creates new li
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
})
