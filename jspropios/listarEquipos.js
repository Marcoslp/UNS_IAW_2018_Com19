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
        var jugadorUno=(obtenerJugador(jugadores,equipo.id_jugadorUno));
        var jugadorDos=(obtenerJugador(jugadores,equipo.id_jugadorDos));
        
        var texto=$("<strong/>").append(equipo.nombre);

                
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light").text(equipo.nombre));
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light").text(jugadorUno));
        lista.append($("<li/>").addClass("list-group-item list-group-item-action list-group-item-light").text(jugadorDos));
        
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

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    