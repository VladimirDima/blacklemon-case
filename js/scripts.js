// Initialising plugin and setting options
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        //Breakpoints for responsive behaviour 
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});