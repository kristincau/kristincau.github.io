$(window).load(function() {

  $("#comparison").twentytwenty();
  var header = new Headhesive('.navbar');

  var bottomHeight = $('footer').outerHeight()+$('.project__end').outerHeight()+96+32;

  $("#subnav").sticky({topSpacing:80, bottomSpacing: bottomHeight});

  var subnav = $('#subnav');
  $('a[href*=#]:not([href=#])').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top - $('.navbar').height()
            }, 1000);        
            subnav.children().removeClass('subnav__link--active');
            $(this).addClass('subnav__link--active');
            return false;
        }
    }
  });


});

    