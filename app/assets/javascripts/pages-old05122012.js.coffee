setLeftTopPos = (element_id_val, element_style_id_val, left_val, top_val) ->
  $.post "/element_styles/"+element_style_id_val, 
        { _method:'PUT', element_style : {element_id: element_id_val, left: left_val, top: top_val} }, 
        (data)-> 
          console.log "left top pos saved"
        , 'json'
        
setWHSize = (element_id_val, element_style_id_val, width_val, height_val) ->
  $.post "/element_styles/"+element_style_id_val, 
        { _method:'PUT', element_style : {element_id: element_id_val, width: width_val, height: height_val} } 
        (data)-> 
          console.log "width height size saved"
        'json'
        
setZindex = (element_id_val, element_style_id_val, zIndex) ->
  $.post "/element_styles/"+element_style_id_val,
    { _method:'PUT', element_style : {element_id: element_id_val, z_index: zIndex} }
    (data)-> 
      console.log "element zindex saved"
    'json'
    
setFontFamily = (element_style_id_val, font_family_val) ->
  $.post "/element_styles/"+element_style_id_val,
    { _method:'PUT', element_style : {font_family: font_family_val} }
    (data)-> 
      console.log "element font family saved"
    'json'
    
setFontSize = (element_style_id_val, font_size_val) ->
  $.post "/element_styles/"+element_style_id_val,
    { _method:'PUT', element_style : {font_size: font_size_val} }
    (data)-> 
      console.log "element font size saved"
    'json'
    
setLineHeight = (element_style_id_val, line_height_val) ->
  $.post "/element_styles/"+element_style_id_val,
    { _method:'PUT', element_style : {line_height: line_height_val} }
    (data)-> 
      console.log "element line height saved"
    'json'
    
setLetterSpacing = (element_style_id_val, letter_spacing_val) ->
  $.post "/element_styles/"+element_style_id_val,
    { _method:'PUT', element_style : {letter_spacing: letter_spacing_val} }
    (data)-> 
      console.log "element letter spacing saved"
    'json'
    
setElementContent = (element_id_val, element_content_val) ->
  $.post "/elements/"+element_id_val,
    { _method:'PUT', element : {content: element_content_val} }
    (data)-> 
      console.log "element content saved"
    'json'
    
delete_element = (element_id_val) ->
  $.post "/elements/"+element_id_val,
    { _method:'DELETE', elements : {element_id: element_id_val} }
    (data)-> 
      console.log "deleted element"
    'json'
    
#========================================== HTML COMPONENT ====================================================
#controller fr each of the elements
$controller_div = $ "
<div class='controller'>
  <a class='settings_element'><img src=\"<%= asset_path('images/toolbar-button-settings.png') %>\" /></a>
  <a class='zup'><img src='/assets/images/toolbar-button-up.png' /></a>
  <a class='zdown'><img src='/assets/images/toolbar-button-down.png' /></a>
  <a class='delete_element'><img src='/assets/images/toolbar-button-delete.png' /></a>
</div>
"
#the element that shows after clicking the settings button
generateSettingsHtml = (element_id, element_style_id) ->
  $settings_div = $ "
  <div id='settingsPannel' style='display:none'>
    <span class='close_box_settings'>&nbsp;</span>
    <span>Line Height</span><br />
    <input type='text' id='elementLineHieght' value='' data-elementid="+element_id+" data-styleid="+element_style_id+" /><br />
    <span>Letter Spacing</span><br />
    <input type='text' id='elementLetterSpacing' value='' data-elementid="+element_id+" data-styleid="+element_style_id+" />
  </div>
  "

