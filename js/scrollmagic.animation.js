jQuery.noConflict();

(function( $ ) {
  $(function() {

  if (viewportSize.getWidth() > 768) {
		// init controller
    var speed = [400, 800, 1200];
    var section = [
      {
        name: '#s1',
        animation: ['#s1a1', '#s1a2', '#s1a3', '#s1a4', '#s1a5', '#s1a6', '#s1a7', '#s1a8', '#s1a9', '#s1a10', '#s1a11', '#s1a12', '#s1a13', '#s1a14', '#s1a15', '#s1a16', '#s1a17', '#s1a18', '#s1a19', '#s1a20', '#s1a21']
      },
      {
        name: '#s2',
        animation: ['#table', '#s2a1', '#s2a2']
      },
      {
        name: '#s3',
        animation: ['#s3a1']
      }
    ];

    /////////////////////////////////////////////////////////

    // Header animation
        TweenMax.set($('.logo'), {css:{
          opacity: 0, 
          top: -50
        }});

        TweenMax.set($('.header-text-main'), {css:{
          opacity: 0, 
          top: -50
        }});

        TweenMax.set($('.header-text-secondary'), {css:{
          opacity: 0, 
          left: -20
        }});

        TweenMax.set($('.header-message'), {css:{
          opacity: 0, 
          top: 50
        }});

        TweenMax.set($('.btn:not(#mc-embedded-subscribe)'), {css:{
          opacity: 0, 
          scale: 0
        }});

        TweenMax.set($('.ellipse'), {css:{
          opacity: 0
        }});

        TweenMax.set($('.btn-down-wrapper a'), {css:{
          opacity: 0,
          scale: 0
        }});

        // Tablet
          tmTablet.add(TweenMax.to(section[0].animation[0], 2, 
          { 
            bottom: -237,  
            ease: Elastic. easeOut.config(0.4, 0.4) 
          }), "tablet");

        // Header
          tmTablet.add(TweenMax.to(section[0].animation[16], 1, { top: 0, opacity: 1, ease: Bounce. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[17], 1, { top: 0, opacity: 1, ease: Bounce. easeOut }), "tablet");

        // Button
          tmTablet.add(TweenMax.to(section[0].animation[7], 0.3, { delay: 0.5, scale: 1, opacity: 1, ease: Back. easeOut.config(2) }), "tablet");

        // Waves
          tmTablet.add(TweenMax.to(section[0].animation[8], 1, { delay: 0.05, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[9], 1, { delay: 0.1, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[10], 1, { delay: 0.15, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[11], 1, { delay: 0.2, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[12], 1, { delay: 0.25, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[13], 1, { delay: 0.3, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[14], 1, { delay: 0.35, opacity: 1, ease: Power4. easeOut }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[15], 1, { delay: 0.4, opacity: 1, ease: Power4. easeOut }), "tablet");

        // People
          tmTablet.add(TweenMax.to(section[0].animation[1], 0.3, { delay: 0.05, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[2], 0.3, { delay: 0.1, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[3], 0.3, { delay: 0.15, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[4], 0.3, { delay: 0.2, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[5], 0.3, { delay: 0.25, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[6], 0.3, { delay: 0.3, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");

          tmPeople.add(TweenMax.to(section[0].animation[1], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");
          tmPeople.add(TweenMax.to(section[0].animation[2], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");
          tmPeople.add(TweenMax.to(section[0].animation[3], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");
          tmPeople.add(TweenMax.to(section[0].animation[4], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");
          tmPeople.add(TweenMax.to(section[0].animation[5], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");
          tmPeople.add(TweenMax.to(section[0].animation[6], 1.3, { marginBottom: 10, ease: Power0.easeNone }), "people");

        // Waves
          tmTablet.add(TweenMax.to($(section[0].animation[1]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");
          tmTablet.add(TweenMax.to($(section[0].animation[2]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");
          tmTablet.add(TweenMax.to($(section[0].animation[3]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");
          tmTablet.add(TweenMax.to($(section[0].animation[4]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");
          tmTablet.add(TweenMax.to($(section[0].animation[5]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");
          tmTablet.add(TweenMax.to($(section[0].animation[6]), 1, {delay: 1, opacity: 1, marginBottom: 0 }), "tablet");

        // Text
          TweenMax.set(section[0].animation[19], {css:{opacity: 0, scale: 0}});
          tmTablet.add(TweenMax.to(section[0].animation[18], 0.5, { delay: 0.3, opacity: 1, left: 0, ease: Back. easeOut.config(2) }), "tablet");
          tmTablet.add(TweenMax.to(section[0].animation[19], 0.3, { delay: 0.5, opacity: 1, scale: 1, ease: Back. easeOut.config(2) }), "tablet");    

        // Text under button
          tmTablet.add(TweenMax.to(section[0].animation[20], 0.3, { delay: 0.5, top: 15, opacity: 1, ease: Back. easeOut.config(2) }), "tablet");    

    /////////////////////////////////////////////////////////

    // Table animation

      TweenMax.set($('#list-item-1'), {css:{opacity: 0, left: -300}});
      TweenMax.set($('#list-item-2'), {css:{opacity: 0, right: -300}});
      TweenMax.set($('#list-item-3'), {css:{opacity: 0, left: -300}});
      TweenMax.set($('#list-item-4'), {css:{opacity: 0, right: -300}});
      TweenMax.set(section[1].animation[2], {css:{opacity: 0, top: 50}});

      TweenMax.set('#table', {css:{ 
        top: -1750, 
        position: 'absolute',
        left: '50%',
        marginLeft: -265
      }});

      scene[0] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        duration: viewportSize.getHeight(),
        offset: viewportSize.getHeight()/-2
      })
      .setTween(new TimelineMax().to('#table', 1, 
        {
          top: 0,
           ease: Power1.easeOut
        }
      )); // Show table

      scene[21] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        duration: viewportSize.getHeight()/6,
        offset: viewportSize.getHeight()/3
      })
      .setTween(new TimelineMax().to('#stl', 2, 
        {
          top: 0,
          opacity: 1
        }
      )); // Show table indicators 

      scene[1] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        
        duration: viewportSize.getHeight()-viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#list-item-1', 1, 
        {
          left: 0,
          opacity: 1
        }
      ));

      scene[2] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        
        duration: viewportSize.getHeight()-viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#list-item-2', 1, 
        {
          right: 0,
          opacity: 1
        }
      ));

      scene[3] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        
        duration: viewportSize.getHeight()-viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#list-item-3', 1, 
        {
          left: 0,
          opacity: 1
        }
      ));

      scene[4] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        
        duration: viewportSize.getHeight()-viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#list-item-4', 1, 
        {
          right: 0,
          opacity: 1
        }
      ));

      TweenMax.set(section[1].animation[2], {css:{ 
        bottom: '10%',
        left: '1%'
      }});      

      scene[5] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        duration: viewportSize.getHeight()-viewportSize.getHeight()/2,
        offset: viewportSize.getHeight()/10
      })
      .setTween(new TimelineMax().to(section[1].animation[2], 1, 
        {
          top: 0,
          opacity: 1
        }
      )); // Show list  

    /////////////////////////////////////////////////////////

    // Card animation

      TweenMax.set($('#card-3'), {css:{ 
        left: viewportSize.getWidth()/-2,
        position: 'absolute',
        bottom: -64
      }});

      TweenMax.set($('#card-1'), {css:{ 
        top: 108,
        right: -80 
      }});

      TweenMax.set($('#card-4'), {css:{ 
        bottom: -472,
        left: 202,
        position: 'absolute' 
      }});

      TweenMax.set($('#card-5'), {css:{ 
        bottom: 58,
        left: 172,
        position: 'absolute' 
      }});

      TweenMax.set($('#card-2'), {css:{ 
        top: 0,
        left: -100 
      }});

      TweenMax.set($('.card'), {css:{ 
        position: 'absolute'
      }});

      TweenMax.set($('#title-card'), {css:{ 
        position: 'absolute',
        right: 155,
        top: -118
      }});

      TweenMax.set($('#small-cards-wrapper'), {css:{ 
        opacity: 0,
        top: 100
      }});

      scene[6] = new ScrollMagic.Scene({
        triggerElement: '#cards-wrapper',
        duration: viewportSize.getHeight()*2,
        offset: viewportSize.getHeight()/-2
      })
      .setTween(new TimelineMax().to('#card-1', 1, 
        {
          right: 0
        }
      )); // Move cards

      scene[7] = new ScrollMagic.Scene({
        triggerElement: '#cards-wrapper',
        duration: viewportSize.getHeight()*2,
        offset: viewportSize.getHeight()/-2
      })
      .setTween(new TimelineMax().to('#card-2', 1, 
        {
          left: 0
        }
      ));

      scene[8] = new ScrollMagic.Scene({
        triggerElement: '#cards-wrapper',
        duration: viewportSize.getHeight()*2,
        offset: viewportSize.getHeight()/-2
      })
      .setTween(new TimelineMax().to('#card-5', 1, 
        {
          left: 112
        }
      ));

      scene[9] = new ScrollMagic.Scene({
        triggerElement: '#s4',
        offset: -200
      })
      .setClassToggle('#card-3', 'stuck'); // Pencil

      scene[10] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        offset: viewportSize.getHeight()/2
      })
      .setClassToggle('#bg-img-left', 'show');

      scene[11] = new ScrollMagic.Scene({
        triggerElement: section[1].name,
        offset: viewportSize.getHeight()/2
      })
      .setClassToggle('#bg-img-right', 'show');

      scene[12] = new ScrollMagic.Scene({
        triggerElement: '#s4',
        offset: -200,
        duration: viewportSize.getHeight()
      })
      .setTween(new TimelineMax().to('#title-card', 1, 
        {
          right: 15
        }
      ));

      scene[13] = new ScrollMagic.Scene({
        triggerElement: '#s4',
        offset: -200,
        duration: viewportSize.getHeight() + viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a2', 1, 
        {
          opacity: 1,
          top: 0
        }
      ));

      scene[14] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a1', 1, 
        {
          opacity: 1,
          top: 0
        }
      ));

      scene[15] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight()/2,
        offset: viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a3', 1, 
        {
          opacity: 1,
          top: 0
        }
      ));

      scene[16] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight()/2,
        offset: viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a4', 1, 
        {
          opacity: 1,
          top: 0
        }
      ));

      scene[17] = new ScrollMagic.Scene({
        triggerElement: '#footer',
        duration: viewportSize.getHeight()/2,
        offset: viewportSize.getHeight()*(-2/3)
      })
      .setTween(new TimelineMax().to('#small-cards-wrapper', 1, 
        {
          opacity: 1,
          top: 0
        }
      ));

      scene[18] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight()
      })
      .setTween(new TimelineMax().to('#s5a9', 1, 
        {
          top: -60
        }
      ));

      scene[19] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight(),
        offset: viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a10', 1, 
        {
          top: -60
        }
      ));

      scene[20] = new ScrollMagic.Scene({
        triggerElement: '#s5',
        duration: viewportSize.getHeight(),
        offset: viewportSize.getHeight()/2
      })
      .setTween(new TimelineMax().to('#s5a11', 1, 
        {
          top: -60
        }
      ));

    /////////////////////////////////////////////////////////
  }
  });
})(jQuery);

