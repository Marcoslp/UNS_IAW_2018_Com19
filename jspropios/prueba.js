$(function(){
     var tabla = $('#tablaJugadores');
     
     $.getJSON('json/jugadores.json', function(data) {
        $.each(data.jugadores,function(key,value){
            tabla.append(
                $(document.createElement('tr')).text(value.userName)
            );
        });
    });

});
   

