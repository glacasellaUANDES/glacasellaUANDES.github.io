closePanels();

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


// nokey code
var element = document.getElementById('introduccion');
var positionInfo = element.getBoundingClientRect();
var height = positionInfo.height;
var width = positionInfo.width;

var canvas = document.getElementById('nokey'),
    can_w = width,
    can_h = height,
    ctx = canvas.getContext('2d');



var ball = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        r: 0,
        alpha: 1,
        phase: 0
    },
    ball_color = {
        r: 120,
        g: 120,
        b: 120
    },
    R = 2,
    balls = [],
    alpha_f = 0.03,
    alpha_phase = 1,

    // Line
    link_line_width = 0.8,
    dis_limit = 260,
    add_mouse_point = true,
    mouse_in = false,
    mouse_ball = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        r: 0,
        type: 'mouse'
    };

// Random speed
function getRandomSpeed(pos) {
    var min = -1,
        max = 1;
    switch (pos) {
        case 'top':
            return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
            break;
        case 'right':
            return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
            break;
        case 'bottom':
            return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
            break;
        case 'left':
            return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
            break;
        default:
            return;
            break;
    }
}

function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall() {
    var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
        case 'top':
            return {
                x: randomSidePos(can_w),
                y: -R,
                vx: getRandomSpeed('top')[0],
                vy: getRandomSpeed('top')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'right':
            return {
                x: can_w + R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('right')[0],
                vy: getRandomSpeed('right')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'bottom':
            return {
                x: randomSidePos(can_w),
                y: can_h + R,
                vx: getRandomSpeed('bottom')[0],
                vy: getRandomSpeed('bottom')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'left':
            return {
                x: -R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('left')[0],
                vy: getRandomSpeed('left')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
    }
}

function randomSidePos(length) {
    return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls() {
    Array.prototype.forEach.call(balls, function(b) {
        if (!b.hasOwnProperty('type')) {
            ctx.fillStyle = 'rgba(' + ball_color.r + ',' + ball_color.g + ',' + ball_color.b + ',' + b.alpha + ')';
            ctx.beginPath();
            ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
    });
}

// Update balls
function updateBalls() {
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x > -(50) && b.x < (can_w + 50) && b.y > -(50) && b.y < (can_h + 50)) {
            new_balls.push(b);
        }

        // alpha change
        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));
        // console.log(b.alpha);
    });

    balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf() {

}

// Draw lines
function renderLines() {
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
        for (var j = i + 1; j < balls.length; j++) {

            fraction = getDisOf(balls[i], balls[j]) / dis_limit;

            if (fraction < 1) {
                alpha = (1 - fraction).toString();

                ctx.strokeStyle = 'rgba(120,120,120,' + alpha + ')';
                ctx.lineWidth = link_line_width;

                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

// calculate distance between two points
function getDisOf(b1, b2) {
    var delta_x = Math.abs(b1.x - b2.x),
        delta_y = Math.abs(b1.y - b2.y);

    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
}

// add balls if there a little balls
function addBallIfy() {
    if (balls.length < 20) {
        balls.push(getRandomBall());
    }
}

// Render
function render() {
    ctx.clearRect(0, 0, can_w, can_h);

    renderBalls();

    renderLines();

    updateBalls();

    addBallIfy();

    window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num) {
    for (var i = 1; i <= num; i++) {
        balls.push({
            x: randomSidePos(can_w),
            y: randomSidePos(can_h),
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        });
    }
}
// Init Canvas
function initCanvas() {
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    can_w = parseInt(canvas.getAttribute('width'));
    can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function(e) {
    console.log('Window Resize...');
    initCanvas();
});

function goMovie() {
    initCanvas();
    initBalls(30);
    window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function() {
    console.log('mouseenter');
    mouse_in = true;
    balls.push(mouse_ball);
});
canvas.addEventListener('mouseleave', function() {
    console.log('mouseleave');
    mouse_in = false;
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b) {
        if (!b.hasOwnProperty('type')) {
            new_balls.push(b);
        }
    });
    balls = new_balls.slice(0);
});
canvas.addEventListener('mousemove', function(e) {
    var e = e || window.event;
    mouse_ball.x = e.pageX;
    mouse_ball.y = e.pageY;
    // console.log(mouse_ball);
});

// end of nokey code