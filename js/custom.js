
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/viveiro.webp' },
              { src: 'images/cravo.webp' },
              { src: 'images/agrofloresta1.jpg' },
              { src: 'images/flor.webp' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });

    $(function() {
      $('.curso-slides').vegas({
          slides: [
              { src: 'images/slides/curso2.webp' },
              { src: 'images/curso3.webp' },
              { src: 'images/curso1.jpg' },
              { src: 'images/curso4.webp' },
              { src: 'images/curso5.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


