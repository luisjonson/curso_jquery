$(document).ready(function(){
  $("button").click(function(){
   /* $("div").text("Click").css({
      color: "blue"
    });
    */
    }).dblclick(function(){
      /*$("div").text("Click duplo").css({
       color: "red"
      });
      */
    }).mouseover(function(){
      /*$("div").text("Evento mouse").css({
        color: "pink"
      });*/
    }).mouseout(function(){
      $("div").text("mouse out").css({
        color: "green"
      });
    }).mouseup(function(){
      $("div").text("mouse up").css({
        color: "yellow"
      });
    }).mousedown(function(){
      $("div").text("mouse down").css({
        color: "orange"
      });
    }).mousemove(function(p){
      $("div").text("X= " + p.clientX + " Y= " + p.clientY).css({
        color: "orange"
    });
  });
});


