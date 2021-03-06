//fullpage
(function($) {
    'use strict';

    var $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedSecondSingle = $('.second .is-animated__single');

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'courses', 'schedule', 'n_e', 'contactus'],
        scrollOverflow: true,
        continuousVertical: false,
        menu: '#mymenu',
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'about', 'courses', 'schedule', 'news & events', 'contact us'],
        scrollOverflowOptions: {
            click: true
        },
        // animate
        onLeave: function(index, nextIndex, direction) {
            if (( index == 1 || index == 2 ) && nextIndex == 3 ) { 
                $isAnimatedSecond.addClass('animated bounceIn'); 
                $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                $isAnimatedSecond.eq(1).css('animation-delay', '.4s');
                $isAnimatedSecond.eq(2).css('animation-delay', '.5s');
                $isAnimatedSecond.eq(3).css('animation-delay', '.6s');
                $isAnimatedSecond.eq(4).css('animation-delay', '.7s');
                $isAnimatedSecond.eq(5).css('animation-delay', '.8s');
                // $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
            }
        }
    });
})(jQuery);