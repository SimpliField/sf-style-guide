jQuery(document).ready(function($){
  /*******************
    color swatch
  ********************/
  //convert rgba color to hex color
  $.cssHooks.backgroundColor = {
      get: function(elem) {
          if (elem.currentStyle)
              var bg = elem.currentStyle["background-color"];
          else if (window.getComputedStyle)
              var bg = document.defaultView.getComputedStyle(elem,
                  null).getPropertyValue("background-color");
          if (bg.search("rgb") == -1)
              return bg;
          else {
              bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
              function hex(x) {
                  return ("0" + parseInt(x).toString(16)).slice(-2);
              }
              return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
          }
      }
  }
  //set a label for each color swatch
  $('.guide_colors-elem-color').each(function(){
    var actual = $(this);
    $('<b>'+actual.css("background-color")+'</b>').insertAfter(actual);
  });

  copyCodeExample('#form');
  copyCodeExample('#tables');
  copyCodeExample('#empty');
  copyCodeExample('#items');
  copyCodeExample('#error');
  copyCodeExample('#loader');

  function copyCodeExample(id) {
    var wrapper = $(id);
    var content = wrapper.find('.copycode');
    var html = content.html().toString().replace(/\t/g, '');

    wrapper.find('.guide_code pre code').text(html);
  }

  /*******************
    typography
  ********************/
  var typeElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'];
  var typoContainer = $('.guide_typography-container');

  setTypoForAll();

  $(window).on('resize', function(){
    setTypoForAll();
  });

  function setTypoForAll() {
    typeElements.forEach(function setTypoForElem(elem) {
      var $elem = typoContainer.find(elem);
      var textElem = $elem.children('span').eq(0);

      setTypography($elem, textElem);
    });
  }
  function setTypography(element, textElement) {
    var fontSize = Math.round(element.css('font-size').replace('px',''))+'px',
      fontFamily = (element.css('font-family').split(','))[0].replace(/\'/g, '').replace(/\"/g, ''),
      fontWeight = element.css('font-weight');
    textElement.text(fontWeight + ' '+ fontFamily+' '+fontSize );
  }

  /*******************
    main  navigation
  ********************/
  var contentSections = $('main section');
  //smooth scroll to the selected section
  $('.sf_header-nav-elems a[href^="#"]').on('click', function(event){
        event.preventDefault();
        $('header').removeClass('nav-is-visible');
        var target= $(this.hash),
          topMargin = target.css('marginTop').replace('px', ''),
          hedearHeight = $('header').height();
        $('body,html').animate({'scrollTop': parseInt(target.offset().top - hedearHeight - topMargin)}, 200);
    });
    //update selected navigation element
    $(window).on('scroll', function(){
      updateNavigation();
    });

    function updateNavigation() {
    contentSections.each(function(){
      var actual = $(this),
        actualHeight = actual.height(),
        topMargin = actual.css('marginTop').replace('px', ''),
        actualAnchor = $('.cd-main-nav').find('a[href="#'+actual.attr('id')+'"]');

      if ( ( parseInt(actual.offset().top - $('.cd-main-nav').height() - topMargin )<= $(window).scrollTop() ) && ( parseInt(actual.offset().top +  actualHeight - topMargin )  > $(window).scrollTop() +1 ) ) {
        actualAnchor.addClass('selected');
      }else {
        actualAnchor.removeClass('selected');
      }
    });
  }
});
