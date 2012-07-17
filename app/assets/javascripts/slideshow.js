var setLeftTopPos, setWHSize, setZindex, delete_slide_show_img, setCaption;

setLeftTopPos = function(element_style_id_val, left_val, top_val) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      left: left_val,
      top: top_val
    }
  }, function(data) {
    return console.log("left top pos saved slideshow.js");
  }, 'json');
}

setWHSize = function(element_style_id_val, width_val, height_val) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      width: width_val,
      height: height_val
    }
  }, function(data) {
    return console.log("width height size saved slideshow.js");
  }, 'json');
}

setCaption = function(ss_img_id_val, caption_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      caption: caption_val
    }
  }, function(data) {
    return console.log("caption ss_image saved slideshow.js");
  }, 'json');
}

delete_slide_show_img = function(ss_img_id_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'DELETE',
    slideshow_images: {
      id: ss_img_id_val
    }
  }, function(data) {
    return console.log("deleted slide_show_image slideshow.js");
  }, 'json');
}

setZindex = function(element_style_id_val, zIndex) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      z_index: zIndex
    }
  }, function(data) {
    return console.log("element zindex saved slideshow.js");
  }, 'json');
}

$(document).ready(function(){  
  
  var makeMultiUploadSlideShow = function(element) {
    
    // Initialize the jQuery File Upload widget:
    $(element).fileupload({ 
      maxFileSize: 3000000, 
      sequentialUploads: true, 
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i 
      
    }).bind('fileuploadstop', function() {
      //$('.sort.subPanelButton.ss').trigger('click');
      window.location.reload();
    }).bind('fileuploadprogressall', function() {
      if( $('.fileupload-content').height() > 500 ) {
        $('.PanelHor').css({
          height: 547,
          overflow: 'scroll-y',
          //width: $('.fileupload-content').width()
        });
      } else {
        $('.PanelHor').css({
          height: $('.fileupload-content').height() + 60,
          //width: $('.fileupload-content').width()
        });
      }
  
      //window.location.reload();
    });
    // 
    // Load existing files:
    $.getJSON($(element).find('form').prop('action'), function (files) {
        var fu = $(element).data('fileupload');
        fu._adjustMaxNumberOfFiles(-files.length);
        fu._renderDownload(files)
            .appendTo($(element).find('.files'))
            .fadeIn(function () {
                // Fix for IE7 and lower:
                $(this).show();
            });
    });
  
    // Open download dialogs via iframes,
    // to prevent aborting current uploads:
    $(element).find('.files a:not([target^=_blank])').live('click', function (e) {
        e.preventDefault();
        $('<iframe style="display:none;"></iframe>')
            .prop('src', this.href)
            .appendTo('body');
    });
    
  }
  
  
  var $latest_slide_show_added, $latest_slide_container, $controller_div;
  
  $controller_div = $('\
    <div class="controller">\
      <a class="lock_element">\
        <img src="/assets/images/toolbar-button-lock.png">\
      </a>  \
      <a class="settings_element">\
        <img src="/assets/images/toolbar-button-settings.png">\
      </a>  \
      <a class="zup">\
        <img src="/assets/images/toolbar-button-up.png">\
      </a>  \
      <a class="zdown">\
        <img src="/assets/images/toolbar-button-down.png">\
      </a>  \
      <a class="delete_element">\
      <img src="/assets/images/toolbar-button-delete.png">\
      </a>\
    </div>\
  ');
  
  $latest_slide_show_added = $('\
    <div id="element_910" class="slideshow element slide_show_element" data-slideshow-attr-id="6" data-elementid="910" data-elementstyleid="796" data-pageid="177" data-locked="false" style="background-color: gray; left: -61px; top: 148px; width: 592px; height: 247px; background-position: initial initial; background-repeat: initial initial; ">\
      <div class="slides_container default" style="width: 592px; height: 247px; overflow: hidden; position: relative; display: block; ">\
        <div class="slide">\
          <a href="/assets/images/default_images/avacados.jpg" title="Avacados" target="_blank"><img src="/assets/images/default_images/avacados.jpg" alt="Slide 1"></a>\
          <div class="caption" style="bottom:0">\
            <p>Avacados</p>\
          </div>\
        </div>\
        <div class="slide">\
          <a href="/assets/images/default_images/ballons.jpg" title="Ballons" target="_blank"><img src="/assets/images/default_images/ballons.jpg" alt="Slide 4"></a>\
          <div class="caption" style="bottom:0">\
            <p>Ballons</p>\
          </div>\
        </div>\
        <div class="slide">\
          <a href="/assets/images/default_images/candle.jpg" title="Candle" target="_blank"><img src="/assets/images/default_images/candle.jpg" alt="Slide 5"></a>\
          <div class="caption" style="bottom:0">\
            <p>Candle</p>\
          </div>\
        </div>\
        <div class="slide">\
          <a href="/assets/images/default_images/eggs.jpg" target="_blank"><img src="/assets/images/default_images/eggs.jpg" alt="Slide 6"></a>\
          <div class="caption" style="bottom:0">\
            <p>Eggs</p>\
          </div>\
        </div>\
      </div>\
      <a href="#" class="prev controls">\
        <img src="/assets/images/default_images/arrow-prev.png" width="24" height="43" alt="Arrow Prev">\
      </a>\
      <a href="#" class="next controls">\
        <img src="/assets/images/default_images/arrow-next.png" width="24" height="43" alt="Arrow Next">\
      </a>\
      <div class="slideshow-settings ui-draggable" style="display:none;">\
			  <a class="close_slide_show_settings"><img src="/assets/images/toolbar-button-delete.png"></a>\
        <p><label for="transition">Transition</label>\
          <select class="options" name="transitionx" id="transitionx" />\
            <option value="slideLeft">slide left</option>\
            <option value="slideRight">slide right</option>\
            <option value="slideUp">slide up</option>\
            <option value="slideDown">slide down</option>\
            <option value="fade" selected="selected">fade</option>\
          </select>\
          <p>\
            <label >Slide Interval</label>\
            <div class="slider-interval"></div>\
            <input type="text" name="slide_interval" class="slide_interval" value="1000" class="textinput" />\
          </p>\
          <p><input type="checkbox" class="options" name="autoplay" id="autoplay" /><label for="autoplay">Autoplay</label></p>\
          <p><input type="checkbox" class="options" name="show_caption" id="show_caption" /><label for="autoplay">Show Caption</label></p>\
          <p><input type="checkbox" class="options" name="show_pagination" id="show_pagination" /><label for="autoplay">Show Pagination</label></p>\
        </p>\
        <p>\
          <label>Previous & Next Arrow</label>\
          <select name="prev_next" class="prev_next">\
            <option value="upon_hover">Upon Hover</option>\
            <option value="always" selected="selected">Always</option>\
            <option value="never">Never</option>\
          </select>\
        </p>\
        <p>\
          <label>Font</label>\
          <select name="font" class="font">\
            <option value="tahoma">Tahoma</option>\
            <option value="courier new">Courier New</option>\
            <option value="Gorditas">Gorditas</option>\
            <option value="Bilbo">Bilbo</option>\
            <option value="Emilys Candy">Emilys Candy</option>\
            <option value="Ribeye Marrow">Ribeye Marrow</option>\
            <option value="Henny Penny">Henny Penny</option>\
          </select>\
        </p>\
        \
      </div>\
    </div>\
  ');
  
  $add_elem_slideshow_page_id = $('#add_elem_slideshow').data('pageid');
  $('#add_elem_slideshow').click(function() {
    console.log('latest_slide_show_added');
    console.log($latest_slide_show_added);
    var element_id_val;
    $.post("/elements", { _method:'POST', 
      element : {
        page_id: $('#add_elem_slideshow').data('pageid'), 
        elem_type: 'slide_show_element'
        //content: $latest_slide_show_added.html()
      } 
    }, function(data) {
      
      element_id_val = data.element.id;
      console.log('element data set');
      $latest_slide_show_added
        .attr('id', 'element_'+element_id_val)
        .attr('data-elementid', element_id_val)
        .attr('data-pageid', $add_elem_slideshow_page_id);
      
      $.post("/element_styles", { _method:'POST',
        element_style : {
          element_id: data.element.id, 
          width: 592, 
          height: 247
        }        
      }, function(data) {
        
        console.log('element_styles data set');
        $latest_slide_show_added
          .attr('data-elementstyleid',data.element_style.id);
          
        $.post("/slideshow_attribs", { _method:'POST',
          slideshow_attrib : {
            element_id: element_id_val, 
            width: 592, 
            height: 247,
            transition: 'fade'
          }        
        }, function(data) {
          
          console.log('slideshow_attribs data set');
          $latest_slide_show_added
            .attr('data-slideshow-attr-id',data.slideshow_attrib.id);
            
          console.log('make slider the latest_slide_show_added');
          $latest_slide_show_added.slides({
            preload: true,
            preloadImage: '/assets/images/default_images/loading.gif',
            play: 0,
            pause: 500,
            hoverPause: true,				
            effect : 'fade',
            crossfade:true,
            animationStart: function(current){
              $('.caption').animate({
                bottom:-35
              },100);
              if (window.console && console.log) {
                // example return of current slide number
                console.log('animationStart on slide: ', current);
              };
            },
            animationComplete: function(current){
              $('.caption').animate({
                bottom:0
              },200);
              if (window.console && console.log) {
                // example return of current slide number
                console.log('animationComplete on slide: ', current);
              };
            },
            slidesLoaded: function() {
              $('.caption').animate({
                bottom:0
              },200);
            }
          });
          
          console.log('get container for latest_ssa');
          $latest_slide_container = $latest_slide_show_added.find('.slides_container');
          //resizeAll($latest_slide_container);
          $latest_slide_show_added.draggable({
            stop: function(event, ui) { 
              element_style_id_val = $(this).data('elementstyleid');
              left_val = ui.position.left;
              top_val = ui.position.top;
              setLeftTopPos(element_style_id_val, left_val, top_val)
            }
          }).resizable({
            alsoResize: $latest_slide_container,
            stop: function(event, ui) {
              var element_style_id_val, height_val, width_val;
              element_style_id_val = $(this).data('elementstyleid');
              width_val = ui.size.width;
              height_val = ui.size.height;
              return setWHSize(element_style_id_val, width_val, height_val);
            }
          });
          
          console.log('bind event for onresize latest_slide_show_added');
          $latest_slide_show_added.bind({
            load: function() {
              
            },
            resize: function() {
              resizeAll( $(this).find('.slides_container') );
            }
          });
          
          console.log('prepend the generated latest_slide_show_added');
          $latest_slide_show_added.append($controller_div);
          $('.controller', $latest_slide_show_added).mousedown(function(event) {
            var $target, cur_zindex, element_id, element_id_val, element_style_id_val, zIndex, $cur_element = $(this).parents('.element');
            event.preventDefault();
            event.stopPropagation();
            $target = $(event.target);
            if ($target.is('.zup') || $target.is('.zup img')) {
              console.log("z_index_add");
              cur_zindex = $(this).parents('.element').css('zIndex');
              $(this).parents('.element').css({
                zIndex: parseInt(cur_zindex) + 1
              });
              console.log(parseInt(cur_zindex) + 1);
              element_id_val = $cur_element.data('elementid');
              element_style_id_val = $cur_element.data('elementstyleid');
              zIndex = parseInt(cur_zindex) + 1;
              return setZindex(element_id_val, element_style_id_val, zIndex);
            } else if ($target.is('.zdown') || $target.is('.zdown img')) {
              console.log("z_index_subtract");
              cur_zindex = $(this).parents('.element').css('zIndex');
              $(this).parents('.element').css({
                zIndex: parseInt(cur_zindex) - 1
              });
              console.log(parseInt(cur_zindex) - 1);
              element_id_val = $cur_element.data('elementid');
              element_style_id_val = $cur_element.data('elementstyleid');
              zIndex = parseInt(cur_zindex) - 1;
              return setZindex(element_id_val, element_style_id_val, zIndex);
            } else if ($target.is('.delete_element') || $target.is('.delete_element img')) {
              element_id_val = $(this).parents('.element').data('elementid');
              $(this).parents('.element').remove();
              delete_element(element_id_val);
              return console.log("element has been deleted (not callback)");
            } else if ($target.is('.settings_element') || $target.is('.settings_element img')) {
              return element_id = $cur_element.data('elementid');
            }
          }); //$controller_div.mousedown
          
          $('#pageWrap').prepend($latest_slide_show_added);
          //resizeAll( $latest_slide_show_added.find('.slides_container') );
  
          updateControls($latest_slide_show_added , $('.prev_next', $latest_slide_show_added).val());
          $('.prev_next', $latest_slide_show_added).change(function(){
            val = $(this).val();
            updateControls($latest_slide_show_added, val);
          });  
          $('.font', $latest_slide_show_added).change(function(){
            val = $(this).val();
            $('.caption', $latest_slide_show_added).css('font-family', val);
          });  
          
          $(".slider-interval", $latest_slide_show_added).slider({
            min:500,
            max:10000,
            step:500,
            value:$('input:text[name=slide_interval]', $latest_slide_show_added).val(),
            slide: function(event, ui) {
              val = ui.value;
              $('input:text[name=slide_interval]', $latest_slide_show_added).attr("value", val);
            }
          });
          
        }, 'json');
      }, 'json');
    }, 'json');
    
  });
  
  //$('.slideshow').mouseover(function(){
  //  $(this).css('border', 'solid blue 1px');
  //});
  //$('.slideshow').mouseout(function(){
  //  $(this).css('border', 'solid transparent 1px');
  //});
  $( "#resizable" ).resizable();
  $('.caption').draggable();
  $('.slideshow-settings').draggable();
  $('.controls').draggable();
  
  $('.element.slide_show_element').find('.slideshow-settings').hide();
  //$('.element.slide_show_element').live('click', function(event) {
  //  event.stopPropagation();
  //  var $settings_panel = $(this).find('.slideshow-settings');
  //  if(!$(this).hasClass('cur_selected')) {
  //    console.log('clicked the same slideshow element : event handled');
  //    return;
  //  }
  //  $('.element.slide_show_element').find('.slideshow-settings').hide();
  //  if( $settings_panel.is(':hidden') ) {
  //    console.log('$settings_panel is hidden bec. of that it is clicked then show it');
  //    $settings_panel.show();
  //  }
  //});
  
  $('.element.slide_show_element').find('.slide a').live('click', function(event) {
    event.preventDefault();
    var $settings_panel = $(this).find('.slideshow-settings');
    if($settings_panel.is(":hidden")) {
      console.log('$settings_panel is hidden bec. of that it is clicked then show it when a is click');
      $settings_panel.show();
    }
    console.log('event preventDefault');
  });
  $('.close_slide_show_settings').live('click',function(event) {
    event.stopPropagation();
    console.log('close_slide_show_settings was clicked so close the settings panel');
    $(this).parents('.slideshow-settings').hide();
  });
  
  
  var $dialog_div_slideshow;
  
  var $dialog_div_slideshow_multi_upload;
  
  $dialog_div_slideshow_multi_upload = $('\
      <div id="fileupload" class="ui-widget" style="width: 100%">\
        <form accept-charset="UTF-8" action="/slideshow_images" class="new_slideshow_image" enctype="multipart/form-data" id="fileupload" method="post">\
          <div class="fileupload-buttonbar ui-widget-header ui-corner-top">\
            <label class="fileinput-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary" role="button" aria-disabled="false">\
              <span class="ui-button-icon-primary ui-icon ui-icon-plusthick"></span>\
              <span class="ui-button-text">\
                <span>Drag image below...</span>          \
              </span>\
              <input id="slideshow_image_image" name="slideshow_image[image]" type="file">\
            </label>\
            <input id="slideshow_image_id_id" name="slideshow_image[element_id]" type="hidden" value="123">\
          </div>\
        </form>    \
        <div class="fileupload-content ui-widget-content ui-corner-bottom">\
          <table class="files">\
            <tbody>\
            </tbody>\
          </table>\
          <div class="fileupload-progressbar ui-progressbar ui-widget ui-widget-content ui-corner-all" style="display: none; " role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\
            <div class="ui-progressbar-value ui-widget-header ui-corner-left" style="display: none; width: 0%; "></div>\
          </div>\
        </div>\
      </div>\
      ');
      
  var $dialog_div_slideShowOptions_html;
  
  $dialog_div_slideShowOptions_html = $('\
    <div class="slideShowOptionsParentDiv" style="display: block; ">\
      <p><label for="transition">Transition</label>\
        <select class="options" name="transitionx" id="transitionxDialog">\
          <option value="slideLeft">slide left</option>\
          <option value="slideRight">slide right</option>\
          <option value="slideUp">slide up</option>\
          <option value="slideDown">slide down</option>\
          <option value="fade">fade</option>\
        </select>\
        </p><p>\
          <label>Slide Interval</label>  \
          </p><div class="slider-interval">&nbsp;</div>\
          <input type="text" name="slide_interval" class="slide_interval" value="">                \
        <p></p>\
        <p><input type="checkbox" class="options" name="autoplay" id="autoplayDialog" ><label for="autoplayDialog">Autoplay</label></p>\
        <p><input type="checkbox" class="options" name="show_caption" id="show_captionDialog"><label for="show_captionDialog">Show Caption</label></p>\
        <p><input type="checkbox" class="options" name="show_pagination" id="show_paginationDialog" ><label for="show_paginationDialog">Show Pagination</label></p>\
      <p></p>\
      <p>\
        <label>Previous &amp; Next Arrow</label>\
        <select name="prev_next" class="prev_nextDialog">\
          <option value="upon_hover">Upon Hover</option>\
          <option value="always" selected="selected">Always</option>\
          <option value="never">Never</option>\
        </select>\
      </p>  \
      <p>\
        <label>Font</label>\
        <select name="font" class="fontDialog">\
          <option value="tahoma">Tahoma</option>\
          <option value="courier new">Courier New</option>\
          <option value="Gorditas">Gorditas</option>\
          <option value="Bilbo">Bilbo</option>\
          <option value="Emilys Candy">Emilys Candy</option>\
          <option value="Ribeye Marrow">Ribeye Marrow</option>\
          <option value="Henny Penny">Henny Penny</option>\
        </select>\
      </p>            \
      \
    </div>\
  ');
  $dialog_div_slideshow = $('\
      <div id="dialog" title="Page Background" style="display: none;">\
        <div class="ssPanelHorNav PanelHorNav" style="overflow:hidden;display:block;">\
          <div href="#" class="upload subPanelButton ss">Upload</div>\
          <div href="#" class="sort subPanelButton ss">Sort</div>\
          <div href="#" class="slideShowOptionsPanel subPanelButton ss">Options</div>\
        </div>\
        <div class="ssPanelHor PanelHor" style="position:relative;">\
          <div class="picturePanel" style="width: 100%;">\
            loading . . .\
          </div>\
          <div class="sortPanel">\
            loading . . .\
          </div>\
          <div class="slideShowOptions">\
            loading . . .\
          </div>\
        </div>    \
      </div>\
    ');
  $('.picturePanel', $dialog_div_slideshow).html($dialog_div_slideshow_multi_upload);
  $('.slideShowOptions', $dialog_div_slideshow).html($dialog_div_slideShowOptions_html);

  
  //delete ss_image event
  $('.delete_slide_image').live('click', function() {
    var ss_img_id_val = $(this).parents('.slide_show_image_li').find('img').data('id');
    delete_slide_show_img(ss_img_id_val);
    $(this).parents('.slide_show_image_li').remove();
    $('.slide[data-id="'+ss_img_id_val+'"]').remove();
  });
  //caption update ss_image event
  $('.caption_text_input').live('change',function() {
    var ss_img_id_val = $(this).parents('.slide_show_image_li').find('img').data('id');
    var caption_val = $(this).val();
    setCaption(ss_img_id_val, caption_val);
    $('.ss_image_caption.ss_image_caption_'+ss_img_id_val).html(caption_val);
    $('#slideshow_image_'+ss_img_id_val).attr('data-caption', caption_val);
  });
  
  
  $('.element.slide_show_element').live('dblclick',function() {
    $cur_slideshow_element = $(this)
    
    $dialog_div_slideshow.data('elementid', $(this).data('elementid'));
    
    $(this).prepend($dialog_div_slideshow);
    makeMultiUploadSlideShow('#fileupload', $dialog_div_slideshow);
    
    $(".slider-interval", $dialog_div_slideshow).slider({
      min:500,
      max:10000,
      step:500,
      value:$('input:text[name=slide_interval]', $cur_slideshow_element).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input:text[name=slide_interval]', $cur_slideshow_element).attr("value", val);
        $('input:text[name=slide_interval]', $dialog_div_slideshow).attr("value", val);
      },
      stop: function(event, ui) { 
        console.log("slider-interval change");
        val = ui.value;
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        putInterval(slideshow_attrib_id, val);
        $(".slider-interval", $cur_slideshow_element).slider( "value" , val );
        $('input:text[name=slide_interval]', $cur_slideshow_element).trigger('change');
      }
    });
    
    $('#autoplayDialog').bind('change',function() {
      console.log("autoplayDialog change");
      if($(this).attr('checked') == 'checked') {
        console.log('autoplay true');
        $('#autoplay',$cur_slideshow_element).attr('checked','checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        autoplay_val = true;
        putAutoplay(slideshow_attrib_id, autoplay_val);
        $('#autoplay',$cur_slideshow_element).trigger('change');
      } else {
        console.log('autoplay false');        
        $('#autoplay',$cur_slideshow_element).removeAttr('checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        autoplay_val = false;
        putAutoplay(slideshow_attrib_id, autoplay_val);
        $('#autoplay',$cur_slideshow_element).trigger('change');
      }
    });
    
    $('#show_captionDialog').bind('change',function() {
      console.log("show_captionDialog change");
      if($(this).attr('checked') == 'checked') {
        console.log('show_caption true')
        $('#show_caption',$cur_slideshow_element).attr('checked','checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        caption_val = true;
        putCaption(slideshow_attrib_id, caption_val);
        $('#show_caption',$cur_slideshow_element).trigger('change');
      } else {
        console.log('show_caption false');
        $('#show_caption',$cur_slideshow_element).removeAttr('checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        caption_val = false;
        putCaption(slideshow_attrib_id, caption_val);
        $('#show_caption',$cur_slideshow_element).trigger('change');
      }
    });
    
    $('#transitionxDialog').bind('change',function() {
      $('#transitionx',$cur_slideshow_element).val($(this).val());
      slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
      transition_val = $(this).val();
      putTransitionX(slideshow_attrib_id, transition_val);
      $('#transitionx',$cur_slideshow_element).trigger('change');
    });
    
    $('#prev_nextDialog').bind('change',function() {
      $('#prev_next',$cur_slideshow_element).val($(this).val());
      slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
      prev_nex_arr_val = $(this).val();
      putPrev_nex_arr(slideshow_attrib_id, prev_nex_arr_val);
      $('#prev_next',$cur_slideshow_element).trigger('change');
    });
    
    $('.fontDialog').bind('change',function() {
      $('.font',$cur_slideshow_element).val($(this).val());
      slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
      font_val = $(this).val();
      putFont(slideshow_attrib_id, font_val);
      $('.font',$cur_slideshow_element).trigger('change');
    });
    
    
    $('#show_paginationDialog').bind('change',function() {
      console.log("show_paginationDialog change");
      if($(this).attr('checked') == 'checked') {
        console.log('show_pagination true')
        $('#show_pagination',$cur_slideshow_element).attr('checked','checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        pagination_val = true;
        putPagination(slideshow_attrib_id, pagination_val);
        $('#show_pagination',$cur_slideshow_element).trigger('change');
      } else {
        console.log('show_pagination false')
        $('#show_pagination',$cur_slideshow_element).removeAttr('checked');
        slideshow_attrib_id = $cur_slideshow_element.data('slideshow-attr-id');
        pagination_val = false;
        putPagination(slideshow_attrib_id, pagination_val);
        $('#show_pagination',$cur_slideshow_element).trigger('change');
      }
    });
    
    $dialog_div_slideshow.css({
      'background': '#919191'
    });  
    $dialog_div_slideshow.dialog({
      autoOpen: false,
      width: 526,
      zIndex: 13000,
      close: function(event, ui) {
        $dialog_div_slideshow.remove();
      }
    });
    
    
    console.log('assign correct id to post');
    $('#slideshow_image_id_id', $dialog_div_slideshow).val($(this).data('elementid'));
    $dialog_div_slideshow.dialog("open");
    $(this).find('.slideshow-settings').hide();
    
    $images_list_ul = $('<ul id="slide_show_images_sort_ul" data-update-url="/slideshow_images/sort" />');
    console.log('get images for sort');
    $images = $('.slides_container img', $cur_slideshow_element);
    console.log('iterate image sort');
    $images.each(function() {
      $cur_img = $(this).clone();
      $cur_img.appendTo($images_list_ul);
    });
    //Generate images inside li
    $images_in_list = $images_list_ul.find('img');
    $images_in_list.each(function() {
    $caption = $(this).data('caption');
    $(this)
        .wrap('<li class="slide_show_image_li" id="'+$(this).attr('id')+'" />')
        .removeAttr('id')
        .attr('style', 'display: inline;')
        .addClass('gg_image_thumb')
        .width(50)
        .after('<input type="text" class="caption_text_input"  value="'+$caption+'" /><a class="delete_slide_image"><img src="/assets/images/toolbar-button-delete.png"></a>')
    });
    //Generate text input for caption
    $images_list_ul.sortable({
      axis: 'y',
      update: function() {
        $.post($(this).data('update-url'), $(this).sortable('serialize'));
      }
    });
    if($('.slides_container', $cur_slideshow_element).hasClass('default')) {
      $('.sortPanel', $dialog_div_slideshow).width('100%').html('<h2>No Image to sort.</h2>')
    } else {
      $('.sortPanel', $dialog_div_slideshow).width('100%').html($images_list_ul);
    }
      
    
    var onAfterSsPanelHor;
    
    onAfterSsPanelHor = function(curr, next, opts, fwd) {
      var $current_panel;
      $current_panel = $(this);
      $current_panel.parents('.ssPanelHor').animate({
        height: $current_panel.height()
      });
    };
    
    $('.ssPanelHor', $dialog_div_slideshow).cycle({
      fx: 'scrollHorz',
      timeout: 0,
      fit: true,
      speed: 'fast',
      after: onAfterSsPanelHor
    });
    
    $('.upload.ss', $dialog_div_slideshow).click(function() {
      $('.ssPanelHor', $dialog_div_slideshow).cycle(0);
      return false;
    });
    
    $('.sort.ss', $dialog_div_slideshow).click(function() {
      $('.ssPanelHor', $dialog_div_slideshow).cycle(1);
      return false;
    });
    $('.slideShowOptionsPanel.ss', $dialog_div_slideshow).click(function() {
      $('.ssPanelHor', $dialog_div_slideshow).cycle(2);
      //$('.slideShowOptions', $dialog_div_slideshow).parent().height( $('.slideShowOptions', $dialog_div_slideshow).height() );
      return false;
    });
    
    //$('#transitionx').live('change', function() {
    //  alert('save transition');
    //});
    
  });  
});



$(window).load(function() {
  //START: slideshow 1
  $('.slideshow').each(function() {
    $cur_slide_show = $(this);
    $cur_slide_container = $cur_slide_show.find('.slides_container');
    $cur_slide_show.draggable();
    $cur_slide_show.resizable({alsoResize: $cur_slide_container});
    
    resizeAll( $(this).find('.slides_container') );
    
    $cur_slide_show.bind({
      load: function() {
        
      },
      resize: function() {
        resizeAll($(this).find('.slides_container'));
      }
    });
    
    updateControls($cur_slide_show , $('.prev_next', $cur_slide_show).val());
    $('.prev_next', $cur_slide_show).change(function(){
      val = $(this).val();
      updateControls($cur_slide_show , val);
    });  
    $('.font', $cur_slide_show).change(function(){
      val = $(this).val();
      $('.caption', $cur_slide_show).css('font-family', val);
    });  
    
    $(".slider-interval", $cur_slide_show).slider({
      min:500,
      max:10000,
      step:500,
      value: $('input:text[name=slide_interval]', $cur_slide_show).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input:text[name=slide_interval]').attr("value", val);
      },
      stop: function(event, ui) { 
        val = ui.value;
        slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
        putInterval(slideshow_attrib_id, val);
      }
    });
    
    //$('#autoplay', $cur_slide_show).change(function() {
    //  $cur = $(this)
    //  if($cur.attr('checked') == 'checked') {
    //    $cur.removeAttr('checked')
    //    $(this).parents('.slideshow').slides({
    //      
    //    })
    //  } else {
    //    $cur.attr('checked', 'checked')
    //  }      
    //  //console.log($(this).parents('.slideshow').slides(play))
    //  //console.log($cur.val())
    //});
    //$("#slides").slides({
    //  play: 0
    //});
    
  }); //$('.slideshow').each(function() {
  //END: slideshow 1
  $('#autoplay').live('change',function() {
    if($(this).attr('checked') == 'checked') {
      console.log('autoplay true')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      autoplay_val = true;
      putAutoplay(slideshow_attrib_id, autoplay_val);
    } else {
      console.log('autoplay false')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      autoplay_val = false;
      putAutoplay(slideshow_attrib_id, autoplay_val);
    }
    resizeAll($cur_slide_container);
  });
  
  $('#show_caption').live('change',function() {
    if($(this).attr('checked') == 'checked') {
      console.log('show_caption true')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      caption_val = true;
      putCaption(slideshow_attrib_id, caption_val);
    } else {
      console.log('show_caption false')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      caption_val = false;
      putCaption(slideshow_attrib_id, caption_val);
    }
  });
  
  $('#show_pagination').live('change',function() {
    if($(this).attr('checked') == 'checked') {
      console.log('show_pagination true')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      pagination_val = true;
      putPagination(slideshow_attrib_id, pagination_val);
    } else {
      console.log('show_pagination false')
      slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
      pagination_val = false;
      putPagination(slideshow_attrib_id, pagination_val);
    }
  });
  
  $('#transitionx').live('change', function() {
    slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
    transition_val = $(this).val();
    putTransitionX(slideshow_attrib_id, transition_val);
  });
  
  $('.prev_next').live('change', function() {
    slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
    prev_nex_arr_val = $(this).val();
    putPrev_nex_arr(slideshow_attrib_id, prev_nex_arr_val);
  });
  
  $('.font').live('change', function() {
    slideshow_attrib_id = $(this).parents('.slide_show_element').data('slideshow-attr-id');
    font_val = $(this).val();
    putFont(slideshow_attrib_id, font_val);
  });
  
  
});
var putTransitionX = function(slideshow_attrib_id, transition_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { transition: transition_val } }, function(data) {
    console.log("putTransitionX done");
  }, 'json');
}
var putInterval = function(slideshow_attrib_id, interval_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { interval: interval_val } }, function(data) {
    console.log("putInterval done");
  }, 'json');
}
var putAutoplay = function(slideshow_attrib_id, autoplay_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { autoplay: autoplay_val } }, function(data) {
    console.log("putAutoplay done");
  }, 'json');
}
var putCaption = function(slideshow_attrib_id, caption_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { caption: caption_val } }, function(data) {
    console.log("putCaption done");
  }, 'json');
}
var putPagination = function(slideshow_attrib_id, pagination_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { pagination: pagination_val } }, function(data) {
    console.log("putPagination done");
  }, 'json');
}
var putPrev_nex_arr = function(slideshow_attrib_id, prev_nex_arr_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', slideshow_attrib : { prev_nex_arr: prev_nex_arr_val } }, function(data) {
    console.log("putPrev_nex_arr done");
  }, 'json');
}
var putFont = function(slideshow_attrib_id, font_val) {
  $.post("/slideshow_attribs/"+slideshow_attrib_id, { _method:'PUT', font : { prev_nex_arr: font_val } }, function(data) {
    console.log("putFont done");
  }, 'json');
}

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
    imageWidth = image.width();
    imageHeight = image.height();
    imageRatio = imageWidth / imageHeight;
    consoleHieght = winWidth / imageRatio;
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
        $(parent).find('.controls').css('display', 'block');
      });
      $(parent).mouseleave(function(){
        $(parent).find('.controls').css('display', 'none');
      });        
      break
    case 'always':
      $(parent).hover(function(){
        $(parent).find('.controls').css('display', 'block');
      });
      $(parent).mouseleave(function(){
        $(parent).find('.controls').css('display', 'block');
      });
      $(parent).find('.controls').css('display', 'block');
      break;
    case 'never':
      $(parent).hover(function(){
        $(parent).find('.controls').css('display', 'none');
      });
      $(parent).mouseleave(function(){
        $(parent).find('.controls').css('display', 'none');
      });
      $(parent).find('.controls').css('display', 'none');
      break;
  }  
}