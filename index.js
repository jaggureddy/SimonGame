$("h1").click(function(){
  $("h1").css("color","red");
});

$("button").click(function(){
  $("h1").animate({opacity:0.5});
});

// document.addEventListener("keydown",function(event){
//   console.log(event.key);
//   $("h1").css("textContext",event.key);
// });

$(document).keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
  $("h1").css("color","blue");
});
