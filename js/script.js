$(window).load(function() {
  // if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
  //   var $ = jQuery.noConflict()
  //   $(window).scroll(function(){
  //     var scroll = $(this).scrollTop()
  //     $(".parallax").css({"background-position":"0px "+scroll/4+"px"})
  //   }) 
  // }
  // $(".parallax")

  // var navdiff = $('#subnav').height()- ($('.project__body p').last().height()+$('.project__body h2').last().height());
  // if (navdiff > 0 ) {
  //   navdiff = Math.ceil(navdiff/16)*16;
  //   // console.log(navdiff);
  //   $('.project__body p').last().css('margin-bottom','+'+navdiff+'px');
  // }

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

    // // All list items
    // var lastId;
    // var menuItems = subnav.find("a");
    // // Anchors corresponding to menu items
    // var scrollItems = menuItems.map(function(){
    //   var item = $($(this).attr("href"));
    //   if (item.length) { return item; }
    // });

    // // Bind to scroll
    // $(window).scroll(function(){
    //    // Get container scroll position
    //    var fromTop = $(this).scrollTop()+ $('.navbar').height();
      
    //    // Get id of current scroll item
    //    var cur = scrollItems.map(function(){
    //      if ($(this).offset().top-16 < fromTop)
    //        return this;
    //    });
    //    // Get the id of the current element
    //    cur = cur[cur.length-1];
    //    var id = cur && cur.length ? cur[0].id : "";
      
    //    if (lastId !== id) {
    //     lastId = id;
    //     // Set/remove active class
    //     subnav.children().removeClass('subnav__link--active');
    //     $('a[href=#'+id+']').addClass('subnav__link--active');
    //    }                   
    // });

});

    