$ ->
  myNicEditor = new nicEditor()
  $panel = $("<div id='myNicPanel'> </div>")
  $('#pageCanvas').prepend($panel)
  myNicEditor.setPanel('myNicPanel')
  $('#myNicPanel').hide()
  isSelectElement = false
  
  $('#add_blank_page').click ->
    console.log "add new page"
    title_val = 'Page '+ ($('#main_page_nav > li').length+1)
    $.post "/pages", 
      { _method:'POST', page : {active: 1, height: 900, title: title_val} }, 
      (data)-> 
        html = "<tr id=\"page_" + data.page.id + "\">
                  <td>"+data.page.user_id+"</td>
                  <td>"+data.page.active+"</td>
                  <td>"+data.page.height+"</td>
                  <td>"+data.page.title+"</td>
                  <td><a href='/pages/"+ data.page.id+"'>Show</a></td>
                  <td><a href='/pages/"+data.page.id+"/edit'>Edit</a></td>
                  <td><a href='/pages/"+data.page.id+"' data-confirm=\"Are you sure?\" data-method=\"delete\" rel=\"nofollow\">Destroy</a></td>
                </tr>"
        $('tbody').append html
        li = "<li>"+data.page.title+"</li>"
        $('#main_page_nav').append li
      , 'json'
      
  $('nav#main ul li .sub').hide()  
  $('nav#main ul li').click ->
    if $(this).hasClass "current_sub_opened"
      $(this).removeClass "current_sub_opened"
      $(this).addClass "current_sub_closed"
      $(this).find('.sub').hide()
      
      #console.log $(this).attr("id") + "main navigation unclick"
    else
      $(this).siblings().removeClass "current_sub_opened"
      $('nav#main ul li .sub').hide()
      $(this).find('.sub').show()
      $(this).addClass "current_sub_opened"
      
      #console.log $(this).attr("id") + "main navigation click"
            
  $('#add_elem_paragraph').click ->
    #create default text content
    <% sample_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, urna et condimentum viverra, diam leo viverra nunc, nec gravida tortor eros nec ante. Morbi ut tortor risus, sed feugiat tellus. Donec id nunc vitae ligula bibendum ullamcorper. Sed eget ullamcorper est. Aenean leo leo, pretium eget sagittis ac, rhoncus nec ligula. Morbi sed sem enim. Nam sollicitudin egestas ligula sit amet accumsan." %>

    $.post "/elements", 
      { _method:'POST', element : {page_id: $('#add_elem_paragraph').data('pageid'), elem_type: 'paragraph', content: '<%= sample_text %>'} }, 
      (data)->       
        $.post "/element_styles", 
        { _method:'POST', element_style : {element_id: data.element.id} }, 
        (data)->
          #create an element
          $element = $ "
          <div class='paragraph cur_selected element new_element' data-elementid='"+data.element_style.element_id+"' data-elementstyleid='"+data.element_style.id+"'>
            <div class='content'>
              <%= sample_text %>
            </div>
            <div class='controller'>
              <a class='settings_element'><img src='/assets/images/toolbar-button-settings.png' /></a>
              <a class='zup'><img src='/assets/images/toolbar-button-up.png' /></a>
              <a class='zdown'><img src='/assets/images/toolbar-button-down.png' /></a>
              <a class='delete_element'><img src='/assets/images/toolbar-button-delete.png' /></a>
            </div>
          </div>
          "
          $('.element').removeClass('cur_selected')
          $('.element').find('.controller').remove()
          $('.element').resizable("option", "disabled", true).draggable("option", "disabled", true)
          
          $("#pageWrap").append($element)
          if isSelectElement==false
            isSelectElement = true
            console.log "set the #pageWrap event on --=val= "+isSelectElement
          $element.draggable({
            handle: $element
            create: (event, ui) ->
            start: (event, ui) ->
            drag: (event, ui) ->
            stop: (event, ui) ->
              element_id_val = $element.data('elementid')
              element_style_id_val = $element.data('elementstyleid')
              left_val = ui.position.left
              top_val = ui.position.top
              setLeftTopPos(element_id_val, element_style_id_val, left_val, top_val)
          }).resizable({
            alsoResize: $element.find('.content')
            handles: "n, e, s, w, ne, nw, se, sw"
            create: (event, ui) ->
            start: (event, ui) ->
            resize: (event, ui) ->
            stop: (event, ui) ->
              element_id_val = $(this).data('elementid')
              element_style_id_val = $(this).data('elementstyleid')
              width_val  = ui.size.width
              height_val = ui.size.height
              setWHSize(element_id_val, element_style_id_val, width_val, height_val)
          })

          $element.mousedown (event)->
            if isSelectElement==false
              isSelectElement = true
              console.log "set the #pageWrap event on --=val= "+isSelectElement
            if !$element.hasClass('cur_selected')
              $('.element').removeClass('cur_selected')
              $('.element').find('.controller').remove()
              if($element.find('.controller').length < 1)
                console.log "add class selected"
                $element.addClass('cur_selected').append($controller_div)
                $other_elements = $('.element:not(.cur_selected)')
                $other_elements.resizable("option", "disabled", true).draggable("option", "disabled", true)
                $cur_element_content = $element.find('.content')
                $element.resizable("option", "disabled", false).draggable("option", "disabled", false)
                    
                $controller_div.mousedown (event)->
                  event.preventDefault()
                  event.stopPropagation()
                  $target = $(event.target)
                  $element_box = $(this).parents('.element')
                  if $target.is('.zup') || $target.is('.zup img')
                    console.log "z_index_add_new_elem"
                    cur_zindex = $element_box.css('zIndex')
                    $element_box.css
                      zIndex: parseInt(cur_zindex)+1
                      console.log parseInt(cur_zindex)+1
                      element_id_val = $element.data('elementid')
                      element_style_id_val = $element.data('elementstyleid')
                      zIndex = parseInt(cur_zindex)+1
                      setZindex(element_id_val, element_style_id_val, zIndex)
                      console.log element_id_val
                  else if $target.is('.zdown') || $target.is('.zdown img')
                    console.log "z_index_subtract_new"
                    cur_zindex = $element_box.css('zIndex')
                    $element_box.css
                      zIndex: parseInt(cur_zindex)-1
                      console.log parseInt(cur_zindex)-1
                      element_id_val = $element.data('elementid')
                      element_style_id_val = $element.data('elementstyleid')
                      zIndex = parseInt(cur_zindex)-1
                      setZindex(element_id_val, element_style_id_val, zIndex)
                  else if $target.is('.delete_element') || $target.is('.delete_element img')
                    element_id_val = $element_box.data('elementid')
                    $element_box.remove()
                    delete_element(element_id_val)
                    console.log "element_new has been deleted"
                  else if $target.is('.settings_element') || $target.is('.settings_element img')
                    $('body').prepend($settings_div)
                    $settings_div.show("slide", { direction: "right" }, 800)
                    $('.close_box_settings', $settings_div).click ->
                      $settings_div.hide("slide", { direction: "right" }, 800)
                    #alert "show box settings opt"
          #console.log data.element.content
        ,'json'
      , 'json'
        
  $('#pageWrap').mousedown (event)->
    if !isSelectElement
      return
    $cur_element = $(this)
    
    $target = $(event.target)
    if $target.is('#pageWrap')
      $('.element').removeClass('cur_selected')
      $('.element').find('.controller').remove()
      $('.element').resizable("option", "disabled", true).draggable("option", "disabled", true)
      isSelectElement = false
      console.log "event handled"
      
      $('.element').removeClass('editorOn')
      console.log "close_box_settings click"
      $('.close_box_settings').trigger('click')
      

      
  $('.element').each ->
    $cur_element = $(this)
    $cur_element_content = $cur_element.find('.content')
    
    $cur_element.find('.content').blur ->
      $cur_element.removeClass('editorOn')
      #$panel.hide() here
      #setElementContent(element_id_val, page_id_val, element_content_val)
      
    
    $cur_element.dblclick ->
      console.log "set isSelectElement var right"
      if isSelectElement==false
        isSelectElement = true
        console.log "set the #pageWrap event on --=val= "+isSelectElement
      
      console.log "check if element has class of editorOn so that it will stop when it is already editoron"
      if $cur_element.hasClass('editorOn')
        console.log "stop making wisiwig"
        return
        
      $cur_element_content = $('.content', $cur_element)
      
      console.log "disable drag and resize for the editorOn for cleanliness"
      $cur_element.draggable("option", "disabled", true).resizable("option", "disabled", true)
      
      console.log "remove controller div for cleanliness"
      $('.controller', $cur_element).remove()
      $other_elements = $('.element:not(.cur_selected)')
      
      console.log "add class editorOn and remove it for other elements are in active"
      $other_elements.removeClass('editorOn')
      $cur_element.addClass('editorOn')
      
      console.log "add Instance on editor using .content "+$cur_element_content.attr('id')
      myNicEditor.addInstance($cur_element_content.attr('id'))
      
      console.log "show toolbar/panel for editor"
      if $('#myNicPanel').is(':hidden')
        $('#myNicPanel').show()
      
      console.log "set blur event hundler for editor hide panel and post/removeInstance current element"+$cur_element_content.attr('id')
      myNicEditor.addEvent 'blur', ->
        element_id_val = $cur_element.data('elementid')
        element_content_val = myNicEditor.instanceById($cur_element_content.attr('id')).getContent()
        #$cur_element_content.html()
        setElementContent(element_id_val, element_content_val)
        myNicEditor.removeInstance($cur_element_content.attr('id'))
        $('#myNicPanel').hide()
          
      
      console.log "make text wisiwig"
      $divToTextAreaClone = $('.content',$cur_element)
      $divToTextArea = $('.content',$cur_element)
      
        
    
    $cur_element.mousedown (event)->
      if isSelectElement==false
        isSelectElement = true
        console.log "set the #pageWrap event on --=val= "+isSelectElement
        console.log "!$cur_element.hasClass('cur_selected') "+!$cur_element.hasClass('cur_selected')
      if !$cur_element.hasClass('cur_selected')
        $('.element').removeClass('cur_selected')
        $('.element').find('.controller').remove()
        console.log "$cur_element.find('.controller').length "+$cur_element.find('.controller').length
        if($cur_element.find('.controller').length < 1)
          #$('#pageWrap').trigger('mousedown')
          console.log "set isSelectElement = true"
          isSelectElement = true
          
          console.log "add class cur_selected and append controller div"
          $cur_element.addClass('cur_selected').append($controller_div)
          $other_elements = $('.element:not(.cur_selected)')
          
          console.log "other_elements resize drag disabled and enabled current element bec it is single click"
          $other_elements.resizable("option", "disabled", true).draggable("option", "disabled", true)
          $cur_element.resizable("option", "disabled", false).draggable("option", "disabled", false)
          
          console.log "set event handler for controller_div"
          $controller_div.mousedown (event)->
            event.preventDefault()
            event.stopPropagation()
            $target = $(event.target)
            if $target.is('.zup') || $target.is('.zup img')
              console.log "z_index_add"
              cur_zindex = $(this).parents('.element').css('zIndex')
              $(this).parents('.element').css
                zIndex: parseInt(cur_zindex)+1
                console.log parseInt(cur_zindex)+1
                element_id_val = $cur_element.data('elementid')
                element_style_id_val = $cur_element.data('elementstyleid')
                zIndex = parseInt(cur_zindex)+1
                setZindex(element_id_val, element_style_id_val, zIndex)
            else if $target.is('.zdown') || $target.is('.zdown img')
              console.log "z_index_subtract"
              cur_zindex = $(this).parents('.element').css('zIndex')
              $(this).parents('.element').css
                zIndex: parseInt(cur_zindex)-1
                console.log parseInt(cur_zindex)-1
                element_id_val = $cur_element.data('elementid')
                element_style_id_val = $cur_element.data('elementstyleid')
                zIndex = parseInt(cur_zindex)-1
                setZindex(element_id_val, element_style_id_val, zIndex)
            else if $target.is('.delete_element') || $target.is('.delete_element img')
              element_id_val = $(this).parents('.element').data('elementid')
              $(this).parents('.element').remove()
              delete_element(element_id_val)
              console.log "element has been deleted (not callback)"
            else if $target.is('.settings_element') || $target.is('.settings_element img')
              #console.log "dblclick click"
              #$cur_element.trigger('dblclick')
              element_id = $cur_element.data('elementid')
              element_style_id = $cur_element.data('elementstyleid')
              $settings_div = generateSettingsHtml(element_id, element_style_id)
              $('body').prepend($settings_div)
              $settings_div.show "slide", { direction: "right" }, 800, ->
                $('#elementLetterSpacing').bind 'change', ->
                  elementId = $('#elementLineHieght').data('elementid')
                  $cur_element = $('#element_'+elementId)
                  
                  element_style_id_val = $('#elementLineHieght').data('styleid')
                  letter_spacing_val = $('#elementLetterSpacing').val()
                  setLetterSpacing(element_style_id_val, letter_spacing_val)
                  
                  $('.content', $cur_element).css
                    letterSpacing: $('#elementLetterSpacing').val() + "px"
                $('#elementLineHieght').bind 'change', ->
                  elementId = $('#elementLineHieght').data('elementid')
                  console.log elementId
                  $cur_element = $('#element_'+elementId)
                  
                  element_style_id_val = $('#elementLineHieght').data('styleid')
                  line_height_val = $('#elementLineHieght').val()
                  setLineHeight(element_style_id_val, line_height_val)
                  
                  $('.content', $cur_element).css
                    lineHeight: $('#elementLineHieght').val()
              $('.close_box_settings', $settings_div).click ->
                $settings_div.hide "slide", { direction: "right" }, 800, ->
                  $settings_div.remove()
      
    $cur_element.resizable
      alsoResize: $('.content', this)
      handles: "n, e, s, w, ne, nw, se, sw"
      disabled: true
      create: (event, ui) ->
        $(this).resizable( "disable" )
      start: (event, ui) ->
      resize: (event, ui) ->
      stop: (event, ui) ->
        element_id_val = $(this).data('elementid')
        element_style_id_val = $(this).data('elementstyleid')
        width_val  = ui.size.width
        height_val = ui.size.height
        setWHSize(element_id_val, element_style_id_val, width_val, height_val)
    .draggable
      handle: this
      disabled: true
      create: (event, ui) ->
        $(this).draggable( "disable" )
      start: (event, ui) ->
      drag: (event, ui) ->
      stop: (event, ui) ->
        element_id_val = $(this).data('elementid')
        element_style_id_val = $(this).data('elementstyleid')
        left_val = ui.position.left
        top_val = ui.position.top
        setLeftTopPos(element_id_val, element_style_id_val, left_val, top_val)
        