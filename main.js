$('.faq-link').on('click', function(e) {
    e.preventDefault(),
    $(this).children('.faq-block').children('.faq-text').slideToggle()
    $(this).children('.faq-block').toggleClass('faq-block--open')
}); 
$('.button-monthly').on('click', function(e) {
    e.preventDefault(),
    $(this).removeClass('unactive-button')
    $('.button-annually').addClass('unactive-button')
    $('.blue-block').css({
        'right':'unset',
        'left':'5px'
      })
      $('.suscribe-blocks').css({
        'left': '398px'
    })
}); 
$('.button-annually').on('click', function(e) {
    e.preventDefault(),
    $(this).removeClass('unactive-button'),
    $('.button-monthly').addClass('unactive-button'),
    $('.blue-block').css({
        'right':'5px',
        'left':'unset'
      })
    $('.suscribe-blocks').css({
        'left': '-333px'
    })
}); 

$('.header-burger').on('click', function(e) {
    e.preventDefault(),
    $('.header-top-content').toggleClass('header-top-content--open')
    $('body').toggleClass('unscroll')

})

let offset = 0;
const sliderLine = document.querySelector('.meet-client-slider');

document.querySelector('.slide-next').addEventListener('click', function() {
    offset += 540;
    if (offset > 1080) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slide-prev').addEventListener('click', function() {
    offset -= 540;
    if (offset < 0) {
        offset = 1080
    }
    sliderLine.style.left = -offset + 'px'
})

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('sect-suscribe--show')
        }else {
            change.target.classList.remove('sect-suscribe--show')
        }
    })
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let element = document.querySelectorAll('.sect-suscribe');

for (let elm of element) {
    observer.observe(elm)
}
