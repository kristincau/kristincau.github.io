$(window).load(function() {
  $("#comparison").twentytwenty();
});

$(document).ready(function() {

  
  var header = new Headhesive('.navbar');

  $(".gif").hover(
    function() {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace(/\.png$/i, ".gif"));},
    function() {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace(/\.gif$/i, ".png"));}
  );


});
