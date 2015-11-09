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
			}, 
			function() {
				$(this).children(".project-title").removeClass('project-title--toggle', 200);
				$(this).children(".project-description").removeClass('project-description--toggle', 200);
				$(this).children(".project__bar").removeClass('project__bar--toggle', 200);
			})
		}
	else {
			$('.overview__nav__link button').each(function(i){
				 var $this = $(this); 
			   $this.text(i+1);
			})
		}

	// var inverse = false;
	$(window).scroll(function() {
		if ($(window).scrollTop() > 35) {
			$("nav .nav").addClass('--inverse', 200);
			$(".nav__logo").attr('class', '').attr('class', 'nav__logo--fixed');		
			$(".nav .nav__link .link--white").removeClass('link--white').addClass('link--inverse', 200);
			$(".nav .nav__link .link--active--white").removeClass('link--active--white').addClass('link--active--inverse', 200);
			// $(".project-nav").removeClass('project-nav').addClass('project-nav--fixed', 200);
		}
		else {
			$("nav .nav").removeClass('--inverse', 200);			
			$(".nav__logo--fixed").attr('class', '').attr('class', 'nav__logo');					
			$(".nav .nav__link .link--inverse").removeClass('link--inverse').addClass('link--white', 200);
			$(".nav .nav__link .link--active--inverse").removeClass('link--active--inverse').addClass('link--active--white', 200);
			// $(".project-nav--fixed").removeClass('project-nav--fixed').addClass('project-nav', 200);
		}
	})
});

function swap_data(project_id, slide_id) {
	var id = slide_id + (slide_id-1);
	var arrow_id = id +1;	
	$(".overview__nav__link .link--active").removeClass("link--active").addClass("link");
	$(".overview__nav__link:nth-child("+id+") button").removeClass("link").addClass("link--active");
	$(".overview__nav .icon--next.--emp").attr('class', '').attr('class', 'icon--next --deemp');
	$(".overview__nav .icon--next:nth-child("+arrow_id+")").attr('class', '').attr('class', 'icon--next --emp');
	var data = get_data(project_id, slide_id);
	$(".overview__description .text-header").text(data[0]);
	$(".overview__description .text-body").text(data[1]);
	fix_next_link(project_id, slide_id);	
	if (data[2] == 'img') {
		if ($(".overview__image").hasClass('--video')) {
			$(".overview__image").removeClass('--video');
		}
		$(".overview__image").fadeOut(200, function() { $(this).attr('src',data[3]).fadeIn(200) });;
	}
	else {
		if (!$(".overview__image").hasClass('--video')) {
			$(".overview__image").addClass('--video');
		}
		$(".overview__image").attr('src',data[3]);
	}
}

function fix_next_link(project_id, slide_id){
	$nextLink = $(".link--next");
	var slide_limit = get_data_length(project_id);
	var next_id = slide_id+1;
	if (next_id > slide_limit) {
		$nextLink.addClass('--hidden');
		// $nextLink.attr("onclick","swap_data('"+project_id+"',1);").text('Back to the start<svg class="arrow--right"><use xlink:href="#arrow-icon"></use></svg>');
	}
	else {
		if ($nextLink.hasClass('--hidden')) {
			$nextLink.removeClass('--hidden');
		}
		$nextLink.attr("onclick","swap_data('"+project_id+"',"+next_id+");");
	}
}

function toggle_section(){
	var target = event.target;
	var section = $(target).closest('p').next();
	if (section.hasClass('--hidden')) {
		section.removeClass('--hidden').addClass('--full', 250);		
	}
	else {
		section.removeClass('--full', 250, function() {$(this).addClass('--hidden')});
	}
}

// return raw_data[str title, str content, str type, str src;
function get_data(project_id, slide_id) {
	slide_id = slide_id-1;
	var data_object = JSON.parse(project_data);
	console.log(data_object.overview_data[project_id].length);
	var raw_data = [data_object.overview_data[project_id][slide_id].title,
									data_object.overview_data[project_id][slide_id].content,
									data_object.overview_data[project_id][slide_id].type,
									data_object.overview_data[project_id][slide_id].src]
	return raw_data;
}

function get_data_length(project_id) {
	var data_object = JSON.parse(project_data);
	return data_object.overview_data[project_id].length;
}

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
