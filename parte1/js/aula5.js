$(document).ready(function(){
   // descendente
    $("div span").css("background","pink");
    //filhos do elemento
    $("li > ul").css("color","red");
    $("#item_1 + li").css("color","blue");
    //irmãos do elemento
    $("#item_1 ~ li").css("color","blue");
});