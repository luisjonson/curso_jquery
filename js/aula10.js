$(document).ready(function(){
    $("button").click(function(){
       // alert($("img").attr("src"));
       //Alterar um valor de um atributo src
      /* $("img").attr("src","img/img2.png")
       .attr("title","Globo Play")
       */
      // outra forma de alterar um atributo com formato Json
      /*
       $("img").attr({
        src: "img/img2.png",
        title: "Globo Play"})
        */
        // remove um atributo
        /*
        $("img").removeAttr("src").removeAttr("alt").removeAttr("title");
        */
        //alert($("img").hasClass("destaque"));
        $("img").toggleClass("destaque");

    });

});


