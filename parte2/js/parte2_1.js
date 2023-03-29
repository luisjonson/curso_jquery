$(document).ready(function(){
  //zebrando por linha impares
  /*
  $("#filmes tbody tr:odd").addClass("impar");
  */
  $("#filmes thead tr").css({
    background: "black",
    color: "#AAA",
    "text-align": "center"
  });
  $("#filmes tbody tr:nth-child(4n-1)").addClass("impar");
  $("#filmes tbody tr:nth-child(4n)").addClass("impar");
});

