$(document).ready(function() {
    var roll;
    $(window).scroll(function () { 
        roll = $(window).scrollTop();
        $('.background').animate({}, 1000, function() {
            $(this).css({
                "transform": "translate3d(0px, " + roll/3 + "px, 0px)"
            });
        });
    });
    new WOW().init();
});