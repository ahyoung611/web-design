//nav
$('li.main-menu').mouseenter(function(){
    $(this).find('ul.sub-menu').stop().fadeIn()
})

$('li.main-menu').mouseleave(function(){
    $(this).find('ul.sub-menu').stop().fadeOut()
})

// slide
setInterval(function(){
$('.slide-wrap').stop().animate({'top':'-100%'},function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'top':'0'})
})
},3000)

//popup
$('li.modal').click(function(){
    $('.popup').fadeIn()
})

$('a.close').click(function(){
    $('.popup').fadeOut()
})