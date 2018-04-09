/*
A partir de un componente, carga la vista correspondiente
*/

var comp = ["#equipos","#fixture","#posiciones"];

var contenedores = ["#tablaPosicion","#contenedorFixture","#contenedorEquipos"];

function cargarVista(componente, id){
    for (var i = 0; i < comp.length; i++){
        if(id != comp[i]){
            $(comp[i]).removeClass('disabled'); 
            $(contenedores[i]).hide();
        }
        else{
            $(comp[i]).addClass('disabled'); 
        }
    }
   return true;
}