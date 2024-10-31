// nav
$('li.main-menu').mouseenter(function(){
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function(){
    $(this).find('ul.sub-menu').stop().slideUp()
})

//slide
$('.slide').eq(0).siblings().hide()
let idx = 0
setInterval(function(){
idx++
if(idx===3){
    idx=0
}
$('.slide').fadeOut()
$('.slide').eq(idx).fadeIn()

},3000)

//popup
$('.modal').click(function(){
    $('.modal-box').fadeIn()
})

$('a.close').click(function(){
    $('.modal-box').fadeOut()
})