closePanels();

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


// Function that closes all the panels on aboutme.html
function closePanels() {
    $('#high-level-hidden').hide();
    $('#python-hidden').hide();
    $('#cs-hidden').hide();
    $('#low-level-hidden').hide();
    $('#c-hidden').hide();
    $('#cpp-hidden').hide();
    $('#web-dev-hidden').hide();
    $('#html-hidden').hide();
    $('#php-hidden').hide();
    $('#frameworks-hidden').hide();
    $('#databases-hidden').hide();
    $('#mysql-hidden').hide();
    $('#sqlite-hidden').hide();
    $('#robot-hidden').hide();
    $('#arduino-hidden').hide();
    $('#AI-hidden').hide();
    $('#ML-hidden').hide();
    $('#pyml-hidden').hide();
    $('#udemy-hidden').hide();
    $('#course1-hidden').hide();
    $('#course2-hidden').hide();
    $('#course3-hidden').hide();
    $('#course4-hidden').hide();
    $('#course5-hidden').hide();
}


/*Control de paneles en aboutme.html*/
$(function() {
    $('.panelHeading').on('click', function() {
        $('#' + $(this).attr('id') + '-hidden').slideToggle();
        $(this).toggleClass('gray');
        $($(this).next()[0]).toggleClass('border');
        if ($(this).hasClass('gray')) {
            $(this).text('');
        } else {
            switch ($(this).attr('id')) {

                // High level 
                case 'high-level':
                    $(this).text('High Level Languages');
                    break;
                case 'python':
                    $(this).text('Python');
                    break;
                case 'cs':
                    $(this).text('C#');
                    break;

                    // Low level
                case 'low-level':
                    $(this).text('Low Level Languages');
                    break;
                case 'c':
                    $(this).text('C');
                    break;
                case 'cpp':
                    $(this).text('C++');
                    break;

                    // Web dev
                case 'web-dev':
                    $(this).text('Web Development');
                    break;
                case 'html':
                    $(this).text('HTML5, CSS3, JavaScript & jQuery');
                    break;
                case 'php':
                    $(this).text('PHP');
                    break;
                case 'frameworks':
                    $(this).text('Frameworks');
                    break;

                    // Databases
                case 'databases':
                    $(this).text('Databases');
                    break;
                case 'mysql':
                    $(this).text('MySQL');
                    break;
                case 'sqlite':
                    $(this).text('SQLite');
                    break;

                    // Robotics and iot
                case 'robot':
                    $(this).text('Robotics and IoT');
                    break;
                case 'arduino':
                    $(this).text('Arduino');
                    break;

                    // AI
                case 'AI':
                    $(this).text('AI & Machine Learning');
                    break;
                case 'ML':
                    $(this).text('Machine Learning Algorithms');
                    break;
                case 'pyml':
                    $(this).text('Python Machine Learning Modules');
                    break;

                    // Courses
                case 'udemy':
                    $(this).text('Udemy');
                    break;
                case 'course1':
                    $(this).text('Complete Web Development with HTML5, CSS3, JS AJAX PHP and MySQL');
                    break;
                case 'course2':
                    $(this).text('Machine Learning A-Z™: Hands-On Python & R In Data Science');
                    break;
                case 'course3':
                    $(this).text('AI with Python complete course');
                    break;
                case 'course4':
                    $(this).text('Javascript Master: learn JS, jQuery, Angular 9, NodeJS');
                    break;
                case 'course5':
                    $(this).text('Android and Kotlin from zero to professional');
                    break;
                default:
                    break;
            }
        }
    });
});

// Mouse enter y mouse leave de aboutme.html
$(function() {
    $('.panelHeading').on('mouseenter', function() {
        if ($(this).hasClass('gray')) {
            switch ($(this).attr('id')) {

                // High level 
                case 'high-level':
                    $(this).text('High Level Languages');
                    break;
                case 'python':
                    $(this).text('Python');
                    break;
                case 'cs':
                    $(this).text('C#');
                    break;

                    // Low level
                case 'low-level':
                    $(this).text('Low Level Languages');
                    break;
                case 'c':
                    $(this).text('C');
                    break;
                case 'cpp':
                    $(this).text('C++');
                    break;

                    // Web dev
                case 'web-dev':
                    $(this).text('Web Development');
                    break;
                case 'html':
                    $(this).text('HTML5, CSS3, JavaScript & jQuery');
                    break;
                case 'php':
                    $(this).text('PHP');
                    break;
                case 'frameworks':
                    $(this).text('Frameworks');
                    break;

                    // Databases
                case 'databases':
                    $(this).text('Databases');
                    break;
                case 'mysql':
                    $(this).text('MySQL');
                    break;
                case 'sqlite':
                    $(this).text('SQLite');
                    break;

                    // Robotics and iot
                case 'robot':
                    $(this).text('Robotics and IoT');
                    break;
                case 'arduino':
                    $(this).text('Arduino');
                    break;

                    // AI
                case 'AI':
                    $(this).text('AI & Machine Learning');
                    break;
                case 'ML':
                    $(this).text('Machine Learning Algorithms');
                    break;
                case 'pyml':
                    $(this).text('Python Machine Learning Modules');
                    break;

                    // Courses
                case 'udemy':
                    $(this).text('Udemy');
                    break;
                case 'course1':
                    $(this).text('Complete Web Development with HTML5, CSS3, JS AJAX PHP and MySQL');
                    break;
                case 'course2':
                    $(this).text('Machine Learning A-Z™: Hands-On Python & R In Data Science');
                    break;
                case 'course3':
                    $(this).text('AI with Python complete course');
                    break;
                case 'course4':
                    $(this).text('Javascript Master: learn JS, jQuery, Angular 9, NodeJS');
                    break;
                case 'course5':
                    $(this).text('Android and Kotlin from zero to professional');
                    break;
                default:
                    break;
            }
        }
    });

    $('.panelHeading').on('mouseleave', function() {
        if ($(this).hasClass('gray')) {
            $(this).text('');
        }
    });
});

/* Animacion de los numeros*/
$(function() {
    var controlador = false;
    var windowHeight = $(window).height(); // Altura de la ventana del nav
    var scroll = $(window).scrollTop();
    if (scroll >= (($('.animateNumber').offset().top) - windowHeight) && (controlador === false)) {
        // Seleccionamos el primer primer li
        $('.n1').animateNumber({ number: 3 }, 1000);
        // Seleccionamos el segundo li
        $('.n2').animateNumber({ number: 7 }, 1400);
        $('.n3').animateNumber({ number: 3 }, 1800);
        $('.n4').animateNumber({ number: 2 }, 2100);
        controlador = true;
    }

    $(window).scroll(function() {
        var windowHeight = $(window).height(); // Altura de la ventana del nav
        var scroll = $(window).scrollTop();
        if (scroll >= (($('.animateNumber').offset().top) - windowHeight) && (controlador === false)) {
            // Seleccionamos el primer primer li
            $('.n1').animateNumber({ number: 3 }, 1000);
            // Seleccionamos el segundo li
            $('.n2').animateNumber({ number: 7 }, 1400);
            $('.n3').animateNumber({ number: 3 }, 1800);
            $('.n4').animateNumber({ number: 2 }, 2100);
            controlador = true;
        }
    });
});