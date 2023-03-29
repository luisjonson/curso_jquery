$(document).ready(function(){
    $("button").click(function(){
      // alert($("img").css("width"));
      //alert($("img").css("height"));
      /*$("img").css({
        height: "340px",
        width: "300px",
        background: "#00FF00",
        border: "5px solid #B22222"
      });
      */

     // alert($("img").hasClass("destaque"));
     // $("img").removeClass("destaque")
     //$("img").addClass("destaque")

     //trabalhando com largura e altura
     //alert($("img").height());
     // alert($("img").width());
     //alert($("img").innerWidth());
     //alert($("img").outerWidth());

     //Posição
     alert($("img").position().top);
     alert($("img").position().left);
     alert($("img").offset().top);
     alert($("img").offset().left);
    });
});


