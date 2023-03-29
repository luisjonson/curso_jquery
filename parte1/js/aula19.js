$(document).ready(function(){
  $("button:eq(0)").click(function(){
    $("div").hide(3000);
  });
  $("button:eq(1)").click(function(){
    $("div").show(3000);
  });
  $("button:eq(2)").click(function(){
    $("div").toggle(3000);
  });
});

