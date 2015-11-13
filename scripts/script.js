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
			$(this).children(".project__bar").addClass('project__bar--toggle', 250);
			$(this).children(".thumb").addClass('thumb--toggle', 250);
		}, function() {
			$(this).children(".project-title").removeClass('project-title--toggle', 200);
			$(this).children(".project-description").removeClass('project-description--toggle', 200);
			$(this).children(".project__bar").removeClass('project__bar--toggle', 200);
			$(this).children(".thumb--toggle").removeClass('thumb--toggle', 250);			
		})
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