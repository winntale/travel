$(document).ready(function() {
    $("#toFooter").fadeIn();
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header").addClass("scrolled");
            $("#menu li ul").addClass("scrolled");
            $("#toTop").fadeIn();
            $("#toFooter").fadeOut();
        } else {
            $("header").removeClass("scrolled");
            $("#menu li ul").removeClass("scrolled");
            $("#toTop").fadeOut();
            $("#toFooter").fadeIn();
        }
    });

    $('a[href^="#"]').click(function() {
        let anchor = $(this).attr('href');
        $('html, body').animate ({
        scrollTop: $(anchor).offset().top - 60}, 800);
    });

    $('.burger').on('click', function()
    {
        $('#menu').toggleClass('active');
        $('.burger').toggleClass('active');
    }
    );
    });
