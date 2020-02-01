function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if(scrollY >= heightFooter) {
    $('footer').css({
      'botton' : '0px'
    });
  } else {
    $('footer').css({
      'botton' : '-' + heightFooter + 'px'
    });
  }
}

$(window).load(function(){
  var windowHeight    =$(window).height(),
      footerHeight    =$('footer').height(),
      heightDocument  = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

      // Definiendo el tamaño del elemento para animar 
      $('#scroll-animate, #scroll-animate-main').css({
        'height' : heightDocument + 'px'
      });

      // Definiendo el tamaño de elemento Header del contenido
      $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
      });

      $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
      });

      scrollFooter(window.screenY, footerHeight);

      // Al desplazarse
      window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
          'top' :'-' + scroll + 'px'
        });

        $('header').css({
          'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        this.scrollFooter(scroll, footerHeight);
      }
});