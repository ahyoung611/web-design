
//nav
$('li.main-menu').mouseenter(function () {
    $('ul.sub-menu').stop().slideDown(200)
    $('header').addClass('on')
})

$('li.main-menu').mouseleave(function () {
    $('ul.sub-menu').stop().slideUp(200)
    $('header').removeClass('on')
})

//slide
setInterval(function () {
    $('.slide-wrap').animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0' })
    })
}, 3000)

//popup
$('li.modal').click(function(){
$('.modal-box').fadeIn()
})

$('a.close').click(function(){
$('.modal-box').fadeOut()
})