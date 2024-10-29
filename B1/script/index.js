
//nav
$('li.main-menu').mouseenter(function(){
    $('ul.sub-menu').stop().slideDown()
})

$('li.main-menu').mouseleave(function(){
    $('ul.sub-menu').stop().slideUp()
})

//slide
setInterval(function(){
$('.slide-wrap').animate({'left':'-100%'},function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0'})
})
},3000)

//tab
$('.tab-menu li').click(function(){
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index() //index를 가지고 와서 같은 순서 첫번재 두번째 나타나게
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

//popup
$('.modal').click(function(){
    $('.popup').fadeIn()
})

$('a.close').click(function(){
    $('.popup').fadeOut()
})