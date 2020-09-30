const points = document.querySelector('.points__content')
const point = document.querySelectorAll('.points__text')
const shapes = document.querySelectorAll('.points__shape')
const image = document.querySelector('.points__image img')
const divider = document.querySelectorAll('.points__divider')

const btnHamburger = document.querySelector('#hamburger')
const menuList = document.querySelector('#menu')
const btnMenuClose = document.querySelector('#menu-close')

let index = 0

// Function to show text of point
function togglePoint(index) {
    let text = point[index].querySelector('.points__point-text')
    let title = point[index].querySelector('.points__point-title')

    for (let i = 0; i < point.length; i++) {
        point[i].querySelector('.points__point-text').hidden = true
        point[i].querySelector('.points__point-title').classList.remove('points__point-title_active')
        shapes[i].classList.remove('points__shape_active')
        divider[i].style.height = '21px'
    }

    text.hidden = false
    title.classList.add('points__point-title_active')
    shapes[index].classList.add('points__shape_active')

    let textHeight = text.getBoundingClientRect().height

    divider[index].style.height = textHeight + 35 + 'px'
}

// Initial call
togglePoint(index)

// Show/hide text of points on click
points.addEventListener('click', (e) => {
    let option = e.target.closest('.points__point')

    switch (option.dataset.point) {
        case 'one':
            togglePoint(0)
            image.src = './img/points_image.png'
            break
        case 'two':
            togglePoint(1)
            image.src = './img/main_video.png'
            break
        case 'three':
            togglePoint(2)
            image.src = './img/points_image.png'
            break
        case 'four':
            togglePoint(3)
            image.src = './img/main_video.png'
            break
        case 'five':
            togglePoint(4)
            image.src = './img/points_image.png'
            break
    }
})

// Hamburger click/close
btnHamburger.addEventListener('click', () => {
    menuList.classList.toggle('menu-list_active')
})

btnMenuClose.addEventListener('click', () => {
    menuList.classList.remove('menu-list_active')
})


// Jquery
$(document).ready(function(){
    
    // Slick carousel
    $('.promo__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        appendArrows: $('.promo__arrows'),
        prevArrow: '<button id="prev" type="button"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        appendDots: $('.promo__dots')
    })

    $('.testimonials__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        appendArrows: $('.testimonials__arrows'),
        prevArrow: '<button id="prev" type="button"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        appendDots: $('.testimonials__dots')
    })


    // Pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn()
        } else {
            $('.pageup').fadeOut()
        }
    })

    $("a[href=#pageup]").click(function() {
        const _href = $(this).attr("href")
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"})
        return false
    })
})