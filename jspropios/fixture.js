
$(function(){
    $.getJSON('json/fixture.json', function(fixture){
        $.getJSON('json/equipos.json',function(equipos){
            armarFixture(fixture)
        });
    });
 
})

function armarFixture(carreras){
    $("#fixture").click(function(){
        var $this = $(this); //cache the reference
        if (!$this.hasClass('disabled')) {
            $("#fixture").addClass('disabled');
            $("#equipos").removeClass('disabled'); 
            $("#posiciones").removeClass('disabled'); 
         
            $("#tablaPosicion").remove();
            $("#contendorEquipos").remove();

            $("#gridFixture").append($("<div/>").addClass("row").attr("id","contenedorFixture"));
        
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
            $('html, body').animate({
                scrollTop: contenedor.offset().top
                }, 500);
            makeFixturePanel(contenedor, fechaMapa);
        }
        else{
            $("#contenedorFixture").remove();
            $('html, body').animate({
                scrollTop: $("#cabeza").offset().top
                }, 500);
            $this.removeClass('disabled');
        }
    })
}

function makeFixturePanel(container, data){

    var img,span,li,src,h4;
   container = container.append($("<div></div>").addClass('col-sm-3').append($("<li></li>")).append($("<h4>FIXTURE</h4>")));

   container = container.append($("<div></div>").addClass('col-sm-9'));

    for(var i =0; i < data.length; i++){      
        span = $("<span/>");
        li = $("<li/>");
        img = $("<img/>");
        h4 = $("<h5/>")

        
      
        src = ("img/mapas/").concat(data[i][2]);  

        fecha = "Fecha "+data[i][0]+":";
        nombreMapa = data[i][1];  
       
        h4.text(fecha+" "+nombreMapa);


        img.attr("src",src);
        img.attr("width","250px");
       
        span.append(h4);
        span.append(img);
        
        li.append(span);
        container.append(li);
    }
}

