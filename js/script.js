$(document).ready(function() {

  $("#comparison").twentytwenty();
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
