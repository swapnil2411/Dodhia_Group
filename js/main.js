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

    $('.hamburger').on('click', function(){
        $('nav').toggleClass('show_nav');
        $('nav ul').toggleClass('show_nav_menu');
        $('li').toggleClass('show_menu_list')
    })
    
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
    
    $('.team_leader_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:2.7,
                margin:30,
            },
            480:{
                items:3,
                margin:20,
            },
            1000:{
                items:4,
            }
        }
    })

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

    $('.count-up').countUp({
        'time': 2000,
    });
    
})

window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[lines-split]", {
      types: "lines, words",
      tagName: "span"
    });

  
    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline, startPoint) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: startPoint,
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
      // Play tl when scrolled into view (60% from top of screen) "top 60%"
      ScrollTrigger.create({
        trigger: triggerElement,
        start: startPoint,
        onEnter: () => timeline.play()
      });
    }
    $("[lines-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".line"), { opacity: 0, yPercent: 150, duration: 0.8, ease: "ease-in-out", stagger: { amount: 0.5 } });
      createScrollTrigger($(this), tl, "top 60%");
    });
   
    
    $("[lines-parent]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this), { opacity: 0, yPercent: 20, duration: 0.8, ease: "ease-in-out", stagger: { amount: 0.5 } });
      createScrollTrigger($(this), tl, "top 60%");
    });
    
     
    $("[sec-scale]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.to($(this), { scale: 1, duration: 1.5, ease: "ease-in-out", markers:true,
        pin:true,
        scrub: true});
        createScrollTrigger($(this), tl, "top 80%");
    });
    
    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
  });