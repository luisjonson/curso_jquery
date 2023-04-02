$(document).ready(function(){
  $(".numero").bind("keydown",function(e){
    //Retringir Caracteres
    var keyCode = e.which;
    var isStandard = keyCode > 96 && keyCode < 106;
   var isOther = (",8,46,37,38,39,40".indexOf("," + keyCode +",") > -1);
    if(isStandard || isOther){
      return true;
    }else{
      return false;
    }
  });
});

