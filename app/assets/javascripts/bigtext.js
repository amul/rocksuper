$(document).ready(function() {
  
  function resize(event, ui) {
  $this=$(this);
  var mySize= parseFloat($this.css("font-size").replace("px",""));
 		 	 
      var overFlowVertical=function(){//Used to detect overflow
    	  var actualHeight=$this[0].scrollHeight;
    	  var distanceFromEdge=$this.height()-actualHeight;//The distance between the border of the element
    	  													//In case of overflow, this is an actual number
    	
    	  if(distanceFromEdge<-5)
    		  return true;
    	  else
    		  return false;
      };
      
    	  $this.children().each(function(){
    		  if($(this).css("font-size").match("px")){
	    			  var childSize=parseFloat($(this).css("font-size").replace("px",""));
	    			  var relative=childSize/mySize;
	    			  $(this).css("font-size",relative*100+"%");
    			  }
    	  });
		 
     // $('.content').width(ui.size.width)
      //$('.content').height(ui.size.height)
	   options={};
	   settings =$.extend({
    				 compressor:0.5,
    	         'minFontSize' : Number.NEGATIVE_INFINITY,
    	         'maxFontSize' : Number.POSITIVE_INFINITY
    	       },options);
    		 
    		  var fontSizeWidth=Math.max(
    				  Math.min(
    						  $this.width() / (settings.compressor*10), 
    						  parseFloat(settings.maxFontSize)
    						  ), 
    					parseFloat(settings.minFontSize)
    			);

    		  var fontSize=fontSizeWidth;
    		  $this.css('font-size', fontSize);
    		  
    		 while(overFlowVertical()){
    			
    			   fontSize=fontSize*0.9;
    			  $this.css('font-size', fontSize);

    		  }
			  
    		
	  
    }
	
  $('.element.bigtext').resizable({
    alsoResize: ".content",
    handles: "n, e, s, w, ne, nw, se, sw",
	  create: resize,
    resize: resize
  });
});