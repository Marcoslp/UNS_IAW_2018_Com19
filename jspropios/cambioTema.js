var estilo;

$(function(){
    if (recuperarEstilo() != undefined)
        estilo = setEstilo(recuperarEstilo());
    else 
        estilo = setEstilo(1);  

    $("#toggleB").click(function() {
       guardarEstilo(estilo);
       estilo = setEstilo(estilo);
    });

})

function setEstilo(estilo){
    if(estilo==0){    //estilo dark
        $('body').css("background", 'url("img/backgroundblack.jpg")');
        $(".navbar-custom").css( "background-color","#0a0a0a");
        $(".content-menu").css( "background","#0a0a0a");
        $("#loginButton").css("background-color","#e60012");
        $("#loginButton").css("border-color","#e60012");
        estilo = 1;
    }
    else{ //estilo rojo
        $('body').css("background", 'url("img/background.jpg")');
        $(".navbar-custom").css("background-color","#e60012");
        $(".content-menu").css("background","#e60012");
        $("#loginButton").removeClass("btn btn-danger").addClass("btn btn-primary");
        $("#loginButton").css({ 'background-color' : '', 'border-color' : '' });
        estilo=0;
    }
    return estilo;
}