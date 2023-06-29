$(window).scroll(function(){
    let sticky = $('header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100){
        sticky.addClass('sticky');
    }else {
        sticky.removeClass('sticky');
    }
});

$(document).ready(function(){
    
    $('.awards_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1,
                margin:10,
            },
            600:{
                items:3
            },
            1000:{
                items:3,
            }
        }
    })

    $('.certification_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:2.4,
                margin:15,
            },
            600:{
                items:3,
                margin:10,
            },
            1000:{
                items:5,
            }
        }
    })
    
    // $('.team_leader_carousel').owlCarousel({
    //     loop:true,
    //     margin:40,
    //     nav:false,
    //     slideBy: 1,
    //     dots: true,
    //     dotsEach: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4,
    //         }
    //     }
    // })

    // $('.textile_range_carousel').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     nav:false,
    //     slideBy: 1,
    //     dots: true,
    //     dotsEach: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4,
    //         }
    //     }
    // })

    // $('.left_manufacture_prod_carousel').owlCarousel({
    //     loop:true,
    //     margin:20,
    //     nav:false,
    //     slideBy: 1,
    //     dots: true,
    //     dotsEach: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4,
    //         }
    //     }
    // })

    // $('.count-up').countUp({
    //     'time': 2000,
    // });
    
})