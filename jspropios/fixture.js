
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
            $("#contenedorEquipos").remove();
            $("#descripcionEquipo").remove();


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
                scrollTop: $("#gridFixture").offset().top
                }, 500);
            makeFixtureCards(contenedor, fechaMapa);
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

    container = container.append($("<div></div>").addClass('col-sm-11'));

    for(var i =0; i < data.length; i++){      
        span = $("<span/>");
        li = $("<li/>");
        img = $("<img/>");
        h4 = $("<h5/>")

        li.addClass("list-group-item-action  list-group-item-danger");
        src = ("img/mapas/").concat(data[i][2]);  

        fecha = "Fecha "+data[i][0]+":";
        nombreMapa = data[i][1];  
       
        h4.text(fecha+" "+nombreMapa);


        img.attr("src",src);
        img.attr("width","250px");
        img.css("float","center");
       
        span.append(h4);
        span.append(img);
        
        li.append(span);
        container.append(li);
    }
}

function makeFixtureCards(container, data){

    var img, bodyCart, h5, vueltas, link, src,card;

    for(var i =0; i < data.length; i++){  

        //Armo la imagen del mapa
        card = $("<div></div>").addClass("card bg-light col-sm-3");
        card.css("width","400px");
       

        img = $("<img/>").addClass("card-img-top");
        img.attr('alt', 'Card image cap');
        src = ("img/mapas/").concat(data[i][2]);  
        img.attr("src",src);

        //Armo el cart body

        bodyCart = ($("<div></div>"));
        bodyCart.addClass("card-body");
        bodyCart.css("background-image","url:https://www.walldevil.com/wallpapers/a77/background-black-noise-colorful-wallpaper-wallpapers.jpg");
        fecha = "Fecha "+data[i][0]+": ";
        nombreMapa = data[i][1]; 
        h5 = $("<h5/>").addClass("card-title").text(fecha+nombreMapa);
       
        
        

        //Armo el cart text
        vueltas = $("<p/>");
        vueltas.addClass("card-text").text("Descripción de la carrera");
       /*
        link = $("<a/>");
        link.addClass("btn btn-primary").text("Ver resultados");
        */
       
        bodyCart.append(h5);
        bodyCart.append(vueltas);
       // bodyCart.append(link);
        card.append(img);
        card.append(bodyCart);

        container = container.append(card);
        
    }  

}
/*

<div class="card col-sm-3" style="width: 400px;">
        <img class="card-img-top" src="img/mapas/aeropuertosoleado.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Fecha 1: Aeropuerto soleado</h5>
          <p class="card-text">Vueltas: 5.</p>
          <a href="#" class="btn btn-primary">Ver resultados</a>
        </div>
</div>*/