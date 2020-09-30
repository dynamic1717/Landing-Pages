$(document).ready(function() {
    $('.carousel__inner').slick({
        dots: true,
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        customPaging: function(slider, i) { 
            return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});