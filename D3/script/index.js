//nav
$('li.main-menu').mouseenter(function () {
    $('nav').addClass('on')
    $('ul.sub-menu').css({'display':'flex'})
    $('ul.sub-memu').stop().slideUp()
})

$('li.main-menu').mouseleave(function () {
    $('nav').removeClass('on')
    $('ul.sub-menu').css({'display':'none'})
    $('ul.sub-memu').stop().slideDown()
})

//slide
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


//tab 
$('.tab-menu li').click(function(){
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx =$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

// popup
$('li.modal').click(function(){
    $('.popup').fadeIn()
})

$('a.close').click(function(){
    $('.popup').fadeOut()
})