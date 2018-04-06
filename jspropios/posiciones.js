
$(function(){
    $.getJSON('json/fixture.json', function(fixture){
        $.getJSON('json/equipos.json',function(equipos){
            armarTablaPosiciones(fixture, equipos)
        });
    });
 
})



function armarTablaPosiciones(dataCarreras, dataEquipos){
    $("#posiciones").click(function(){
        var $this = $(this); //cache the reference
        if (!$this.hasClass('disabled')) {
            $this.addClass('disabled'); //acordarse cuando haga otro boton recorrer para desactivar el disabled
            var puntos = new Array(6,3);
            puntos = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
            var index=0;
            var cantPosiciones = 12;
    
            $.each(dataCarreras.fixture,function(key,carrera){
                $.each(dataEquipos.equipos,function(key,equipo){
                    for(var i = 0; i < cantPosiciones;i++){
                        if(equipo.id_jugadorUno == carrera.posiciones[i][0].jugador || equipo.id_jugadorDos == carrera.posiciones[i][0].jugador){
                            puntos[index][0] = equipo.id_equipo;
                            puntos[index][1] += carrera.posiciones[i][0].puntaje;
                            if(carrera.posiciones[i][0].puntaje == 15)
                                puntos[index][2] +=1;
                        }   
                    }
                index++;   
                });
            index=0;
            });
            
            puntos.sort(function(a, b){
                if (a[1] === b[1]) {
                    return 0;
                }
                else {
                    return (a[1] < b[1]) ? 1 : -1;
                }
            });
      
            var contenedor = $("#tablaPosicion");
            var arr = [["Equipo", "Puntos", "Wins"]];
            arr = arr.concat(puntos);
            makeTable(contenedor,arr);
        } 
        else{
            return false;
        }
    })
}

function makeTable(container, data) {
        var table = $("<table/>").addClass('table table table-dark table-striped table-bordered table-md table-md');
        $.each(data, function(rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function(colIndex, c) { 
                row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
            });
            table.append(row);
        });
        return container.append(table);
}
