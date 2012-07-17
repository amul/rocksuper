(function( $ ){
  console.log('loaded jquery resizetext');
  $.fn.resizetext = function( options ) {  

    return this.each(function(options) {
        var $this = $(this);

    	
    var init=function(){
    		$this.resizable({resize:resizer});
    		childrenSetRelative();
    }
      settings = $.extend({
    	  'compressor' : 0.5,
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

      
      var overFlowVertical=function(){
    	  var actualHeight=$this[0].scrollHeight;
    	  var distanceFromEdge=$this.height()-actualHeight;//The distance between the border of the element
    	  													//In case of overflow, this is an actual number
    	
    	  if(distanceFromEdge<-5)
    		  return true;
    	  else
    		  return false;
      };
      
      var childrenSetRelative=function(){//Sets the font size to be relative to the 
 		 var mySize= parseFloat($this.css("font-size").replace("px",""));
 		 	
    	  $this.children().each(function(){
    		  if($(this).css("font-size").match("px")){
	    			  var childSize=parseFloat($(this).css("font-size").replace("px",""));
	    			  var relative=childSize/mySize;
	    			  $(this).css("font-size",relative*100+"%");
    			  }
    	  });
      }
      var resizer = function () {
    		
    	 	var oldSize=parseFloat($this.css('font-size').replace("px",""));//The original base size of the font
    	 
    	  
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
    		  console.log('font-size 1: '+fontSize);
    		  
    		 while(overFlowVertical()){
    			
    			   fontSize=fontSize*0.9;
    			  $this.css('font-size', fontSize);
            console.log('font-size 2 while: '+fontSize);
    		  }
    		 

    		 
      }
    	   

      
      init();
      
    });

  };
})( jQuery );