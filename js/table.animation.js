var animation = {
  startImage: 220, // Start image number
  endImage: 280, //End image number
  startPoint: 0, // Dynamically set later
  endPoint: 0, // Dynamically set later
  pause: [], // Images where the animation freezes
  sources: [],
  images: [],
  ratio: 800/600,
  speed: 10 // Lower is faster
};

jQuery.noConflict();
(function($) {
  $(function() {

    ticking = false;
    currentImageSet = 0;

    // Loader
    var worker = null;
    var loaded = 0;
    var loadedLast = -1;

    var jCanvas = $('#table');

    var canvas = document.getElementById('table');
    var context = canvas.getContext('2d');

    var num = animation.endImage-animation.startImage;
    var activeImages = 0, cw = 531, ch = 422;

    function resizeCanvas() {
      // $('.canvas').height(viewportSize.getHeight()*2+(num-1)*animation.speed);
      drawCanvas();
    }

    resizeCanvas();

    $(window).resize(function(event) {
      resizeCanvas();
    });

    animation.startPoint = viewportSize.getHeight()/2.2;
    animation.endPoint = viewportSize.getHeight();

    // Preload images function
    function loadImages(sources, callback) {
      var loadedImages = 0;
      for (var i = 0; i < animation.sources.length; i++ ) {
        if (animation.sources[i] != null) {
          animation.images[i] = new Image();
          animation.images[i].onload = function() { 
            if(++loadedImages >= animation.sources.length) {
              callback(animation.images);
            }

            // console.log(loadedImages);
            loaded = parseInt(loadedImages/percent);
            if (loadedLast != loaded) { increment(); }
            loadedLast = loaded;

            // Remove preloader
            if (loadedImages == activeImages) {
              // Load done
            }
          };

          animation.images[i].src = animation.sources[i];
        }
      };
    }

    function drawCanvas(currentScrollY) {
      var resizeCanvas = false;

      if (currentScrollY === undefined) { currentScrollY = (window.scrollY || window.pageYOffset); resizeCanvas = true; }

      if ((currentScrollY >= animation.startPoint) && (currentScrollY <= animation.endPoint) && (currentScrollY != 0)) {

        var currentImage = parseInt((currentScrollY-animation.startPoint)/animation.speed);

        if ((currentImageSet != currentImage) || resizeCanvas) {

          currentImageSet = currentImage;

          if (getPaused(currentImageSet, false)) { var drawThis = getPaused(currentImageSet, true); }
          else { var drawThis = currentImageSet; }

          if (drawThis < animation.images.length) {
            context.rect(0, 0, cw, ch);
            context.fillStyle = "#fff";
            context.fill();
            context.drawImage(animation.images[drawThis], 0, 0, cw, ch);
          }
        }
      } else {
        if (animation.sources.length > 0) {
          if (currentScrollY < animation.startPoint) {
            context.rect(0, 0, cw, ch);
            context.fillStyle = "#fff";
            context.fill();
            context.drawImage(animation.images[0], 0, 0, cw, ch);
          } else {
            context.rect(0, 0, cw, ch);
            context.fillStyle = "#fff";
            context.fill();

            context.drawImage(animation.images[animation.sources.length-1], 0, 0, cw, ch);
          }
        }
      }
    }

    // Add images sources to array
    for(var i = animation.startImage; i <= animation.endImage; i++) {
      var addIt = 0;

      // Skip paused images
      for (var j = 0; j < animation.pause.length; j++) {
        if ((i > (animation.pause[j][0])) && (i <= (animation.pause[j][1]))) {
          addIt++;
          break;
        }
      };

      if (addIt == 0) {
        name = '00000'+i;
        src = 'images/table/png/table_'+name.substr(name.length-5)+'.png';
        activeImages++;
      }
      else {
        // Skip source if image is in pause
        src = null;
      }

      percent = activeImages/100;
      increment();

      animation.sources.push(src);      
    }

    // Preload images
      loadImages(animation.sources, function(images) {
        context.drawImage(animation.images[0], 0, 0, cw, ch);
      });
    // End preloaded images

    // Request animation frame (Scroll)
      function onScroll() {
        var top = (window.scrollY || window.pageYOffset);
        latestKnownScrollY = top;
        requestTick();
      }

      function requestTick() {
        if(!ticking) {
          requestAnimationFrame(update);
        }
        ticking = true;
      }

      function update(t) {
        ticking = false;

        var currentScrollY = latestKnownScrollY;
        drawCanvas(currentScrollY);
      }

      window.addEventListener('scroll', onScroll, false);
    // End Request animation frame (Scroll)

    // img - image number, res - if 'false' returns wether image should be paused or not and if 'true' returns the paused image number
    function getPaused(img, res) {

      for (var i = 0; i < animation.pause.length; i++) {
        if ((img >= (animation.pause[i][0]-animation.startImage)) && (img <= (animation.pause[i][1]-animation.startImage))) {
          if (res) { return animation.pause[i][0]-animation.startImage; break; }
          else { return true; break; }
        }
      };

      return false;
    }
    
    // Loader
    function increment() {
        // Percent++ 
    }
  });
})(jQuery);