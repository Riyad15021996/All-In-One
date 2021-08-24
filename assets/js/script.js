(function($) {
    'use strict'

    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function() {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    /* 
        ========================================
            Wow Animation
        ========================================
    */

    new WOW().init();

})(jQuery);