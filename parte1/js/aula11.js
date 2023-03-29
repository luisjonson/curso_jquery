$(document).ready(function(){
    $("button").click(function(){
        //recupera o valor de um conteudo 
        /*
        alert($("p").html());
        */
       //altera o valor de um conteudo com teg html.
       /*
        $("p").html("<h1>Valor alterado</h1>");
        */
       // $("div").html($("p").html())
       // alert($("div").text());
       //$("p").html($("textarea").val());
       $("div").replaceWith($("p").html());


    });

});


