$(document).ready(function(){
    $("button").click(function(){
       
       var img = $("<img/>",{
        src: "img/img1.png",
        title: "Jornal Hoje",
        click: function(){
            alert("Tudo deu certo");
        }
       });

       var ul = $("<ul/>").append($("<li/>").append("Programador de interfaces"));
       $("body").append(img).append(ul);
    });
});


