jQuery(function($) {
    'use strict';

    $(document).ready(function() {
    

        smoothScroll.init({
            speed: 1000, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeOutQuart', // Easing pattern to use
            offset: 50, // Integer. How far to offset the scrolling anchor location in pixels
        });


        /*=======================================================
        	// Full Height
        ======================================================*/
        var wheight = $(window).height();

        $('.fullheight').css('height', wheight);

        $(window).resize(function() {
            var wheight = $(window).height();

            $('.fullheight').css('height', wheight);
        });


        $(function(){
            $(".typed").typed({
                strings: ["Dedicated", "Innovative.", "Ajuwayatech."],
                typeSpeed: 0,
                backDelay: 1500,
                loop: true
            });
        });


        // $.stellar({
        //     horizontalScrolling: false,
        //     verticalOffset: 40
        // });


        $(window).scroll(function(event){

            var yOffset = window.pageYOffset;
            var breakpoint = 50;
            var width = window.innerWidth;
            if (yOffset > breakpoint){
                $("nav.navbar-default").addClass('active');
            }else{
                $("nav.navbar-default").removeClass('active');
            }

        });

        

        $(window).load(function() { // makes sure the whole site is loaded

            "use strict";
            /*
            =======================================================
                // Navbar Slide
            ======================================================
            */
            // $(window).scroll(function() {
            //     if ($(window).scrollTop() > $("nav").height()) {
            //         $("nav.navbar-slide").addClass("show-menu");
            //     } else {
            //         $("nav.navbar-slide").removeClass("show-menu");
            //         $(".navbar-slide #yudoo-navbar-collapse").collapse({
            //             toggle: false
            //         });
            //         $(".navbar-slide #yudoo-navbar-collapse").collapse("hide");
            //         $(".navbar-slide .navbar-toggle").addClass("collapsed");
            //     }
            // });

        })

    })

});