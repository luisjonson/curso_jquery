$(document).ready(function(){
  //zebrando por linha impares
  $("#filmes tbody tr:odd").addClass("impar");
  $("#filmes tbody tr").hover(
    function(){$(this).addClass("destaque");},
    function(){$(this).removeClass("destaque")}
  );
});

