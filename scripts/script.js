var observer = new FontFaceObserver('Merriweather', {});
observer.check()
  .then( function(){ 
    document.documentElement.className += " fonts-loaded";
  });

$(document).ready(function() {
	// var vh = $(window).height()*0.6;
	if ( $(window).width() > 468) {     
		$(window).scroll(function() {
			if ($(window).scrollTop() > 200) {
				$("body").removeClass('bg--black', 300);
				$(".intro__name").attr('class','intro__name--inverse');
				$(".intro__position").removeClass('color--white', 200);
				$(".text-header--page").removeClass('color--white', 200);
				$(".nav").addClass('nav--inverse', 200);
				$(".nav__logo").attr('class', '').attr('class', 'nav__logo--fixed');		
				$(".nav .nav__link .link--white").removeClass('link--white').addClass('link--inverse', 200);
				$(".nav .nav__link .link--active--white").removeClass('link--active--white').addClass('link--active--inverse', 200);
			}
			else {
				$("body").addClass('bg--black', 300);			
				$(".intro__name--inverse").attr('class','intro__name');
				$(".intro__position").addClass('color--white', 200);					
				$(".text-header--page").addClass('color--white', 200);
				$(".nav").removeClass('nav--inverse', 200);
				$(".nav__logo--fixed").attr('class', '').attr('class', 'nav__logo');					
				$(".nav .nav__link .link--inverse").removeClass('link--inverse').addClass('link--white', 200);
				$(".nav .nav__link .link--active--inverse").removeClass('link--active--inverse').addClass('link--active--white', 200);
			}
		});
	}
})	

function open_menu() {
	$('.icon--menu').find("use").attr('xlink:href','#icon-close');
	$('.icon--menu').attr('class','icon--close');
	$('.link.--menu').attr('onclick','close_menu()');
	$(".nav__link").css({display:'block'});
	$(window).scrollTop(0);
}

function close_menu() {
	$('.icon--close').find("use").attr('xlink:href','#icon-menu');
	$('.icon--close').attr('class','icon--menu');
	$('.link.--menu').attr('onclick','open_menu()');
	$(".nav__link").css({display:'none'});	
}