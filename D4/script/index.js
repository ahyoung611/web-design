//nav
$('li.main-menu').mouseenter(function () {
    $('nav').addClass('on')
    $('ul.sub-menu').stop().fadeIn()
    $('ul.sub-menu').css({ 'display': 'flex' })
})

$('li.main-menu').mouseleave(function () {
    $('nav').removeClass('on')
    $('ul.sub-menu').stop().fadeOut()
    $('ul.sub-menu').css({ 'display': 'none' })
})

// slide
$('.slide').eq(0).siblings().hide()
let idx = 0
setInterval(function () {
    idx++
    if (idx === 3) {
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()

}, 3000)

// popup
$('li.modal').click(function(){
    $('.popup').fadeIn()
})

$('a.close').click(function(){
    $('.popup').fadeOut()
})