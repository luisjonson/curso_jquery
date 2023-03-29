$(document).ready(function(){
  $(":text").keyup(function(){
    $("#msg").text($(this).val());
  }).focus(function(){
    $(this).css("background", "yellow")
    $("#msg").text("Focus");
  }).blur(function(){
    $(this).css("background", "red")
    $("#msg").text("blur");
  });

  $("form").submit(function(){
    if($(":text").val() == "XTI"){
      return true;
    }
    return false;
  })

  $("select").change(function(){
    var escolha = $("option:selected").text();
    $("#msg").text("escolhido : " + escolha);
  });

  $("textarea").select(function(){
    $("#msg").text("selecionaou");
  });
 /* $(":text").keypress(function(){
    $("#msg").text($(this).val());
  });
  */
  /*$(":text").keydown(function(){
    $("#msg").text($(this).val());
  });
  */
});


