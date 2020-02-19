$(function() {

    /*
    // Menu fijo
    // Evento que va a estar escuchando en todo momento la distancia 
    // a la que se ha hecho scroll en la pagina, medida desde arriba
    var windowHeight = $(window).height(); // Altura de la ventana del nav
    var barraAltura = $('.barra').innerHeight(); // Altura de la barra de navegacion
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });
    */


    // Menu responsive
    $('.imagen-firma').on('click', function() {
        $('.navegacion-izquierda').slideToggle();
    });


});