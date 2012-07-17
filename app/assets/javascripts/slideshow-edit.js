$(window).load(function() {

  $('.slideshow').each(function() {
    $cur_slide_show = $(this);
    $cur_slide_container = $cur_slide_show.find('.slides_container');
    resizeAll($cur_slide_container);
    $cur_slide_show.draggable();
    $cur_slide_show.resizable({alsoResize: '.slideshow .slides_container'});
    
    $cur_slide_show.bind({
      load: function() {
        
      },
      resize: function() {
        resizeAll($cur_slide_container);
      }
    });
    
    updateControls($cur_slide_show, $('.prev_next', $cur_slide_show).val());
    $('.prev_next', $cur_slide_show).change(function(){
      val = $(this).val();
      updateControls($cur_slide_show, val);
    });
    
    $('.font', $cur_slide_show).change(function(){
      val = $(this).val();
      $('.caption', $cur_slide_show).css('font-family', val);
    });
  });

	//END: slideshow 1
	//START: slideshow 2
	resizeAll($('.slideshow2 .slides_container'));
	$('.slideshow2').draggable();
	$('.slideshow2').resizable({alsoResize: '.slideshow2 .slides_container'});

	$('.slideshow2').bind({
		load: function() {
		},
		resize: function() {
			resizeAll($('.slideshow2 .slides_container'));
		}
	});	
	updateControls('.slideshow2', $('.slideshow2 .prev_next').val());
	$('.slideshow2 .prev_next').change(function(){
		val = $(this).val();
		updateControls('.slideshow2', val);
	});	
	$('.slideshow2 .font').change(function(){
		val = $(this).val();
		$('.slideshow2 .caption').css('font-family', val);
	});		
	//END: slideshow 2	
	//START: slideshow 3
	resizeAll($('.slideshow3 .slides_container'));
	$('.slideshow3').draggable();
	$('.slideshow3').resizable({alsoResize: '.slideshow3 .slides_container'});

	$('.slideshow3').bind({
		load: function() {
		},
		resize: function() {
			resizeAll($('.slideshow3 .slides_container'));
		}
	});	
	
	updateControls('.slideshow3', $('.slideshow3 .prev_next').val());
	$('.slideshow3 .prev_next').change(function(){
		val = $(this).val();
		updateControls('.slideshow3', val);
	});	
	$('.slideshow3 .font').change(function(){
		val = $(this).val();
		$('.slideshow3 .caption').css('font-family', val);
	});		
	//END: slideshow 3
	
	//START: slideshow 4
	resizeAll($('.slideshow4 .slides_container'));
	$('.slideshow4').draggable();
	$('.slideshow4').resizable({alsoResize: '.slideshow4 .slides_container'});

	$('.slideshow4').bind({
		load: function() {
		},
		resize: function() {
			resizeAll($('.slideshow4 .slides_container'));
		}
	});	
	
	updateControls('.slideshow4', $('.slideshow4 .prev_next').val());
	$('.slideshow4 .prev_next').change(function(){
		val = $(this).val();
		updateControls('.slideshow4', val);
	});	
	$('.slideshow4 .font').change(function(){
		val = $(this).val();
		$('.slideshow4 .caption').css('font-family', val);
	});		
	//END: slideshow 4
	
	$('.slideshow').mouseover(function(){
		$(this).css('border', 'solid blue 1px');
	});
	$('.slideshow').mouseout(function(){
		$(this).css('border', 'solid transparent 1px');
	});

	function resizeAll(slideshow){
    var winHeight, winRatio, winWidth;
    winWidth = parseInt(slideshow.width());
    winHeight = parseInt(slideshow.height());
    winRatio = winWidth / winHeight;
    console.log('win wxhxr : ' + winWidth + ' x ' + winHeight + ' ratio: ' + winRatio);
    slideshow.find("a").width(winWidth);
    slideshow.find("a").height(winHeight);
    return slideshow.find("img").each(function() {
      var consoleHieght, dh, diff, dw, ih, image, imageHeight, imageRatio, imageWidth, iw, left, parent, top;
      parent = $(this).parent();
      parent.css('display', 'block');
      image = $(this);
      imageWidth = parseInt(image.width());
      imageHeight = parseInt(image.height());
      imageRatio = imageWidth / imageHeight;
      consoleHieght = Math.round(winWidth / imageRatio);
      console.log('img wxhxr : ' + imageWidth + ' x ' + imageHeight + ' ratio: ' + consoleHieght);
      if (winRatio > imageRatio) {
        console.log('winRatio>imageRatio' + ' wxh : ' + winWidth + 'x' + consoleHieght);
        image.css({
          width: winWidth,
          height: Math.round(winWidth / imageRatio)
        });
      } else {
        image.css({
          width: Math.round(winHeight * imageRatio),
          height: winHeight
        });
      }
      dw = slideshow.width();
      dh = slideshow.height();
      iw = image.width();
      ih = image.height();
      if (dw < iw) {
        diff = iw - dw;
        left = -(diff / 2);
      }
      if (dh < ih) {
        diff = ih - dh;
        top = -(diff / 2);
      }
      return image.css({
        position: 'relative',
        top: top,
        left: left
      });
    });
	
	}
	
	function updateControls(parent, val){	
		switch(val){
			case 'upon_hover':
				$(parent).hover(function(){
					$(parent+' .controls').css('display', 'block');
				});
				$(parent).mouseleave(function(){
					$(parent+' .controls').css('display', 'none');
				});				
				break
			case 'always':
				$(parent).hover(function(){
					$(parent+' .controls').css('display', 'block');
				});
				$(parent).mouseleave(function(){
					$(parent+' .controls').css('display', 'block');
				});
				$(parent+' .controls').css('display', 'block');
				break;
			case 'never':
				$(parent).hover(function(){
					$(parent+' .controls').css('display', 'none');
				});
				$(parent).mouseleave(function(){
					$(parent+' .controls').css('display', 'none');
				});
				$(parent+' .controls').css('display', 'none');
				break;
		}	
	}
	
	$( "#resizable" ).resizable();
	$('.caption').draggable();
	$('.slideshow-settings').draggable();
	$('.controls').draggable();
	
	$( ".slider-interval" ).slider({
		min:500,
		max:10000,
		step:500,
		value:$('input:text[name=slide_interval]').val(),
		slide: function(event, ui) {
			val = ui.value;
			$('input:text[name=slide_interval]').attr("value", val);
		}
	});
	
});
