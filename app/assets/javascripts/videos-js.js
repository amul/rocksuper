var setLeftTopPos, setWHSize, postElementContentVideo, setZindex, delete_element;

setLeftTopPos = function(element_style_id_val, left_val, top_val) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      left: left_val,
      top: top_val
    }
  }, function(data) {
    return console.log("left top pos saved");
  }, 'json');
};

setWHSize = function(element_id_val, element_style_id_val, width_val, height_val) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      element_id: element_id_val,
      width: width_val,
      height: height_val
    }
  }, function(data) {
    return console.log("width height size saved");
  }, 'json');
};

delete_element = function(element_id_val) {
  return $.post("/elements/" + element_id_val, {
    _method: 'DELETE',
    elements: {
      element_id: element_id_val
    }
  }, function(data) {
    return console.log("deleted element");
  }, 'json');
};

setZindex = function(element_id_val, element_style_id_val, zIndex) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      element_id: element_id_val,
      z_index: zIndex
    }
  }, function(data) {
    return console.log("element zindex saved");
  }, 'json');
};

postElementContentVideo = function(element_id, element_content) {
  $.post("/elements/"+element_id,
    { _method:'PUT', element : { content: element_content} }, 
    function(data) {
      console.log("video content saved");
    }, 'json');
}

$controller_div = $("<div class='controller'><a class=\"lock_element\"><img src=\"/assets/images/toolbar-button-lock.png\"></a> <a class='settings_element'><img src=\"http://superrrr.com/assets/images/toolbar-button-settings.png\" /></a>  <a class='zup'><img src='/assets/images/toolbar-button-up.png' /></a>  <a class='zdown'><img src='/assets/images/toolbar-button-down.png' /></a>  <a class='delete_element'><img src='/assets/images/toolbar-button-delete.png' /></a></div>");

var $box_settings_div;

$box_settings_div = $('      \
  <span>Color</span><br />\
  <div id="divbgColorSelector" class="selector_jq"><div style="background-color: #0000ff"></div></div>\
  \
  <div id="gradientOptionsBgdiv" style="display:none;">\
    <div id="gradientBgColor" >&nbsp;</div>\
    <select id="gradientOrientation">\
      <option value="horizontal">Horizontal</option>\
      <option value="vertical" selected="selected">Vertical</option>\
    </select>\
  </div>\
  <input type="button" value="Use Gradient" id="useGradientBgBgdiv" /><br />\
  \
  <span>Radius</span><br />        \
  <div id="slider-borderRadius" class="slider"></div>  \
  <input type="text" id="borderRadius" name="borderRadius" value="input number" /><br />\
  \
  <span>Border Color</span><br />\
  <div id="divbgColorSelectorBorder" class="selector_jq"><div style="background-color: #0000ff"></div></div>\
  \
  <span>Border Width</span><br />   \
  <div id="slider-borderWidth" class="slider"></div>  \
  <input type="text" id="borderWidth" name="borderWidth" value="input number" /><br />\
');

var $video_settings_div;

$video_settings_div = $('\
        <div>\
          <form name="settings" onsubmit="return false" method="post" class="">\
            <p>\
              <label for="vid-url">Video URL</label>\
              <input type="text" name="vid-url" id="vid-url" class="textinput" value="" />\
            </p>\
            <p style="padding:3px 0 0; clear:both">\
              <input class="change-url" type="submit" value="Update" class="on" />      \
            <p>\
              <label for="control-bar">Control Bar</label>\
              <select name="control-bar" id="control-bar">\
                <option value="0">Show</option>\
                <option value="1">Hide</option>\
                <option value="2">Auto Hide</option>\
              </select>\
            </p>\
            <p>\
              <input type="checkbox" name="auto-play"><label for="" class="cbinline">Autoplay</label>\
            </p>\
            <p>\
              <input type="checkbox" name="loop"><label for="" class="cbinline">Loop</label>\
            </p>      \
            <p>\
              <input type="checkbox" name="show-title-bar"><label for="" class="cbinline">Show Title Bar</label>\
            </p>      \
            <p>\
              <input type="checkbox" name="light-control-bar"><label for="" class="cbinline">Light Control Bar</label>\
            </p>\
          </form>    \
        </div>\
');

var $dialog_div_video;

$dialog_div_video = $('\
    <div id="dialog_video" title="Video Element">\
      <div class="vidPanelHorNav PanelHorNav" style="overflow:hidden;display:block;">\
        <div href="#" class="vid_settings subPanelButton vid" style="width:100px">Video Settings</div>\
        <div href="#" class="box_settings subPanelButton vid" style="width:100px">Box Settings</div>\
      </div>\
      <div class="vidPanelHor PanelHor" style="position:relative;">\
        <div class="vidSettingsPanel">\
          loading . . .\
        </div>\
        <div class="boxSettingsPanel">\
          loading . . .\
        </div>\
      </div>\
    </div>\
  ');
