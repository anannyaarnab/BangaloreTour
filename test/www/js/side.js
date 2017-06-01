$(document).ready( function() {
  //when the button is clicked
  $("#showMenu").click( function() {
    //apply toggleable classes
    $("#nav").toggleClass("show");
    $("#showMenu").toggleClass("moveButton");   
  });
  
  $("#wrapper").click( function() {
    $("#nav").removeClass("show");
    $("#showMenu").removeClass("moveButton");
  });
});


