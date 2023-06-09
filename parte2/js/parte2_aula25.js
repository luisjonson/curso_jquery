$(document).ready(function(){
  $("#filmes thead tr").css({
    background: "black",
    color: "#AAA",
    "text-align": "center"
  });
  //zebrando por linha impares
  $("#filmes tbody tr:odd").addClass("impar");
  $("#filmes thead tr th").each(function(i){
    var n = i + 1;
    var nomeColuna = $(this).text();

    $("tr td:nth-child("+n+")").hover(function(){
      var nomeCelula = $(this).text();
        $(this).addClass("destaque").prepend("<div class='tooltip'>Coluna "+nomeColuna+" <br/>Celula "+nomeCelula+"</div>");
        $(this).click(function(){
          $("tbody tr").removeClass("destaque");
          $(".tooltip").remove();
          $("tbody tr:contains("+nomeCelula+")")
          .addClass("destaque");
        });
      },
      function(){
        $(this).removeClass("destaque");
        $(".tooltip").remove();
      }
    );
  });
});

