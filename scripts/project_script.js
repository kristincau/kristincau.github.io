var observer = new FontFaceObserver('Merriweather', {});
observer.check()
  .then( function(){ 
    document.documentElement.className += " fonts-loaded";
  });

$(document).ready(function() {
	if ( $(window).width() > 468) {  
		$(window).scroll(function() {
			if ($(window).scrollTop() > 35) {
				$(".nav").addClass('nav--inverse', 200);
				$(".nav__logo").attr('class', '').attr('class', 'nav__logo--fixed');		
				$(".nav .nav__link .link--white").removeClass('link--white').addClass('link--inverse', 200);
				$(".nav .nav__link .link--active--white").removeClass('link--active--white').addClass('link--active--inverse', 200);
			}
			else {
				$(".nav").removeClass('nav--inverse', 200);			
				$(".nav__logo--fixed").attr('class', '').attr('class', 'nav__logo');					
				$(".nav .nav__link .link--inverse").removeClass('link--inverse').addClass('link--white', 200);
				$(".nav .nav__link .link--active--inverse").removeClass('link--active--inverse').addClass('link--active--white', 200);
			}
		});
	}
	$(".image--sketch").click(function() { 
		if ($(this).hasClass('image--sketch--large')){ $(this).removeClass('image--sketch--large',200);}
		else{	$(this).addClass('image--sketch--large',200); } 
	});

	if(window.location.href.indexOf("#thanks") > -1) {
	    removeHidden('.thanks--text');
	  	$("html, body").animate({ scrollTop: $(document).height() }, 300);
   }

});