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

	var formWrapper = $('#form'), 
		formContent = formWrapper.find('.guide_container'),
		formHtml = formContent.html().toString().replace(/\t/g, '');

	formWrapper.find('.guide_code pre code').text(formHtml);

	var tableWrapper = $('#tables'), 
		tableContent = tableWrapper.find('.guide_container'),
		tableHtml = tableContent.html().toString().replace(/\t/g, '');

	tableWrapper.find('.guide_code pre code').text(tableHtml);

	/*******************
		typography
	********************/
	var typoContainer = $('.guide_typography-container')
		heading = typoContainer.find('h1'),
		headingDescriptionText = heading.children('span').eq(0),
		subTitle = typoContainer.find('h2'),
		subTitleDescriptionText = subTitle.children('span').eq(0),
		subsubTitle = typoContainer.find('h3'),
		subsubTitleDescriptionText = subsubTitle.children('span').eq(0),
		body = typoContainer.find('p'),
		bodyDescriptionText = body.children('span').eq(0);
		
	setTypography(heading, headingDescriptionText);
	setTypography(subTitle, subsubTitleDescriptionText);
	setTypography(subsubTitle, subTitleDescriptionText);
	setTypography(body, bodyDescriptionText);
	$(window).on('resize', function(){
		setTypography(heading, headingDescriptionText);
		setTypography(subTitle, subsubTitleDescriptionText);
		setTypography(subTitle, subTitleDescriptionText);
		setTypography(body, bodyDescriptionText);
	});

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