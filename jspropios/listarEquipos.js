var abrirEquipos=false;


$(document).ready(function(){
    $('#equipos').click(function(){
        var $this = $(this); //cache the reference
        if (!$this.hasClass('disabled')) {
            $("#equipos").addClass('disabled'); 
            $("#fixture").removeClass('disabled');
            $("#posiciones").removeClass('disabled'); 
            
            $("#tablaPosicion").remove();
            $("#contendorFixture").remove();

            $("#gridEquipos").append($("<div/>").addClass("row").attr("id","contenedorEquipos"));
        
            var contenedor=$("#contenedorEquipos");


            $.getJSON('json/equipos.json', function(equipos){
                hacerTabla(contenedor,equipos);
            });
            $("#contenedorEquipos").show();
            $('html, body').animate({
                scrollTop: $("#contenedorEquipos").offset().top
                }, 500);
          
            $("body").on("click",".participante",function(e) {
                var selectedLiText = $(this).text();
                selectedLiText=selectedLiText.substring(11);
                $.getJSON('json/jugadores.json', function(jugadores){
                    var pantallaJ= getPantallaJugador(selectedLiText,jugadores);
                    $("#descripcionEquipo").append(pantallaJ);
                    $("#tablaEquipos").hide();
                    $("#descripcionEquipo").show();
                }); 
            }); 
        }
        else{
            $("#contenedorEquipos").remove();
            $('html, body').animate({
                scrollTop: $("#cabeza").offset().top
                }, 500);
            $this.removeClass('disabled');
        }

    });
    
    
    });


function hacerTabla(container,dataEquipos){
    var table= $("<table/>").addClass('table table borderless table-dark table-striped table-md');

    var i=0;

    var row= $("<tr/>");
    var row2= $("<tr/>");

    $.getJSON('json/jugadores.json', function(jugadores){

    $.each(dataEquipos.equipos,function(key,equipo){
        
        //Creamos lista donde agregaremos caracteristicas de equipo
        var lista=$("<ul/>").addClass('list-group');

        //Obtenemos caracteristicas
        var srcImagen="img/logos/"+equipo.logo;
        var imagen=$("<img/>").attr({src:srcImagen,width:"80px",height:"80px",align:"left"});
        imagen.addClass("rounded");
        var jugadorUno=(obtenerJugador(jugadores,equipo.id_jugadorUno));
        var jugadorDos=(obtenerJugador(jugadores,equipo.id_jugadorDos));
        
                
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light").text(equipo.nombre));
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light participante").text("Jugador 1: "+jugadorUno));
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light participante").text("Jugador 2: "+jugadorDos));
        
    if(i<3){    
        row.append($("<td/>").append(imagen).append(lista));
        table.append(row);
        i++;
        }
    else{
       row2.append($("<td/>").append(imagen).append(lista));
       table.append(row2);
       i++;
        }
                
    });

   });
    table.attr({height:"500px",cellspacing:"0",cellpadding:"0"});
    table.attr("id","tablaEquipos");

    return container.append(table);
}



function obtenerJugador(data,idjugador){
    var devolver; 
    $.each(data.jugadores,function(key,jugador){ 
        if(jugador.id_jugador==idjugador){
            devolver=jugador.userName;
        }
    });
    return devolver;
}

function getPantallaJugador(nombrejugador,jugadores){
    var player; 
     $.each(jugadores.jugadores,function(key,jugador){
         if(jugador.userName==nombrejugador){
             player=jugador;
         }
     });


     var source="img/logos/duende.jpg";
     var avatar=$("<img/>").attr({src:source,width:"100px",height:"100px"});
     var texto=$("<h1/>").addClass("display-4").text(nombrejugador);
      
     var devolver=avatar.add(texto);
     
     devolver=devolver.add($("<p/>").add($("<strong/>").text("Personaje Favorito: "+player.personaje)));
     
     var vehiculoLista=$("<dl/>");
     
     vehiculoLista=vehiculoLista.add($("<dt/>").text("Vehiculo Favorito:"));
     vehiculoLista=vehiculoLista.add($("<dd/>").text("- Kart: "+player.vehiculo.kart));
     vehiculoLista=vehiculoLista.add($("<dd/>").text("- Ruedas: "+player.vehiculo.ruedas));
     vehiculoLista=vehiculoLista.add($("<dd/>").text("- Glider: "+player.vehiculo.glider));
     
     devolver=devolver.add(vehiculoLista);
     
    



     return devolver;

 }