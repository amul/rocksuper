var setLeftTopPos, setWHSize, setZindex, delete_slide_show_img, setCaption, $gallery_html, putGalleryGridRow, putGalleryGridCol, putGalleryGridMargin;

$gallery_html = $('\
  <div id="element_967" class="element gallery_grid_element new_element" data-gallery-grid-attr-id="to_be_fill_by_gallery_attrib" data-elementid="967" data-elementstyleid="853" data-pageid="177" data-locked="false">\
    <div class="gallery_grid content" class="ui-widget-content">\
      <div style="background:red" class="imgdiv"><img class="img1 image" src="/assets/images/default_images/avacados.jpg" /></div>\
      <div style="background:green" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/ballons.jpg"/></div>\
      <div style="background:yellow" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/candle.jpg"/></div>\
      <div style="background:blue" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/eggs.jpg"/></div>\
      <div style="background:orange" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/macari.jpg"/></div>\
      <div style="background:brown" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/masonary.jpg"/></div>\
      <div style="background:pink" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/okra.jpg"/></div>\
      <div style="background:pink" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/planes.jpg"/></div>\
      <div style="background:pink" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/standard.jpg"/></div>\
      <div style="background:pink" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/tomatos.jpg"/></div>\
      <div style="background:pink" class="imgdiv"><img class="img2 image" src="/assets/images/default_images/wine.jpg"/></div>\
    </div>\
    <div class="settings galerry_settings" style="position:absolute; visibility:hidden;">\
      <a class="close_gallery_grid_settings"><img src="/assets/images/toolbar-button-delete.png"></a>\
      <form name="settings" onsubmit="return false" method="post" class="gallery_edit_attrib">\
        <p style="padding: 0;">\
          <label for="scaling">Scaling</label>\
          <select name="scaling" id="scaling">\
            <option>Crop</option>\
          </select>\
        </p>\
        <p>\
          <label for="cols">Columns</label>\
          <div id="slider-cols" class="slider"></div>      \
          <input type="text" name="cols" class="textinput cols" value="3"  />\
        </p>\
        <p>\
          <label for="rows">Rows</label>\
          <div id="slider-rows" class="slider"></div>      \
          <input type="text" name="rows" value="2" class="textinput rows" />\
        </p>\
        <p>\
          <label for="margin">Margin</label>\
          <div id="slider-margin" class="slider"></div>      \
          <input type="text" name="margin" value="0" class="textinput margin" />\
        </p>\
        <input type="hidden" name="expandmode" value="on" />\
        <input id="submit" type="submit" value="Update" />\
      </form>\
    </div>\
  </div>\
  ');
  
putGalleryGridRow = function(gallery_attrib_id, row_val) {
  return $.post("/gallery_attribs/" + gallery_attrib_id, {
    _method: 'PUT',
    gallery_attrib: {
      row: row_val
    }
  }, function(data) {
    return console.log("putGalleryGridRow saved gallery.js");
  }, 'json');
}

putGalleryGridCol = function(gallery_attrib_id, col_val) {
  return $.post("/gallery_attribs/" + gallery_attrib_id, {
    _method: 'PUT',
    gallery_attrib: {
      col: col_val
    }
  }, function(data) {
    return console.log("putGalleryGridCol saved gallery.js");
  }, 'json');
}

putGalleryGridMargin = function(gallery_attrib_id, margin_val) {
  return $.post("/gallery_attribs/" + gallery_attrib_id, {
    _method: 'PUT',
    gallery_attrib: {
      margin: margin_val
    }
  }, function(data) {
    return console.log("putGalleryGridMargin saved gallery.js");
  }, 'json');
}

setLeftTopPos = function(element_style_id_val, left_val, top_val) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      left: left_val,
      top: top_val
    }
  }, function(data) {
    return console.log("left top pos saved gallery.js");
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
    return console.log("width height size saved gallery.js");
  }, 'json');
}

setCaption = function(ss_img_id_val, caption_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      caption: caption_val
    }
  }, function(data) {
    return console.log("caption ss_image saved gallery.js");
  }, 'json');
}
setDescriptionForPicture = function(ss_img_id_val, description_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      description: description_val
    }
  }, function(data) {
    return console.log("description ss_image saved gallery.js");
  }, 'json');
}
setLinkTextForPicture = function(ss_img_id_val, link_text_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      link_text: link_text_val
    }
  }, function(data) {
    return console.log("setLinkTextForPicture ss_image saved gallery.js");
  }, 'json');
}
setLinkTypeForPicture = function(ss_img_id_val, link_type_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      link_type: link_type_val
    }
  }, function(data) {
    return console.log("setLinkTypeForPicture saved gallery.js");
  }, 'json');
}
setLinkTargetForPicture = function(ss_img_id_val, link_target_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'PUT',
    slideshow_image: {
      link_target: link_target_val
    }
  }, function(data) {
    return console.log("setLinkTargetForPicture saved gallery.js");
  }, 'json');
}

delete_slide_show_img = function(ss_img_id_val) {
  return $.post("/slideshow_images/" + ss_img_id_val, {
    _method: 'DELETE',
    slideshow_images: {
      id: ss_img_id_val
    }
  }, function(data) {
    return console.log("deleted slide_show_image gallery.js");
  }, 'json');
}

setZindex = function(element_style_id_val, zIndex) {
  return $.post("/element_styles/" + element_style_id_val, {
    _method: 'PUT',
    element_style: {
      z_index: zIndex
    }
  }, function(data) {
    return console.log("element zindex saved gallery.js");
  }, 'json');
}

