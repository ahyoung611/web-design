//nav
$('li.main-menu').mouseenter(function(){
    $(this).find('ul.sub-menu').stop().fadeIn()
})

$('li.main-menu').mouseleave(function(){
    $(this).find('ul.sub-menu').stop().fadeOut()
})

//slide
setInterval(function(){
$('.slide-wrap').animate({'left':'-100%'},function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0'})
})
},3000)

//popup
$('li.modal').click(function(){
    $('.modal-box').fadeIn()
})

$('a.close').click(function(){
    $('.modal-box').fadeOut()
})

