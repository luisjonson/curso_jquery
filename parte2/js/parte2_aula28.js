$(document).ready(function(){
  $("#tudo").click(function(){
    $(":checkbox[name=tecnologia]")
    .attr("checked","checked");
    return false;
  });

  $("#nada").click(function(){
    $(":checkbox[name=tecnologia]")
    .removeAttr("checked");
    return false;
  });

  $("#toggle").change(function(){
    if(this.checked){
      $(":checkbox[name=tecnologia]")
    .attr("checked","checked");
    }else{
      $(":checkbox[name=tecnologia]")
      .removeAttr("checked");
    }
  });
});

