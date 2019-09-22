$(function(){
       
        //Menu Fijo 
        var windowheight= $(window).height();
        var barraAltura= $('.barra').innerHeight();
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll>windowheight){
                $('.barra').addClass('fixed');
                $('body').css({'margin-top': barraAltura+'px'});
            }else{
                $('.barra').removeClass('fixed');
                $('body').css({'margin-top': '0px'});
            }
        });
        //Menu responsive
        $('.menu-movil').on('click', function(){
            $('.navegacion-principal').slideToggle();
        });
        //Numero animados
});
$(function(){
    //Modulos
    $('.programa-evento .info-curso:first').show();
    $('#moduloII').hide();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
});
$(document).ready(function(){
    $('.modal').modal();
  });