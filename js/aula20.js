$(document).ready(function(){
  $("button:eq(0)").click(function(){
    //$("div").fadeOut(3000);
    //$("div").fadeIn(3000);
    //$("div").fadeTo(1000,0.3);
    $("div").fadeToggle(1000);
  });

  $("button:eq(1)").click(function(){
    //$("div").slideUp(3000);
    //$("div").slideDown(3000);
    $("div").slideToggle(1000);
  });
});

