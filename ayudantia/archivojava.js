$(document).ready(function(){
    var menu = $(".Menu");
    menu.hover(function(){
        $(this).css("color", "red");
    }, function(){
        $(this).css("color", "black");
    });
    var fotos = $(".fotos");
    var escondido = false;
    var boton1 = $("#boton1");
    boton1.click(function(){
        if (escondido == false){
            escondido = true;
            $(".fotos").hide();
        } else {
            escondido = false;
            $(".fotos").hide();
        }
    });
    var parrafo = $("#parrafo");
    
    var boton2 = $("#boton2");
    boton2.click(function(){
        $(".Menu").text("The online news")
    });
});