$(document).ready(function() {
  //preload images before loading as gallery
  images_srcs = [];
  $galleries = $('img', $('.element.gallery_grid_element .gallery_grid.content')).each(function() {
    images_srcs = $(this).attr('src');
  });
  $(images_srcs).each(function() {
  	var image = $('<img />').attr('src', this);
  });
  
  var isSelectElement = false;
  deactiveSelectElement = function() {
    isSelectElement = false;
    console.log('[gallery.js] deactiveSelectElement');
    $('.element').removeClass('cur_selected');
    $('.element').find('.controller').remove();
    console.log('[gallery.js] disable drag and resize for elements then');
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
  }
  
  function group(cur_gallery_parent){
    rows = $('input[name=rows]',$(cur_gallery_parent)).val();
    columns = $('input[name=cols]',$(cur_gallery_parent)).val();  
    //rows = 4;
    //columns = 4;
    if(rows == "" || rows <= 0 || columns == "" || columns <= 0) return;
    var c = $('.gallery_grid',$(cur_gallery_parent)).children();
    for (var i = 0 ; i < c.length ; i+=columns) {
      c.slice(i,i+columns).wrapAll('<div class="row"></div>');
    }  
  }
  
  function clearRow(cur_gallery_parent){
    $(".imgdiv",$(cur_gallery_parent)).each(function() {
      parent = $(this).parent().attr("class");
      if(parent == "row"){
        $(this).unwrap();
      }
    });    
  }updateComponent
  
  function updateComponent(cur_gallery_parent){
    if($('input:hidden[name=expandmode]', $(cur_gallery_parent)).attr('value') == "on") {
      is_expand = true;
    } else {
      is_expand = false;
    }
    
    if(is_expand){
      updateExpand($(cur_gallery_parent));
    }
    else{
      updateNoExpand($(cur_gallery_parent));
    }  
  }
  
  function updateExpand(cur_gallery_parent){
    rows = $('input:input[name=rows]',$(cur_gallery_parent)).val();
    cols = $('input:input[name=cols]',$(cur_gallery_parent)).val();
    clearRow($(cur_gallery_parent),true);
    group($(cur_gallery_parent),true);
    resizeAll($(cur_gallery_parent),true);
    
    var margin = parseInt($(".margin",$(cur_gallery_parent)).val());
    var cur_image_width = $(".imgdiv",$(cur_gallery_parent)).css("width").split("px");    
    var cur_image_height = $(".imgdiv",$(cur_gallery_parent)).css("height").split("px");
    var cur_image_rpadding = $(".imgdiv",$(cur_gallery_parent)).css("padding-right").split("px");  
    var cur_image_bpadding = $(".imgdiv",$(cur_gallery_parent)).css("padding-bottom").split("px");
    w = parseInt(cur_image_width[0])+parseInt(cur_image_rpadding[0]);
    h = parseInt(cur_image_height[0])+parseInt(cur_image_bpadding[0]);
    $(".imgdiv",$(cur_gallery_parent)).css("margin-bottom", margin+"px"); //.css("height", h-(margin));
    $(".imgdiv",$(cur_gallery_parent)).css("margin-right", margin+"px"); //.css("width", w-(margin));
    return false;
  }

  function updateNoExpand(cur_gallery_parent){    
    rows = $('input:input[name=rows]',$(cur_gallery_parent)).val();
    cols = $('input:input[name=cols]',$(cur_gallery_parent)).val();
    clearRow($(cur_gallery_parent));    
    group($(cur_gallery_parent));
    resizeAll($(cur_gallery_parent));
    
    var margin = parseInt($(".margin",$(cur_gallery_parent)).val());
    var cur_image_width = $(".imgdiv",$(cur_gallery_parent)).css("width").split("px");    
    var cur_image_height = $(".imgdiv",$(cur_gallery_parent)).css("height").split("px");
    var cur_image_rpadding = $(".imgdiv",$(cur_gallery_parent)).css("padding-right").split("px");  
    var cur_image_bpadding = $(".imgdiv",$(cur_gallery_parent)).css("padding-bottom").split("px");
    w = parseInt(cur_image_width[0])+parseInt(cur_image_rpadding[0]);
    h = parseInt(cur_image_height[0])+parseInt(cur_image_bpadding[0]);
    $(".imgdiv",$(cur_gallery_parent)).css("margin-bottom", margin+"px"); //.css("height", h-(margin));
    $(".imgdiv",$(cur_gallery_parent)).css("margin-right", margin+"px"); //.css("width", w-(margin));
    return false;
  }
  
  var makeDragResizeDefault = function(element) {
    $(element).resizable({
      alsoResize: $('.content', this),
      handles: "n, e, s, w, ne, nw, se, sw",
      disabled: true,
      create: function(event, ui) {
        //return $(this).resizable("disable");
      },
      start: function(event, ui) {},
      resize: function(event, ui) {
        $('.content', this).height(ui.size.height);
        $('.content', this).width(ui.size.width);
        resizeAll(element);
      },
      stop: function(event, ui) {
        var element_id_val, element_style_id_val, height_val, width_val;
        element_id_val = $(this).data('elementid');
        element_style_id_val = $(this).data('elementstyleid');
        width_val = ui.size.width;
        height_val = ui.size.height;
        return setWHSize(element_style_id_val, width_val, height_val);
      }
    }).draggable({
      handle: $(this).find('.gallery_grid'),
      disabled: true,
      create: function(event, ui) {
        //return $(this).draggable("disable");
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
  }
  
  var makeMultiUpload = function(element) {
    
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
  
  var $div_gallery_grid_multi_upload, $dialog_div_gallery_grid, $controller_div, $settings_gallery_div;

  $controller_div = $("
    <div class='controller'>\
      <a class='lock_element'><img src='/assets/images/toolbar-button-lock.png' /></a>\
      <a class='settings_element'><img src='/assets/images/toolbar-button-settings.png' /></a>\
      <a class='zup'><img src='/assets/images/toolbar-button-up.png' /></a>\
      <a class='zdown'><img src='/assets/images/toolbar-button-down.png' /></a>\
      <a class='delete_element'><img src='/assets/images/toolbar-button-delete.png' /></a>\
    </div>\
  ");
  
  var $setinfo_dialog;
      
  $setinfo_dialog = $('\
      <div class="dialog_gallery_setinfo" title="Set Info" id="set_info_id" style="position:relative; left: 0; top: 0; padding: 10px; width: 100%;">\
        <div class="content">        \
          <div class="group">\
            <div class="group-inner">\
              <div class="instruction instructions-link" style="margin-bottom: 15px; display: none; ">\
                <div class="maintitle">Choose link type and destination</div>\
              </div>\
              <div class="instruction instructions-info" style="margin-bottom: 15px; ">\
                <div class="maintitle">Choose a title, description and link for this element</div>\
              </div>\
              <div class="kvp info-only" style="">\
                <div class="key">Title:</div><div class="val">\
                <input type="text" value="" class="mainTitle wide"></div>\
              </div>\
              <div class="kvp info-only" style="">\
                <div class="key">Description:</div><div class="val">\
                <textarea rows="4" class="description wide"></textarea></div>\
              </div>\
              <div class="kvp">\
                <div class="key">Link type:</div><div class="val">\
                  <select class="link-type wide">\
                    <option class="none" value="none" selected="selected">None</option>\
                    <option class="website" value="website">External Website</option>\
                    <option class="page" value="page">Internal Page</option>\
                    <option class="anc" value="anc">Scroll to Element</option>\
                    <option class="email" value="email">E-mail</option>\
                  </select>\
                </div>              \
              </div>\
              <div class="kvp link-val-container none" style="display: block; ">\
                \
              </div>\
              <div class="kvp link-val-container website" style="display: none; ">\
                <div class="key">URL:</div><div class="val">\
                <input class="website-val wide" type="text" value=""></div>\
              </div>\
              <div class="kvp link-val-container website" style="display: none; ">\
                <div class="key">Open in:</div><div class="val">\
                  <select class="target wide">\
                    <option class="self" value="_top">The Same Window</option>\
                    <option class="blank" value="_blank">A New Window</option>\
                  </select>\
                </div>\
              </div>\
              <div class="kvp link-val-container email" style="display: none; ">\
                <div class="key">E-mail:</div><div class="val">\
                  <input class="email-val wide" type="text" value=""></div>\
                </div>\
              <div class="kvp link-val-container page" style="display: none; ">\
                <div class="key">Page:</div><div class="val">\
                  <select class="page-val wide"><option value="543F5A8AD02D4ACEBEF62A6446396F93">Page 1</option><option value="A4F5FEE3B4134517A5DF041BA59F8F94">Page 2</option><option value="29A41FE07299439A82C8FA2DA199C916">Page 3</option></select>\
                </div>\
              </div>\
              <div class="kvp link-val-container anc" style="display: none; ">\
                <div class="key">To Anchor:</div><div class="val">\
                  <input class="anc-val wide" type="text" value=""></div>\
              </div>\
              \
              <!-- <div class="kvp">\
                <div class="key" style="width:420px"><input type="checkbox" class="like checkbox"></input> show a facebook Like button</div>\
              </div>\
               -->\
              \
            </div>\
          </div>        \
        </div>\
      </div>\
    ');
  
  $settings_gallery_div = $('\
    <div class="gallery_settings_div" id="settings_div_id" style="position:relative; left: 0; top: 0; padding: 10px; width: 100%;">\
      <form name="settings" onsubmit="return false" method="post" class="settings_form">\
        <p>\
          <label for="cols">Columns</label>\
            <div class="slider slider-cols"></div>      \
            <input type="number" name="cols" class="textinput cols" value="<%= gallery_attribute.col %>"  />\
        </p>\
        <p>\
          <label for="rows">Rows</label>\
          <div class="slider slider-rows"></div>      \
          <input type="number" name="rows" value="<%= gallery_attribute.row %>" class="textinput rows" />\
        </p>\
        <p>\
          <label for="margin">Margin</label>\
          <div class="slider slider-margin"></div>      \
          <input type="number" name="margin" value="<%= gallery_attribute.margin %>" class="textinput margin" />\
        </p>\
        <input type="hidden" name="expandmode" value="on" />\
      </form>\
    </div>\
  ');
  
  $div_gallery_grid_multi_upload = $('\
    <div id="fileupload" class="ui-widget">\
      <form accept-charset="UTF-8" action="/slideshow_images" class="new_slideshow_image" enctype="multipart/form-data" id="new_slideshow_image" method="post">\
        <div class="fileupload-buttonbar ui-widget-header ui-corner-top">\
          <label class="fileinput-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary" role="button" aria-disabled="false">\
            <span class="ui-button-icon-primary ui-icon ui-icon-plusthick"></span>\
            <span class="ui-button-text">\
              <span>Five megabytes png/gif/jpg...</span>            \
            </span>
            <input id="slideshow_image_image" name="slideshow_image[image]" type="file">\
          </label>\
          <input id="slideshow_image_element_id" name="slideshow_image[element_id]" type="hidden" >\
        </div>\
      </form>\
      <div class="fileupload-content ui-widget-content ui-corner-bottom">\
        <table class="files"><tbody></tbody></table>\
        <div class="fileupload-progressbar ui-progressbar ui-widget ui-widget-content ui-corner-all" style="display: none; " role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\
          <div class="ui-progressbar-value ui-widget-header ui-corner-left" style="display: none; width: 0%; "></div>\
        </div>\
      </div>\
    </div>\
      ');
      
  $dialog_div_gallery_grid = $('\
      <div id="dialog_gallery" title="Gallery Settings" style="display: none;">\
        <div class="ssPanelHorNav PanelHorNav" style="overflow:hidden;display:block;">\
          <div href="#" class="upload subPanelButton gg ss">Upload</div>\
          <div href="#" class="sort subPanelButton gg ss">Sort</div>\
          <div href="#" class="grid_settings subPanelButton gg ss">Grid Settings</div>\
        </div>\
        <div class="ggPanelHor ssPanelHor PanelHor" style="position:relative;">\
          <div class="picturePanel" style="width: 100%;">\
            loading . . .\
          </div>\
          <div class="sortPanel">\
            loading . . .\
          </div>\
          <div class="gridSettingsPanel">\
            loading . . .\
          </div>\
        </div>\
      </div>\
    ');        
    $('.picturePanel', $dialog_div_gallery_grid).html($div_gallery_grid_multi_upload);
    $('.gridSettingsPanel', $dialog_div_gallery_grid).html($settings_gallery_div);
  
  //dblclick event
  $('.element.gallery_grid_element').live('dblclick',function(event) {
    if( $(this).hasClass('locked') ) {
      console.log('[gallery.js] in preview mode do nothing')
      return;
    }
    
    if( $('body').hasClass('prevMode') ) {
      console.log('[gallery.js] in preview mode do nothing')
      return;
    }
    
    if($(event.target).is(".controller") || $(event.target).is(".controller a") || $(event.target).is(".controller a img")) {
      console.log('trigger controller event.target');
      return;
    }
    
    $cur_gallery_grid_element = $(this);
    gallery_settings_div_id = 'gallery_settings_div_' + $cur_gallery_grid_element.data('elementid');
    
    $gallery_settings_div = $dialog_div_gallery_grid.find('.gallery_settings_div');
    $gallery_settings_div.attr('id', gallery_settings_div_id)
    $gallery_settings_div.data('elementid',$cur_gallery_grid_element.data('elementid'));
    $cur_gallery_grid_element.append($dialog_div_gallery_grid);
    
    $dialog_div_gallery_grid.css({
      'background': '#919191'
    });  
    $dialog_div_gallery_grid.dialog({
      autoOpen: false,
      width: 526,
      zIndex: 13000,
      beforeClose: function(event, ui) { 
        $('.gallery_grid img', $cur_gallery_grid_element).each(function(index, Element) {
          $(Element)
            .attr('src', $($('#slide_show_images_sort_ul').find('img.img2')[index]).attr('src'))
            .attr('data-id', $($('#slide_show_images_sort_ul').find('img.img2')[index]).attr('data-id'));
          
          //$('body').append('<div>'+index+'</div>');      
        });
      },
      close: function(event, ui) {
        $dialog_div_gallery_grid.remove();
      }
    });
    
    $setinfo_dialog.dialog({
      autoOpen: false,
      zIndex: 13000
      //close: function(event, ui) {
      //  $dialog_div_gallery_grid.remove();
      //}
    });
    
    element = $('#fileupload', $dialog_div_gallery_grid);
    makeMultiUpload(element);
    
    console.log('assign correct id to post'+$(this).data('elementid'));
    $('#slideshow_image_element_id', $dialog_div_gallery_grid).val( $(this).data('elementid') );
    
    $dialog_div_gallery_grid.dialog("open");
    //console.log($('.settings', $cur_gallery_grid_element).is(':visible'));
    $(this).find('.slideshow-settings').hide();
    
    var onAfterGgPanelHor;
    
    onAfterGgPanelHor = function(curr, next, opts, fwd) {
      var $current_panel;
      $current_panel = $(this);
      $current_panel.parents('.ggPanelHor').animate({
        height: $current_panel.height()
      });
    }
    
    $('.ggPanelHor', $dialog_div_gallery_grid).cycle({
      fx: 'scrollHorz',
      timeout: 0,
      fit: true,
      speed: 'fast',
      after: onAfterGgPanelHor
    });
    
    $('.upload.gg', $dialog_div_gallery_grid).click(function() {
      $('.ggPanelHor', $dialog_div_gallery_grid).cycle(0);
      return false;
    });
    
    $('.sort.gg', $dialog_div_gallery_grid).click(function() {
      $('.ggPanelHor', $dialog_div_gallery_grid).cycle(1);
      $('.sortPanel', $dialog_div_gallery_grid).width('100%')
      
      $('.set_info_gal').bind('click',function() {
        $cur_image_ss = $(this).parents('.slide_show_image_li').find('.ss_image_thumb')
        console.log($cur_image_ss)
        $setinfo_dialog.dialog("open");  
         
        $('.mainTitle',$setinfo_dialog).val($(this).parents('.slide_show_image_li').find('.caption_text_input').val());
        
        $('.link-type', $setinfo_dialog).bind('change', function() {
          var $select_button;
          $select_button = $(this);
          $('.link-val-container').not($('.' + $select_button.val())).hide();
          $('.' + $(this).val()).show();
          
          var ss_img_id_val, link_type_val;
          ss_img_id_val = $cur_image_ss.data('id');
          link_type_val = $select_button.val();
          setLinkTypeForPicture(ss_img_id_val, link_type_val);
          
          var $html_options, $ul_nav;
          
          if ($select_button.val() === 'page') {
            $ul_nav = $('#main_page_nav');
            $html_options = new Array();
            $ul_nav.find('li').each(function(index, option) {
              var $text, $url;
              $url = $(this).find('a').attr('href');
              $text = $(this).find('a').text();
              return $html_options.push("<option value=\"" + $url + "\">" + $text + "</option>");
            });
            $('.page-val', $setinfo_dialog).html($html_options.join());
          }
          
          $('.page-val').bind('change',function() {
            console.log('assign page url val for image gallery link.')
          });
            
        });
        $('.target', $setinfo_dialog).bind('change', function() {
          var ss_img_id_val, link_target_val;
          ss_img_id_val = $cur_image_ss.data('id');
          link_target_val = $(this).val();
          setLinkTargetForPicture(ss_img_id_val, link_target_val);
        });
        
        $('.mainTitle',$setinfo_dialog).bind('blur',function() {
          var ss_img_id_val, caption_val;
          ss_img_id_val = $cur_image_ss.data('id');
          caption_val = $(this).val();
          setCaption(ss_img_id_val, caption_val);
        });
        
        $('.description', $setinfo_dialog).bind('blur',function() {
          var ss_img_id_val, description_val;
          ss_img_id_val = $cur_image_ss.data('id');
          description_val = $(this).val();
          setDescriptionForPicture(ss_img_id_val, description_val);
        });
        
        $('.website-val', $setinfo_dialog).bind('blur', function() {
          var ss_img_id_val, link_text_val;
          ss_img_id_val = $cur_image_ss.data('id');
          link_text_val = $(this).val();
          return setLinkTextForPicture(ss_img_id_val, link_text_val);
        });
        
      });
      return false;
    });
    
    $('.grid_settings.gg', $dialog_div_gallery_grid).click(function() {
      $('.ggPanelHor', $dialog_div_gallery_grid).cycle(2);
      //$('.gridSettingsPanel', $dialog_div_gallery_grid).width('100%')
      return false;
    });
    
    
    //$sorted_images = $('#slide_show_images_sort_ul').find('img.img2');
    //$sorted_images.each(function() {
    //  $cur_sorted_image = $(this);
    //  $org_id = $(this).parent('li').attr('id');
    //  $cur_sorted_image
    //    .attr('id', $org_id)
    //    .attr('style', 'display:inline;');
    //});
    
    $images_list_ul = $('<ul id="slide_show_images_sort_ul" data-update-url="/slideshow_images/sort" />');
    console.log('get images for sort');
    $images = $('.gallery_grid img', $cur_gallery_grid_element);
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
        .addClass('ss_image_thumb')
        .width(50)
        .after('<input type="text" class="caption_text_input"  value="'+$caption+'" /><a class="delete_slide_image"><img src="/assets/images/toolbar-button-delete.png"></a><button class="set_info_gal" style="float:right">Set Info</button>')
    });
    
    //Generate text input for caption
    $images_list_ul.sortable({
      axis: 'y',
      update: function() {
        $.post($(this).data('update-url'), $(this).sortable('serialize'));
      }
    });
    if($('.gallery_grid', $cur_gallery_grid_element).hasClass('default')) {
      $('.sortPanel', $dialog_div_gallery_grid).width('100%').html('<h2>No Image to sort.</h2>');
    } else {
      $('.sortPanel', $dialog_div_gallery_grid).width('100%').html($images_list_ul);
    }
    
    //Make slider work
    var $gallery_html = $cur_gallery_grid_element;
    var gGallery_attrib_id = $cur_gallery_grid_element.data('gallery-grid-attr-id');
    $( ".slider-cols",$gallery_settings_div).slider({
      min:1,
      max:20,
      value:$('input[name=cols]',$gallery_html).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=cols]',$gallery_settings_div).attr("value", val); 
        $('input[name=cols]', $gallery_html).val(val);  
        updateComponent($gallery_html);      
      },
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var col_val = val;
        putGalleryGridCol(gallery_attrib_id, col_val);
      }
    });
    
    $( ".slider-rows",$gallery_settings_div).slider({
      min:1,
      max:20,
      value:$('input[name=rows]',$gallery_html).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=rows]',$gallery_settings_div).attr("value", val);  
        $('input[name=rows]', $gallery_html).val(val);
        updateComponent($gallery_html);      
      }  ,
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var row_val = val;
        putGalleryGridRow(gallery_attrib_id, row_val);
      }
    });
    
    $(".slider-margin",$gallery_settings_div).slider({
      value:$('input[name=margin]',$gallery_html).val(),
      min:0,
      max:50,
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=margin]',$gallery_settings_div).attr("value", val);
        $('input[name=margin]', $gallery_html).val(val);
        updateComponent($gallery_html);      
      },
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var margin_val = val;
        putGalleryGridMargin(gallery_attrib_id, margin_val);
      }
    });
    
  });
  
  //ALLREADY aaded in slideshow.js
  //caption update ss_image event
  //$('.caption_text_input').live('change',function() {
  //  var ss_img_id_val = $(this).parents('.slide_show_image_li').find('img').data('id');
  //  var caption_val = $(this).val();
  //  setCaption(ss_img_id_val, caption_val);
  //  $('.ss_image_caption.ss_image_caption_'+ss_img_id_val).html(caption_val);
  //  $('#slideshow_image_'+ss_img_id_val).attr('data-caption', caption_val);
  //});
  
  function loadMargin(cur_gallery_parent) {
    console.log('set margins: here')
    $cur_gallery_parent = $(cur_gallery_parent);
    $('.gallery_grid', $cur_gallery_parent).find('.imgdiv').css({
      'margin-right': $('.gallery_grid', $cur_gallery_parent).data('margin') + 'px',
      'margin-bottom': $('.gallery_grid', $cur_gallery_parent).data('margin') + 'px'
    })
  }
  
  function resizeAllMod(cur_gallery_parent) {
    var rows = $('input[name=rows]',$(cur_gallery_parent)).val();
    var columns = $('input[name=cols]',$(cur_gallery_parent)).val();  
    
    var margl = getPX($(".imgdiv",$(cur_gallery_parent)), "margin-right");
    var margb = getPX($(".imgdiv",$(cur_gallery_parent)), "margin-bottom");
    var win = $('.gallery_grid', $(cur_gallery_parent));
    var w = Math.ceil(win.width() / columns)-margl;
    var h = Math.ceil(win.height() / rows)-margb;
    var galw = $(cur_gallery_parent).width();
    var galh = $(cur_gallery_parent).height();
    var margin = parseInt($(".margin",$(cur_gallery_parent)).val());
    
    $(".gallery_grid",$(cur_gallery_parent)).css({
      width:(w+margin)*columns, 
      height:(h+margin)*rows
    });
    //set right width for the parent of grid gallery
    $(cur_gallery_parent).css({
      width:(w+margin)*columns, 
      height:(h+margin)*rows
    });

    $(".row",$(cur_gallery_parent)).each(function(){
      $(this).css({
        width:(w+margin)*columns,
        height:h
      });
      //$("img.image", $(this).find(".imgdiv")).load();
      
      $(this).find(".imgdiv").each(function() {
        $imgdiv_wrap = $(this);
        $(this).css({
            height: h,
            width: w
        });
      });
      
      $images = $(this).find(".imgdiv img");
      $images.each(function(index, Element) {
        $(Element).load(function() {
          
          var $image = $(this);
          
          var winWidth = $(this).parents(".imgdiv").width();
          var winHeight = $(this).parents(".imgdiv").height();
          var winRatio = winWidth / winHeight;
          
          var $imageWidth = $image.width();
          var $imageHeight = $image.height();          
          var imageRatio = $imageWidth / $imageHeight;
          
          if(winRatio > imageRatio) {
            $image.css({
              width: winWidth,
              height: Math.round(winWidth / imageRatio)
            });
          } else {
            $image.css({
              width: Math.round(winHeight * imageRatio),
              height: winHeight
            });
          }  
  
          //center the image
          dw = $(this).parents(".imgdiv").width(); dh = $(this).parents(".imgdiv").height();
          iw = $(this).width(); ih = $(this).height();
          var top = 0, left = 0;
          
          console.log("$(image).width(): " + iw);
          console.log("dw: "+dw);
          
          if(dw < iw){ //div is narrower than the image
            diff = iw - dw;
            left = -(diff/2);
          }
          if(dh < ih){ //div is longer than the image
            diff = ih - dh;
            top = -(diff/2);
          }
          $(this).css({position:'relative', top:top, left:left});   
          
          
          //$(Element).width(w);
          //$(Element).height(h);
          
        });
      });

    });
    
  }
  
  function resizeAll(cur_gallery_parent, expand) {
    var rows = $('input[name=rows]',$(cur_gallery_parent)).val();
    var columns = $('input[name=cols]',$(cur_gallery_parent)).val();  

    console.log('col = '+columns);
    console.log('rows = '+rows);
    //console.log('c = '+c.length);
    
    var margl = getPX($(".imgdiv",$(cur_gallery_parent)), "margin-right");
    var margb = getPX($(".imgdiv",$(cur_gallery_parent)), "margin-bottom");
    var win = $('.gallery_grid', $(cur_gallery_parent));
    var w = Math.ceil(win.width() / columns)-margl;
    var h = Math.ceil(win.height() / rows)-margb;
    var galw = $(cur_gallery_parent).width();
    var galh = $(cur_gallery_parent).height();
    var margin = parseInt($(".margin",$(cur_gallery_parent)).val());
    console.log('margl = '+margl);
    console.log('margb = '+margb);
    console.log('win = '+win.attr('class'));
    console.log('w = '+w);
    console.log('h = '+h);
    console.log('margin = '+margin);
    if(expand){
      expandw = (margin+getPX($('.imgdiv',$(cur_gallery_parent)), 'width'))*columns;
      expandh = (margin+getPX($('.imgdiv',$(cur_gallery_parent)), 'height'))*rows;    
      rowheight = getPX($('.imgdiv',$(cur_gallery_parent)), 'height')
      $(".gallery_grid",$(cur_gallery_parent)).css({width:expandw, height:expandh});
      //set right width for the parent of grid gallery
      $(cur_gallery_parent).css({
        width:expandw, 
        height:expandh
      });
      //set right width for the grid gallery rows
      $(".row",$(cur_gallery_parent)).each(function(){
        $(this).css({
          width:expandw,
          height: rowheight
        });        
      });
    }
    else{
      $(".gallery_grid",$(cur_gallery_parent)).css({
        width:(w+margin)*columns, 
        height:(h+margin)*rows
      });
      //set right width for the parent of grid gallery
      $(cur_gallery_parent).css({
        width:(w+margin)*columns, 
        height:(h+margin)*rows
      });
      //set right width for the grid gallery rows
      console.log("---------------");
      console.log(h);
      console.log(rows);
      console.log("---------------");
      $(".row",$(cur_gallery_parent)).each(function(){
        $(this).css({
          width:(w+margin)*columns,
          height:h
        });
        //$("img.image", $(this).find(".imgdiv")).load();
        
        $(this).find(".imgdiv").each(function() {
          $imgdiv_wrap = $(this);
          $(this).css({
              height: h,
              width: w
          });

          var winWidth = $(this).width();
          var winHeight = $(this).height();
          var winRatio = winWidth / winHeight;
          
          console.log("winRatio: "+winRatio);
          
          var $image = $("img.image", $(this));
          var $imageWidth = $image.width();
          var $imageHeight = $image.height();
          $image.one('load',function() {
            $imageWidth = this.width;
            $imageHeight = this.height;
          }).each(function() {
            if(this.complete) $(this).load();
            $imageWidth = this.width;
            $imageHeight = this.height;
          });;
          
          console.log("$image: "+$image);
          console.log("image wXh: "+$imageWidth+" : "+$imageHeight);
          
          var imageRatio = $imageWidth / $imageHeight;
          console.log("imageRatio: "+imageRatio);
          
          if(winRatio > imageRatio) {
            $image.css({
              width: winWidth,
              height: Math.round(winWidth / imageRatio)
            });
          } else {
            $image.css({
              width: Math.round(winHeight * imageRatio),
              height: winHeight
            });
          }  

          //center the image
          dw = $(this).width(); dh = $(this).height();
          iw = $(this).find("img").width(); ih = $(this).find("img").height();
          var top = 0, left = 0;
          
          console.log("$(image).width(): " + iw);
          console.log("dw: "+dw);
          
          if(dw < iw){ //div is narrower than the image
            diff = iw - dw;
            left = -(diff/2);
          }
          if(dh < ih){ //div is longer than the image
            diff = ih - dh;
            top = -(diff/2);
          }
          $(this).find("img").css({position:'relative', top:top, left:left});        
        });    
        

      });
    }
    
  }
  
  function getPX(element, attr){
    return parseInt((element.css(attr)).split("px")[0]);
  }
  
  $add_elem_gallery_page_id = $('#add_elem_gallery').data('pageid');
  $('#add_elem_gallery').click(function() {
    var element_id_val;
    $.post("/elements", { _method:'POST', 
      element : {
        page_id: $add_elem_gallery_page_id, 
        elem_type: 'gallery_grid_element'
        //content: $latest_slide_show_added.html()
      } 
    }, function(data) {
      
      element_id_val = data.element.id;
      console.log('element data set');
      $gallery_html
        .attr('id', 'element_'+element_id_val)
        .attr('data-elementid', element_id_val)
        .attr('data-pageid', $add_elem_gallery_page_id);
      
      $.post("/element_styles", { _method:'POST',
        element_style : {
          element_id: data.element.id, 
          width: 444, 
          height: 342,
          left: 30,
          top: 100
        }        
      }, function(data) {
        
        console.log('element_styles data set');
        $gallery_html
          .attr('data-elementstyleid',data.element_style.id)
          .attr('style="left:30;top:100;position:abosolute;"');
        
        $.post("/gallery_attribs", { _method:'POST',
          gallery_attrib : {
            element_id: element_id_val, 
            col: 3, 
            row: 3,
            margin: 0
          }        
        }, function(data) {
          //makeDragResizeDefault($gallery_html);
          
          console.log('gallery-grid data set');
          $gallery_html
            .attr('data-gallery-grid-attr-id',data.gallery_attrib.id);
          
          console.log('active slider');
          
          var $added_gallery = $gallery_html.find('.gallery_grid');
          var gGallery_attrib_id = $added_gallery.parents('.element').data('gallery-grid-attr-id');
          var win = $gallery_html;
          var ctr = 0;
          var x = "";
          var currow;
          
          cur_gallery_parent = $added_gallery.parents('.element');
          console.log('append gallery here: post gallery attrib not set yet');  
          $('#pageCanvas').append($gallery_html);
          group(cur_gallery_parent);
          resizeAll(cur_gallery_parent);          
          
          console.log('king kong : '+cur_gallery_parent.attr('class'));
          makeDragResizeDefault(cur_gallery_parent);
          $(cur_gallery_parent).draggable( "enable" ).resizable("enable");
          
          console.log("add class cur_selected and append controller div");
          //cur_gallery_parent.addClass('cur_selected').append($controller_div)
          //$other_elements = $('.element.gallery_grid_element:not(.cur_selected)')
          //$other_elements.resizable("option", "disabled", true).draggable("option", "disabled", true)
          
          $cur_video_block = $(cur_gallery_parent);
          if ($cur_video_block.find('.controller').length < 1) {
            console.log("set isSelectElement = true");
            isSelectElement = true;
            console.log("add class cur_selected and append controller div");
            $cur_video_block.addClass('cur_selected').append($controller_div);
            $other_elements = $('.element:not(.cur_selected)');
            console.log("other_elements resize drag disabled and enabled current element bec it is single click");
            $other_elements.resizable("option", "disabled", true).draggable("option", "disabled", true);
            $cur_video_block.resizable("option", "disabled", false).draggable("option", "disabled", false);
            
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
                return setZindex(element_style_id_val, zIndex);
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
                return setZindex(element_style_id_val, zIndex);
              } else if ($target.is('.delete_element') || $target.is('.delete_element img')) {
                element_id_val = $(this).parents('.element').data('elementid');
                $(this).parents('.element').remove();
                delete_element(element_id_val);
                return console.log("element has been deleted (not callback)");
              } else if ($target.is('.settings_element') || $target.is('.settings_element img')) {
                return element_id = $cur_element.data('elementid');
              }
            }); //$controller_div.mousedown
            
          }
    

          
          $(".settings",$gallery_html).draggable();
          
          $( ".slider-cols",$gallery_html).slider({
            min:1,
            max:50,
            value:$('input[name=cols]',$gallery_html).val(),
            slide: function(event, ui) {
              val = ui.value;
              $('input[name=cols]',$gallery_html).attr("value", val);  
              updateComponent($gallery_html);      
            },
            stop: function(event, ui) {
              val = ui.value;
              //put here
              gallery_attrib_id = gGallery_attrib_id;
              var col_val = val;
              putGalleryGridCol(gallery_attrib_id, col_val);
            }
          });
          
          $( ".slider-rows",$gallery_html).slider({
            min:1,
            max:50,
            value:$('input[name=rows]',$gallery_html).val(),
            slide: function(event, ui) {
              val = ui.value;
              $('input[name=rows]',$gallery_html).attr("value", val);  
              updateComponent($gallery_html);      
            }  ,
            stop: function(event, ui) {
              val = ui.value;
              //put here
              gallery_attrib_id = gGallery_attrib_id;
              var row_val = val;
              putGalleryGridRow(gallery_attrib_id, row_val);
            }
          });
          
          $(".slider-margin",$gallery_html).slider({
            value:$('input[name=margin]',$gallery_html).val(),
            min:0,
            max:50,
            slide: function(event, ui) {
              val = ui.value;
              $('input[name=margin]',$gallery_html).attr("value", val);
              updateComponent($gallery_html);      
            },
            stop: function(event, ui) {
              val = ui.value;
              //put here
              gallery_attrib_id = gGallery_attrib_id;
              var margin_val = val;
              putGalleryGridMargin(gallery_attrib_id, margin_val);
            }
          });
          
        }, 'json');
      }, 'json');
    }, 'json');
  });
  
  
  $('.gallery_grid').each(function() {
    var $cur_gallery = $(this);
    var $cur_gallery_parent = $(this).parents('.element');  
    var gGallery_attrib_id = $cur_gallery.parents('.element').data('gallery-grid-attr-id');
    
    var win = $cur_gallery;
    var ctr = 0;
    var x = "";
    var currow;
    
    group($cur_gallery_parent);
    loadMargin($cur_gallery_parent);
    resizeAllMod($cur_gallery_parent);
    
    $( ".settings",$cur_gallery_parent).draggable();
    //$cur_gallery.resizable();
    //$cur_gallery.draggable();
    
    $( ".slider-cols",$cur_gallery_parent).slider({
      min:1,
      max:20,
      value:$('input[name=cols]',$cur_gallery_parent).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=cols]',$cur_gallery_parent).attr("value", val);  
        updateComponent($cur_gallery_parent);      
      },
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var col_val = val;
        putGalleryGridCol(gallery_attrib_id, col_val);
      }
    });
    
    $( ".slider-rows",$cur_gallery_parent).slider({
      min:1,
      max:20,
      value:$('input[name=rows]',$cur_gallery_parent).val(),
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=rows]',$cur_gallery_parent).attr("value", val);  
        updateComponent($cur_gallery_parent);      
      }  ,
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var row_val = val;
        putGalleryGridRow(gallery_attrib_id, row_val);
      }
    });
    
    $( ".slider-showmore",$cur_gallery_parent).slider({
      value:$('input[name=showmore]',$cur_gallery_parent).val(),
      min:1,
      max:50,
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=showmore]',$cur_gallery_parent).attr("value", val);  
        updateComponent($cur_gallery_parent);      
      }    
    });
    
    $(".slider-margin",$cur_gallery_parent).slider({
      value:$('input[name=margin]',$cur_gallery_parent).val(),
      min:0,
      max:50,
      slide: function(event, ui) {
        val = ui.value;
        $('input[name=margin]',$cur_gallery_parent).attr("value", val);
        updateComponent($cur_gallery_parent);      
      },
      stop: function(event, ui) {
        val = ui.value;
        //put here
        gallery_attrib_id = gGallery_attrib_id;
        var margin_val = val;
        putGalleryGridMargin(gallery_attrib_id, margin_val);
      }
    });
    
    $cur_gallery.parents('.element').bind({
      load: function() {
        //load
        console.log('load');
      },
      resize: function() {
        resizeAll($cur_gallery_parent);
        console.log('resizeAll');
      }
    });  
    
    $('input',$cur_gallery_parent).keyup(function(){
      name = $(this).attr("name");
      if ($('.slider-'+name,$cur_gallery_parent).length){
        value = $(this).val(),
        $('.slider-'+name,$cur_gallery_parent).slider({value:value});
      }
      updateComponent($cur_gallery_parent);
    });  
    $('input',$cur_gallery_parent).change(function() {
      name = $(this).attr("name");
      alert(name);
    });
    
  });  
  
  $('.close_gallery_grid_settings').live('click',function(event) {
    event.stopPropagation();
    console.log('close_slide_show_settings was clicked so close the settings panel');
    $(this).parents('.settings').hide();
  });
  
  $('.element.gallery_grid_element').live('click', function() {
    isSelectElement = true;
    $cur_gallery_block = $(this)
    if (!$cur_gallery_block.hasClass('cur_selected')) {
      activeSelectElement($cur_gallery_block);
    }
  });
  
  $('#pageWrap').live('click', function(event) {
    $target = $(event.target);
    if($target.is('#pageWrap')) {
      deactiveSelectElement();
    }    
  });
  
  $('.settings_element').live('click', function() {
    $(this).parents('.gallery_grid_element').trigger('dblclick');
  });
  
  
  
});