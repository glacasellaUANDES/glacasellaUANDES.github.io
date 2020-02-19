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


    (function() {

        var nav = $('nav'),
            menu = $('nav h1'),
            main = $('main'),
            open = false,
            hover = false;

        menu.on('click', function() {
            open = !open ? true : false;
            nav.toggleClass('menu-active');
            main.toggleClass('menu-active');
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
            console.log(open);
        });
        menu.hover(
            function() {
                if (!open) {
                    nav.addClass('menu-hover');
                    main.addClass('menu-hover');
                }
            },
            function() {
                nav.removeClass('menu-hover');
                main.removeClass('menu-hover');
            }
        );

    })();


});