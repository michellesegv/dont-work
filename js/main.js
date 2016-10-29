$(window).load(function() {
	$(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
 
});