$(function(){
    $.getJSON('json/fixture.json', function(fixture){
        $.getJSON('json/equipos.json',function(equipos){
            armarFixture(fixture)
        });
    });
 
})

function armarFixture(carreras){
    $("#fixture").click(function(){
        $("#equipos").removeClass('disabled'); 
        $("#posiciones").removeClass('disabled'); 
        var fechaMapa = new Array(4,3);
        fechaMapa= [[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        var index=0;
        var cantPosiciones = 12;


        $.each(carreras.fixture,function(key,carrera){
            fechaMapa[index][0] = carrera.fecha;
            fechaMapa[index][1] = carrera.mapa;
            fechaMapa[index][2] = carrera.fotoMapa;
            index++;
        })

        var contenedor = $("#contenedorFixture");
        makeFixturePanel(contenedor, fechaMapa);
    })
}

function makeFixturePanel(container, data){

    var img,span,li,src,h4;


    for(var i =0; i < data.length; i++){      
        span = $("<span/>");
        li = $("<li/>");
        img = $("<img/>");
        h4 = $("<h4/>")
      
        src = ("img/mapas/").concat(data[i][2]);  

        fecha = "Fecha "+data[i][0]+":";
        nombreMapa = data[i][1];  
       
        h4.text(fecha+" "+nombreMapa);


        img.attr("src",src);
        img.attr("width","300px");
       
        span.append(h4);
        span.append(img);
        
        li.append(span);
        container.append(li);
    }
}