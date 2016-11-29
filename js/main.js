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
		if ($(window).scrollTop()>altura-3){
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
	barraHtml.value+=5;
	barraCss.value+=5;
	barraJs.value+=5;
	barraJquery.value+=5;
	barraBootstrap.value+=5;
	barraCorel.value+=5;
	barraGit.value+=5;
	barraSass.value+=5;
}
//Mostrar links de proyectos
$(".proyecto").hover(function(){
	$(this).children().eq(0).toggleClass("ocultar");
});
