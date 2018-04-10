window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    reiniciar();

    $('html, body').animate({
        scrollTop: $("#cabeza").offset().top
        }, 500);
}

function reiniciar(){

    $("#equipos").addClass('enabled'); 
    $("#fixture").addClass('enabled');
    $("#posiciones").addClass('enabled'); 

    $("#equipos").removeClass('disabled'); 
    $("#fixture").removeClass('disabled');
    $("#posiciones").removeClass('disabled'); 


    $("#contenedorEquipos").remove();
    $("#contenedorFixture").remove();
    $("#tablaPosicion").remove();
    $("#descripcionEquipo").remove();
}