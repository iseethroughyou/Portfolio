/*====================================================================

                            NAVIGATION
====================================================================*/
// Show/Hide transparent black navigation
$(function () {
    $(window).scroll(function ()) {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("portfolio-top-nav");

        } else {
            // show nav
            $("nav").addClass("portfolio-top-nav");
        }
    });

});
//Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #contact
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 90
        }, 1250);

    });

});