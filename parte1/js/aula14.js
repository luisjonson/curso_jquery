$(document).ready(function(){
    $("button").click(function(){
        //$("h1").remove();
        //$("ul").empty();
        $("ul").unwrap();
    });
    $("ul").append("<li>dentro e na ultima posição</li>");
    $("ul").prepend("<li>dentro e na primeira posição</li>");
    $("ul").before("<h1>Fora e Antes do Elemento.</h1>");
    $("ul").after("<h1>Fora e Depois do Elemento.</h1>");
    $("ul").wrap("<p></p>");
   // $("ul").append($("li").clone());
});


