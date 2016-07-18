$('.window-height').outerHeight(viewportSize.getHeight());
var controller = new ScrollMagic.Controller();
var scene = [];

var timeline = new TimelineMax({ repeat:-1, delay: 0, yoyo: true });

var tmTablet = new TimelineMax({ paused:true, repeat:0, yoyo:false });
var tmPeople = new TimelineMax({ paused:true, repeat:-1, yoyo:true });

timeline.append(tmPeople);

jQuery.noConflict();
(function( $ ) {
  $(function() {

  	var wh = $('.window-height');
    $('.venobox').venobox();

    if (viewportSize.getWidth() < 768) { var mobile = true; }
    else { var mobile = false; }

  	function resize() {

      if (viewportSize.getWidth() < 768) {
        wh.outerHeight('auto');

        if (!mobile) {
          TweenMax.killAll(false, true, true, true);
          controller.enabled(false);
          $('*:not(#preloader)').attr('style', '');
          mobile = true;
        }
      }
      else {
        wh.outerHeight(viewportSize.getHeight());

        if (mobile) {
          controller.enabled(true);
          history.go(0);
          window.location.href = window.location.href;
          mobile = false;
        }
      }
		}

		function initialize() {
			resize();
		}

    $(window).resize(function(event) {
    	resize();
    });

    var typed = $('.typed');
    var typedWords = typed.attr('data-words').split('|');
    typed.parent().outerWidth(parseInt(typed.attr('data-width')));

    typed.typed({
      strings: typedWords,
      typeSpeed: 5,
      loop: true,
      showCursor: false,
      backDelay: 2000
    });

    var icons = ["images/pin-1.svg","images/food-1.svg","images/paperclip-1.svg","images/coffee-1.svg","images/sun-3.svg","images/time-1.svg","images/money-1.svg","images/heart-1.svg","images/lightbulb-1.svg","images/group-1.svg"];

    var userIcons = $('.users-wrapper').find('.user-icon');

    setInterval(function(){
      var randomIcon = Math.floor(Math.random() * ((icons.length-1) + 1));
      var randomUser = Math.floor(Math.random() * ((userIcons.length-1) + 1));

      userIcons.each(function(index, el) {
        if (index == randomUser) {
          var thisIcon = $(this);

          if (!thisIcon.hasClass('idea')) { thisIcon.addClass('idea').find('span').html('<img src="'+icons[randomIcon]+'" alt="">'); }

          var myTimeout = function(e) {
            e.removeClass('idea');
          };

          setTimeout(myTimeout, 1500, thisIcon);
        }
      });
    }, 1000);

    initialize();

  });

  $(window).load(function() {
    /* Act on the event */
      //$('#preloader').fadeOut(400, function(){
        $('body').removeClass('loading');

        $(this).scrollTop(0);

        setTimeout(function(){
          tmPeople.play();
          tmTablet.play();
          controller.addScene(scene);
        }, 500);
      //});
  });
})(jQuery);