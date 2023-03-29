$(document).ready(function(){
  /*
  $(":text").keyup(function(){
    $("#msg").text($(this).val());
  });
 */

  function msg(e,src,width){
    //$("#msg").text($(this).val());
    $("#msg").append($("<img/>").attr("src",src).css("width",width))
  }
  //$(":text").keyup(msg).focus(msg).blur(msg);
  $(":text").bind("keyup focus blur",msg);
  $(":button").bind("click",function(){
    //$("fieldset").delegate(":text", "keyup", msg);
    $("fieldset").undelegate(":text", "keyup", msg);

    /*
    $(":text").unbind("keyup",msg);
    $(":text").val("texto incluido");
    $(":text").trigger("focus");
    */
    $("fieldset").prepend("Outro<input type='text' name='outro'/>")
    $(":button").trigger("click",["img/ricado.png","90px"]);
  })
});

