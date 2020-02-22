// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    document.getElementById('hamburguesa').className.replace(' black', '');
    document.getElementById('hamburguesa').className += 'white';
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        document.getElementById('hamburguesa').className += ' black';
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


/* Animacion de los numeros*/
$(function() {
    var controlador = false;
    var windowHeight = $(window).height(); // Altura de la ventana del nav
    var scroll = $(window).scrollTop();
    if (scroll >= (($('.animateNumber').offset().top) - windowHeight) && (controlador === false)) {
        // Seleccionamos el primer primer li
        $('.n1').animateNumber({ number: 25 }, 1000);
        // Seleccionamos el segundo li
        $('.n2').animateNumber({ number: 15 }, 1400);
        $('.n3').animateNumber({ number: 3 }, 1800);
        $('.n4').animateNumber({ number: 9 }, 2100);
        controlador = true;
    }

    $(window).scroll(function() {
        var windowHeight = $(window).height(); // Altura de la ventana del nav
        var scroll = $(window).scrollTop();
        if (scroll >= (($('.animateNumber').offset().top) - windowHeight) && (controlador === false)) {
            // Seleccionamos el primer primer li
            $('.n1').animateNumber({ number: 25 }, 1000);
            // Seleccionamos el segundo li
            $('.n2').animateNumber({ number: 15 }, 1400);
            $('.n3').animateNumber({ number: 3 }, 1800);
            $('.n4').animateNumber({ number: 9 }, 2100);
            controlador = true;
        }
    });
});