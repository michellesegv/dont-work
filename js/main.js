//Loader
$(window).load(function() {
	$(".pre-load").fadeOut("slow");
});
//Smooth Scrolling
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
//Wow
new WOW().init();
//Navbar
$(function(){
	var altura = $(".bajando").offset().top;

	$(window).on("scroll", function(){
		if ($(window).scrollTop()>altura-60){
			$(".menu").addClass("menu-fixed");
			$(".navbar-right").children().children().addClass("blanco");
		} else {
			$(".menu").removeClass("menu-fixed");
			$(".navbar-right").children().children().removeClass("blanco");
		}
	});
});
//Barras de progreso
$(function(){
	var altura = $(".progreso-bar").offset().top;
	$(window).on("scroll", function(){
		if ($(window).scrollTop()>altura-130){
			setInterval(barraProgreso, 100);
		}
	});
});
var barraProgreso= function (){
	var barraHtml = document.getElementById("barra-html");
	var barraCss = document.getElementById("barra-css");
	var barraJs = document.getElementById("barra-js");
	var barraJquery = document.getElementById("barra-jquery");
	var barraBootstrap = document.getElementById("barra-bootstrap");
	var barraCorel = document.getElementById("barra-corel");
	var barraGit = document.getElementById("barra-git");
	var barraSass = document.getElementById("barra-sass");
	barraHtml.value+=2;
	barraCss.value+=2;
	barraJs.value+=2;
	barraJquery.value+=2;
	barraBootstrap.value+=2;
	barraCorel.value+=2;
	barraGit.value+=2;
	barraSass.value+=2;
}
//Mostrar links de proyectos
$(".proyecto").hover(
	function(){
		$(this).children().eq(0).fadeIn(1000);
	},
	function(){
		$(this).children().eq(0).fadeOut();
	}
);
//Navegación
function scrollSpy() {
	var add = 0;
	$('.navbar-collapse ul li a').each(function(){
		add+= 100;
		var hrefName = $(this).attr('href');
		if(hrefName.length) {
			var idTop = $(hrefName).offset().top - add;
		}
		var	seccionHeight = $(hrefName).height(),
			parent = $(this).parent(),
			windowTop = $(window).scrollTop();
		if (windowTop >= idTop && windowTop <= idTop + seccionHeight + 100) {
			$(hrefName+"-nav").addClass("color");
			add+= 50;
		} else {
			$(hrefName+"-nav").removeClass("color");
			add= add -50;
		}
	});
}
$(window).scroll(function(){
	scrollSpy();
});
