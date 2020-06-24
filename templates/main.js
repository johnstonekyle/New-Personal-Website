$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        //navbar height
        var navheight = 30;

        //2000 specifies the speed
        $('html, body').animate({
            scrollTop: $(hash).offset().top - navheight
        }, 2000, function(){

        });
        }
    });
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('navbar-dark', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('navbar-light', $(this).scrollTop() <= $nav.height());
        $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
    });
});