$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        navText:'',
        responsiveBaseWidth:'.sliders',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin:10
            }
        }
    });
    $(".owl-carousel.second").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        autoWidth: 300,
        responsiveBaseWidth:'.sliders',
        navText:'',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin:10
            }
        }
    });
    $(".owl-carousel.third").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        autoWidth: 300,
        navText:'',
        responsiveBaseWidth:'.sliders',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin:10
            }
        }
    });
    $(".owl-carousel.fourth").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        autoWidth: 300,
        responsiveBaseWidth:'.sliders',
        navText:'',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin:10
            }
        }
    });
    $(".owl-carousel.fifth").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsiveBaseWidth:'.sliders',
        autoWidth: 300,
        navText:'',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin:10
            }
        }
    });
});