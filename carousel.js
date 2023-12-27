// carousel.js

$(document).ready(function(){
    $('.freestyle-carousel').slick({
        slidesToShow: 2, // Display 2 slides at a time on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        responsive: [
            {
                breakpoint: 768, // Breakpoint for small screens
                settings: {
                    slidesToShow: 1, // Display 1 slide at a time on small screens
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                }
            }
        ]
    });
});
