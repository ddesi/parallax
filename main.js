( function( $ ) {

    $window = $(window);
    $slide = $('.mainSlide');
    $body = $('body');
    

    $body.imagesLoaded( function() {
        setTimeout(function() {

            resize();

            // worked this out with Jesse for his Jukebox :p
            $body.removeClass('pre').addClass('loaded');
        }, 900);
    });


    function resize(){

        var s = skrollr.init({ // <-- Skrollr
            forceHeight: false
        });

        windowHeight = $window.height();

        if(windowHeight <= 500) {
            windowHeight = 500;
        } 
        
        $slide.height(windowHeight);
        s.refresh($('.mainSlide'));
    }
        
} )( jQuery );