var observer = new FontFaceObserver('Merriweather', {});
observer.check()
  .then( function(){ 
    document.documentElement.className += " fonts-loaded";
  });

$(document).ready(function() {
	if ( $(window).width() > 468) {  
		$(".project-item-container").hover(function() {
			$(this).children(".project-title").addClass('project-title--toggle', 200);
			$(this).children(".project-description").addClass('project-description--toggle', 200);
			$(this).children(".project__bar").addClass('project__bar--toggle', 250); }, 
			function() {
				$(this).children(".project-title").removeClass('project-title--toggle', 200);
				$(this).children(".project-description").removeClass('project-description--toggle', 200);
				$(this).children(".project__bar").removeClass('project__bar--toggle', 200); }
			);
		$(window).scroll(function() {
			if ($(window).scrollTop() > 35) {
				$("nav .nav").addClass('--inverse', 200);
				$(".nav__logo").attr('class', '').attr('class', 'nav__logo--fixed');		
				$(".nav .nav__link .link--white").removeClass('link--white').addClass('link--inverse', 200);
				$(".nav .nav__link .link--active--white").removeClass('link--active--white').addClass('link--active--inverse', 200);
			}
			else {
				$("nav .nav").removeClass('--inverse', 200);			
				$(".nav__logo--fixed").attr('class', '').attr('class', 'nav__logo');					
				$(".nav .nav__link .link--inverse").removeClass('link--inverse').addClass('link--white', 200);
				$(".nav .nav__link .link--active--inverse").removeClass('link--active--inverse').addClass('link--active--white', 200);
			}
		});
	}
	$(".image.--sketch").click(function() { 
		if ($(this).hasClass('--large')){ $(this).removeClass('--large',200);}
		else{	$(this).addClass('--large',200); } 
	});

	if(window.location.href.indexOf("#thanks") > -1) {
	    removeHidden('.text.--thanks');
	  	$("html, body").animate({ scrollTop: $(document).height() }, 300);
   }

});

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
