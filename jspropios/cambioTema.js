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

});

function setEstilo(estilo){
    if(estilo==0){    //estilo dark
        $("link[href='csspropios/redstyle.css']").attr("href", "csspropios/darkstyle.css");
        estilo = 1;
    }
    else{ //estilo rojo
        $("link[href='csspropios/darkstyle.css']").attr("href", "csspropios/redstyle.css");
        estilo=0;
    }
    return estilo;
}