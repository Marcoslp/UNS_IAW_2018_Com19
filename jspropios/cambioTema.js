var i=0;

$(function(){
    $('body').css("background", 'url("img/background.jpg")');
    $("#toggleB").click(function() {
        if(i==0){    
        $('body').css("background", 'url("img/backgroundblack.jpg")');
        $(".navbar-custom").css( "background-color","#0a0a0a");
        $(".content-menu").css( "background","#0a0a0a");
     //   $("#loginButton").removeClass("btn btn-primary").addClass("btn btn-danger");
        $("#loginButton").css("background-color","#e60012");
        $("#loginButton").css("border-color","#e60012");
        i=1;
        }
        else{
            $('body').css("background", 'url("img/background.jpg")');
            $(".navbar-custom").css("background-color","#e60012");
            $(".content-menu").css("background","#e60012");
            $("#loginButton").removeClass("btn btn-danger").addClass("btn btn-primary");
            $("#loginButton").css({ 'background-color' : '', 'border-color' : '' });
            i=0;
        }
      
        
    });

})