$('.vidSettingsPanel', $dialog_div_video).html($video_settings_div);
$('.boxSettingsPanel', $dialog_div_video).html($box_settings_div);

$(function() {
  //var frames = document.getElementsByTagName("iframe");
  //for (var i = 0; i < frames.length; i++) {
  //  src = frames[i].src;
  //  if(src.indexOf('embed') != -1) {
  //    if(src.indexOf('?') != -1) {
  //      frames[i].src += "&wmode=transparent";
  //    }else{
  //      frames[i].src += "?wmode=transparent";
  //    }
  //  }
  //}

  var isSelectElement = false;
  deactiveSelectElement = function() {
    isSelectElement = false;
    console.log('[videos-js.js] deactiveSelectElement');
    $('.element').removeClass('cur_selected');
    $('.element').find('.controller').remove();
    console.log('[videos-js.js] disable drag and resize for elements then');
    $('.element').draggable( "disable" ).resizable( "disable" );
  }
  activeSelectElement = function(element) { 
    console.log("set isSelectElement = true");
    isSelectElement = true;
    console.log('[videos-js.js] enable drag and resize');
    $cur_video_block.draggable( "enable" ).resizable( "enable" );
    $(element)
      .addClass('cur_selected')
      .resizable('enable')
      .draggable('[videos-js.js] enable'); 
      
    console.log("$cur_video_block.find('.controller').length " + $(element).find('.controller').length);
    
    if ($(element).find('.controller').length < 1) {
      console.log("add class cur_selected and append controller div");
      $(element).addClass('cur_selected').append($controller_div);
      
      $controller_div.mousedown(function(event) {
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
          $cur_element.trigger('dblclick');
          //return element_id = $cur_element.data('elementid');
        }
      }); //$controller_div.mousedown
      
    }            
      
    if( $('.video_holder_evt',$(element)).length < 0 ) {
      $(element).append('<div class="video_holder_evt" style="width: 100%;height: 100%; z-index: 100; position: absolute" />');
    }      
  }
  
  $('.settings-video.videoPanel').css({
    zIndex: 110000
  });
  $('.settings-video.videoPanel').draggable({
   containment: $('#pageWrap')
  });
  $('.settings-video.videoPanel').hide();
  
  var genVideoElemHtml = function(element_id, element_style_id, vw, vh) {
    $html = $('
        <div id="element_'+element_id+'" class="resizable element video ui-widget-content" style="background:gray;width:'+vw+'px;height:'+vh+'px;" data-elementid="'+element_id+'" data-elementstyleid="'+element_style_id+'" >
        <object width="'+vw+'" height="'+vh+'" data="http://www.youtube.com/v/Ahg6qcgoay4" type="application/x-shockwave-flash" >
  				<param NAME="wmode" VALUE="transparent" />
  				<param name="src" value="http://www.youtube.com/v/Ahg6qcgoay4" />
  			</object>
  			<div class="cover" style="width:'+vw+'px;height:'+vh+'px;"></div>
        </div>        
    ');
    return $html
  }
  $('#add_elem_video').click(function() {
    
    $.post("/elements", { _method:'POST', element : {page_id: $('#add_elem_paragraph').data('pageid'), elem_type: 'video', content: 'http://www.youtube.com/v/Ahg6qcgoay4'} }, function(data) {
      $.post("/element_styles", { _method:'POST', element_style : {element_id: data.element.id, width: 425, height: 250} }, function(data) {
        var element_id, element_style_id, vw, vh, $gen_html;
        element_id = data.element_style.element_id;
        element_style_id = data.element_style.id;
        vw = data.element_style.width;
        vh = data.element_style.height;        
        $gen_html = genVideoElemHtml(element_id, element_style_id, vw, vh);
        $gen_html.prepend($controller_div);
        $('#pageWrap').prepend($gen_html);
        console.log($gen_html);
        
        $gen_html.resizable({
          handles: "n, e, s, w, ne, nw, se, sw",
          disabled: true,
          create: function(event, ui) {
            return $(this).resizable("disable");
          },
          start: function(event, ui) {},
          resize: function(event, ui) {},
          stop: function(event, ui) {
            var element_id_val, element_style_id_val, height_val, width_val;
            element_id_val = $(this).data('elementid');
            element_style_id_val = $(this).data('elementstyleid');
            width_val = ui.size.width;
            height_val = ui.size.height;
            return setWHSize(element_id_val, element_style_id_val, width_val, height_val);
          }
        }).draggable({
          handle: '.cover',
          disabled: true,
          create: function(event, ui) {
            return $(this).draggable("disable");
          },
          start: function(event, ui) {},
          drag: function(event, ui) {},
          stop: function(event, ui) {
            var element_id_val, element_style_id_val, left_val, top_val;
            element_id_val = $(this).data('elementid');
            element_style_id_val = $(this).data('elementstyleid');
            left_val = ui.position.left;
            top_val = ui.position.top;
            return setLeftTopPos(element_style_id_val, left_val, top_val);
          }
        });
        $('.cover',$gen_html).css('z-index', 1000);
        $gen_html.draggable( "enable" ).resizable( "enable" );        
        
      }, 'json');
    }, 'json');

  });
  
  console.log("set event handler for the close(x)");
  $('.close_panel.settingsVideoPanel').bind("click", function(event) {
    $('.settings-video').hide();
  });

  
	function resizeAll(element){
	  console.log("resizeAll");
		w = element.css('width');
		h = element.css('height');

		$('object', element).attr('width', w);
		$('object', element).attr('height', h);
		
		$('embed', element).attr('width', w);
		$('embed', element).attr('height', h);
		
		$('.cover', element).css('width', w);
		$('.cover', element).css('height', h);		
	}
  
	var genVideoSettingsElemHtml = function(element_id, textinput, vw, vh) {
    $html = $('
      	<div class="settings-video element videoPanel videoPanel_'+element_id+'" >
      	  <span class="close_panel settingsVideoPanel">&nbsp;</span>
      		<form name="settings" onsubmit="return false" method="post" class="">
      			<p>
      				<label for="vid-url">Video URL</label>
      				<input type="text" name="vid-url" id="vid-url" class="textinput" value="http://www.youtube.com/v/Ahg6qcgoay4" />
      			</p>
      			<p style="padding:3px 0 0; clear:both">
      				<input id="change-url" type="submit" value="Update" class="on" />			
      			<p>
      				<label for="control-bar">Control Bar</label>
      				<select name="control-bar" id="control-bar">
      					<option value="0">Show</option>
      					<option value="1">Hide</option>
      					<option value="2">Auto Hide</option>
      				</select>
      			</p>
      			<p>
      				<input type="checkbox" name="auto-play"><label for="" class="cbinline">Autoplay</label>
      			</p>
      			<p>
      				<input type="checkbox" name="loop"><label for="" class="cbinline">Loop</label>
      			</p>			
      			<p>
      				<input type="checkbox" name="show-title-bar"><label for="" class="cbinline">Show Title Bar</label>
      			</p>			
      			<p>
      				<input type="checkbox" name="light-control-bar"><label for="" class="cbinline">Light Control Bar</label>
      			</p>
      			<p>
      				<button id="dragtoggle" class="off">Drag</button>
      			</p>
      
      		</form>		
      	</div>	  
      ');
    return $html;
	}
	
  var $video_blocks = $('.element.video');
  $video_blocks.each(function() {
    $cur_video_block = $(this);
    vidurl = $('object', $cur_video_block).attr('data');
    $curr_video_panel = $('.videoPanel_'+$cur_video_block.data('elementid'));
    
  });
  
  $('#pageWrap').live('click', function(event) {
    $target = $(event.target);
    if($target.is('#pageWrap')) {
      deactiveSelectElement();
    }    
  });
  
  $('.element.video').live("dblclick",function() {
    $cur_vid_elem = $(this);
    
    $cur_vid_elem.append($dialog_div_video);    
    $dialog_div_video.dialog({
      autoOpen: false,
      zIndex: 13000,
      open: function(event, ui) {
        var onAfterVidPanelHor;
        
        onAfterVidPanelHor = function(curr, next, opts, fwd) {
          var $current_panel;
          $current_panel = $(this);
          $current_panel.parents('.vidPanelHor').animate({
            height: $current_panel.height()
          });
        };
        
        $('.vidPanelHor', $dialog_div_video).cycle({
          fx: 'scrollHorz',
          timeout: 0,
          fit: true,
          speed: 'fast',
          after: onAfterVidPanelHor
        });
        
        $('.vid_settings.vid', $dialog_div_video).click(function() {
          $('.vidPanelHor', $dialog_div_video).cycle(0);
          return false;
        });
        
        $('.box_settings.vid', $dialog_div_video).click(function() {
          $('.vidPanelHor', $dialog_div_video).cycle(1);
          return false;
        });
      },
      drag: function(event, ui) {
        $dialog_div_video.css({
          'zIndex': 100005
        });
      },
      close: function(event, ui) {
        $dialog_div_video.remove();
      }
    });
    
    $dialog_div_video.dialog('open');
    
  });
  
  $('.video .settings_element').live('click', function() {
    $(this).parents('.element').trigger('dblclick');
  });
  
  var $cur_video_block, $cur_video_block_panel;
  $('.element.video').live("mousedown",function() {
    
    $cur_video_block = $(this);
    $cur_video_block_panel = $('.videoPanel');
    
    if (!$cur_video_block.hasClass('cur_selected')) {
      activeSelectElement($cur_video_block);
    }
    
    if( $('.settings-video').is(':hidden') ) {
      $('.settings-video').css({
        'position': 'fixed',
        'top': '20px',
        'right': '30px'
      });
      $('.settings-video').show();
    }
    
    $cur_video_block_panel.removeAttr( 'data-elementid' );
    $cur_video_block_panel.attr( 'data-elementid', $cur_video_block.data('elementid') );
    
    vidurl = $('object', $cur_video_block).attr('data'); 
    $cur_video_block_panel.find('#vid-url').val(vidurl);
    
    console.log('current video block' + $cur_video_block);
    element_id = $cur_video_block.data('elementid');    
    genSettingsVideoPanel = genVideoSettingsElemHtml(element_id);
    
    //if(isSelectElement==false) {
    //  isSelectElement = true;      
    //  console.log("set the #pageWrap event on --=val= "+isSelectElement);
    //  console.log("!$cur_video_block.hasClass('cur_selected') "+!$cur_video_block.hasClass('cur_selected'));
    //}
         
  });
  
  $('.change-url', $dialog_div_video).bind('click',function() {
    
  });
  
	$('.change-url').bind('click', function(){
	  $curr_video_panel = $(this).parents('.videoPanel');
	  $cur_video_block_id = $cur_video_block.data('elementid');
	  console.log($cur_video_block_id);
	  console.log($cur_video_block);
	  console.log($curr_video_panel);
	  
		vidurl = $('input[name=vid-url]', $curr_video_panel).val();
		vidurl = vidurl.replace('watch?v=', 'v/');
		$('object', $cur_video_block).attr('data', vidurl);
		$('param[name=src]', $cur_video_block).attr('value', vidurl);
		
	  element_id = $cur_video_block_id;
	  element_content = vidurl;
	  postElementContentVideo(element_id, element_content);
	  console.log("posted dynamic : "+element_id);
		
	});
	$('.element.video').live('resize', function(event,ui) {
	  resizeAll($cur_video_block);
	});
	
	$('input[name=show-title-bar]').click(function(){
		updateShowInfo($(this), $cur_video_block_panel, $cur_video_block);
	});	

	function updateShowInfo(element, cur_video_panel, cur_video_block){
	  cur_video_block_id = cur_video_block.data('elementid');
	  
	  console.log("updateShowInfo");
	  console.log(cur_video_panel);
	  console.log( cur_video_block);
	  console.log( $('object', cur_video_block).attr('data') );
		vidurl = $('object', cur_video_block).attr('data');
		
		if(element.attr('checked') == "checked"){
			vidurl = removeAttribute(vidurl, 'showinfo=0');
			vidurl = addAttribute(vidurl, 'showinfo=1');
		}
		else{
			vidurl = removeAttribute(vidurl, 'showinfo=1');
			vidurl = addAttribute(vidurl, 'showinfo=0');
		}

		$('object', cur_video_block).attr('data', vidurl);
		$('param[name=src]', cur_video_panel).attr('value', vidurl);	
		
	  element_id = cur_video_block_id;
	  element_content = vidurl;
	  postElementContentVideo(element_id, element_content);
	  console.log("posted dynamic : "+element_id);
	}
	
	$('input[name=loop]').click(function(){
		updateLoop($(this), $cur_video_block_panel, $cur_video_block);
	});
	
	function updateLoop(element, cur_video_panel, cur_video_block){
	  console.log("updateLoop");
	  console.log(cur_video_panel);
	  console.log(cur_video_block);
		vidurl = $('object', cur_video_block).attr('data');
		if(element.attr('checked') == "checked"){
			vidurl = removeAttribute(vidurl, 'loop=0');
			vidurl = addAttribute(vidurl, 'loop=1');
		}
		else{
			vidurl = removeAttribute(vidurl, 'loop=1');
			vidurl = addAttribute(vidurl, 'loop=0');
		}
		$('object', cur_video_block).attr('data', vidurl);
		$('param[name=src]', cur_video_panel).attr('value', vidurl);		
	}
	
  $('input[name=auto-play]').click(function(){
    updateAutoPlay($(this), $cur_video_block_panel, $cur_video_block);
  });	
  
	function updateAutoPlay(element, cur_video_panel, cur_video_block){
	  console.log("updateAutoPlay");
	  console.log(cur_video_panel);
	  console.log(cur_video_block);
		vidurl = $('object', $(cur_video_block)).attr('data');
		
		if(element.attr('checked') == "checked"){
			vidurl = removeAttribute(vidurl, 'autoplay=0');
			vidurl = addAttribute(vidurl, 'autoplay=1');
		}
		else{
			vidurl = removeAttribute(vidurl, 'autoplay=1');
			vidurl = addAttribute(vidurl, 'autoplay=0');
		}
		$('object', $(cur_video_block)).attr('data', vidurl);
		$('param[name=src]', $(cur_video_panel)).attr('value', vidurl);			
	}
	
	$('input[name=light-control-bar]').click(function(){	  
		updateLightControl($(this), $cur_video_block_panel, $cur_video_block)	;
	});	
	
	
	function updateLightControl(element, videoPanel, videoElemBlock){
	  cur_video_block_id = videoElemBlock.data('elementid');
	  
	  console.log("updateLightControl");
		vidurl = $('object', videoElemBlock).attr('data');
		
		if(element.attr('checked') == "checked"){
			vidurl = removeAttribute(vidurl, 'theme=dark');
			vidurl = addAttribute(vidurl, 'theme=light');
		}
		else{
			vidurl = removeAttribute(vidurl, 'theme=light');
			vidurl = addAttribute(vidurl, 'theme=dark');
		}
		$('object', videoElemBlock).attr('data', vidurl);
		$('param[name=src]', videoPanel).attr('value', vidurl);		
		
	  element_id = cur_video_block_id;
	  element_content = vidurl;
	  postElementContentVideo(element_id, element_content);
	  console.log("posted dynamic : "+element_id);
	}
	
	
	$('select[name=control-bar]').change(function(){
		//alert('chnaged');
		updateControlBar($(this));
	});
	
	function updateControlBar(element){
	  console.log("updateControlBar");
		val = element.val();
		$videoPanel = $(element).parents('.videoPanel');
		$videoElement = $('#element_'+$videoPanel.data('elementid'));
		
		console.log($videoElement);
		
		vidurl = $('object',$videoElement).attr('data');
		vidurl = removeAttribute(vidurl, 'autohide=0');
		vidurl = removeAttribute(vidurl, 'autohide=1');
		vidurl = removeAttribute(vidurl, 'autohide=2');
		
		vidurl = addAttribute(vidurl, 'autohide='+val);
		
		$('object', $videoElement).attr('data', vidurl);
		$('param[name=src]', $videoPanel).attr('value', vidurl);		
		
		console.log($('object', $videoElement));
		console.log($('param[name=src]', $videoPanel));
	}
	
	
	
	function removeAttribute(vidurl, att){
	  console.log("removeAttribute");
		if(vidurl.indexOf('&'+att)>=0){
			vidurl = vidurl.replace('&'+att, "");
		}
		else if(vidurl.indexOf(att)>=0){
			vidurl = vidurl.replace(att, "");
		}
		//alert('after removing ... '+vidurl);
		return vidurl;
	}
	
	function addAttribute(vidurl, att){
	  console.log("addAttribute");
		if(vidurl.indexOf('?')>=0){
			vidurl = vidurl+"&"+att;
		}
		else{
			vidurl = vidurl+"?"+att;
		}	
		return vidurl;
	}
	

	function getPX(element, attr){
	  console.log("getPX");
		return parseInt((element.css(attr)).split("px"));
	}
	
	$('#dragtoggle').click(function(){
		updateToggleDrag($(this));
	});
	
	function updateToggleDrag(element){
	  console.log("updateToggleDrag");
		_class = element.attr('class');
		if(_class == 'on'){
			$('object').css('z-index', 900);
			$('.cover').css('z-index', 1000);
			element.removeAttr('class');
			element.attr('class', 'off');
			$( "#resizable" ).draggable({disabled:false});
		}
		else{
			$('object').css('z-index', 1000);
			$('.cover').css('z-index', 900);
			element.removeAttr('class');
			element.attr('class', 'on');		
			$( "#resizable" ).draggable({disabled:true});
			$( "#resizable" ).css('opacity', '1');	
		}	
	}
  	
  	
  
});