$(function() {
var zoomval = 0;

function zoom(val){
	
}

$('#crop').togglebutton({
	state:'off',
});	

$( ".zoomslide" ).slider({
	min:0,
	max:500,
	value:0,
	slide: function(event, ui) {
		zoomval = ui.value;
		resizeAll();		
	}	
});

function addOverlay(){
	divimagepos = $('#the_image').position();
	imagepos = $('#the_image img').position();
	divpos = $('#resizable').position();
	image = $('#the_image img');
	div = $('#resizable');
	
	nt = imagepos.top+divpos.top;
	nl = imagepos.left+divpos.left
	nh = divpos.top - nt; //north height
	north = $('#overlay-n');
	north.css('top', nt);
	north.css('left', nl);
	north.css('width', image.width());
	north.css('height', nh);
	north.css('display', "block");

	st = divpos.top+div.height();
	sl = imagepos.left+divpos.left;
	sh = image.height()-(nh+div.height()); //(imagepos.top+image.height())-(divpos.top+div.height())+nh; //north height
	south = $('#overlay-s');
	south.css('top', st);
	south.css('left', sl);
	south.css('width', image.width());
	south.css('height', sh);
	south.css('display', "block");
	
	et = imagepos.top+divpos.top;
	el = imagepos.left+divpos.left;
	eh = image.height();
	east = $('#overlay-e');
	east.css('top', et);
	east.css('left', el);
	east.css('width', divpos.left - el);
	east.css('height', eh);
	east.css('display', "block");
	
	/*divimage = $('#the_image').position();
	image = $('#the_image img').position();
	div = $('#resizable').position();

	north = $('.ui-resizable-n').position();
	$('#overlay-n').css('top', image.top);
	$('#overlay-n').css('left', divimage.left);
	$('#overlay-n').css('width', $('#the_image').css('width'));
	$('#overlay-n').css('height', div.top-image.top);
	$('#overlay-n').css('display', "block");
	
	south = $('.ui-resizable-s').position();
	sh = $('#the_image').height()+div.top+($('#resizable').height());
	//alert(sh);
	$('#overlay-s').css('top', div.top+($('#resizable').height()));
	$('#overlay-s').css('left', divimage.left);
	$('#overlay-s').css('width', $('#the_image').css('width'));
	$('#overlay-s').css('height', sh);
	$('#overlay-s').css('display', "block");	
	
	east = $('.ui-resizable-e').position();
	
	
	west = $('.ui-resizable-w').position();*/
}

function hideOverlay(){
	$('#overlay-n').css('display', "none");	
	$('#overlay-s').css('display', "none");	
	$('#overlay-e').css('display', "none");	
	$('#overlay-w').css('display', "none");	
}

$( "#resizable" ).draggable({ disabled: false });
	
$('#crop').bind('click', function(event, options){
	if(this.options.state == 'on'){
		
		$( ".zoomslide" ).css("display", "block");	
		imagepos = $("#the_image").position();
		divpos = $("#resizable").position();
		$("#resizable").unbind('resize');
		$(".imgdiv").css('overflow', 'visible');
		$('.demo').append($('#the_image'));
		
		/*if(this.options.count == 1){
		pos = $('#resizable').position();
		$('#the_image').css('top', pos.top);
		$('#the_image').css('left', pos.left);		
		}
		else{			*/
			$('#the_image').css('top', imagepos.top+divpos.top);
			$('#the_image').css('left', imagepos.left+divpos.left);
		
		//}
		
		$('#the_image').css('position', 'absolute');
		
		$("#the_image").draggable({disabled:false});
		$( "#resizable" ).draggable({ disabled: true });
		$('#msg').html(imagepos.top+" "+imagepos.left);	
		addOverlay();		
		
	}
	else if(this.options.state == 'off'){
		$("#the_image").draggable({disabled:true});
		$( "#resizable" ).draggable({ disabled: false });
		$( ".zoomslide" ).css("display", "none");
		$("#resizable").bind({
			load: function() {
			},
			resize: function() {
				resizeAll();
			}
		});			
		$('#resizable').prepend($('#the_image'));

		pos = $('#resizable').position();
		imagepos = $("#the_image").position();
		
		divy = pos.top; divx = pos.left;
		imgy = imagepos.top; imgx = imagepos.left
		
		$('#msg').html(divy+" "+divx+"\n"+imgy+" "+imgx);
		newx = imgx - divx;
		newy = imgy - divy;
			

		$('#the_image').css('position', 'absolute');
		$('#the_image').css('top', newy);
		$('#the_image').css('left', newx);
		hideOverlay();
	}
});
			
			
	var win = $("#resizable");
	var ctr = 0;
	var x = "";
	var currow;
	
	$( ".settings" ).draggable();
	$( "#resizable" ).resizable({handles: "n, e, s, w, se"});	
		$("#resizable").bind({
			load: function() {
			},
			resize: function() {
				resizeAll();
			}
		});	

	resizeAll();
	
	function resizeAll(){
		val = zoomval;
		
		margl = getPX($("#the_image"), "margin-right");
		margb = getPX($("#the_image"), "margin-bottom");
		w = $("#resizable").width(); //Math.ceil((win.width())/columns)-margl;
		h = $("#resizable").height(); //Math.ceil((win.height())/rows)-margb;		
		$("#the_image").each(function() {
			$(this).css({
					height: h,
					width: w
			});

			var winWidth = $(this).width()+(val*3),
				winHeight = $(this).height()+(val*3),
				winRatio = winWidth / winHeight;
			image = $(this).find(".image");
			imageWidth = image.width(),
			imageHeight = image.height(),
			display("Width: "+imageWidth+" \nHeight: "+imageHeight);
			//if(val == 0) alert("STOP");
			imageRatio = imageWidth / imageHeight;
			if(winRatio > imageRatio) {
			  image.attr('width', winWidth);
			  image.attr('height', Math.round(winWidth / imageRatio));						
			} else {
			  image.attr('width', Math.round(winHeight * imageRatio));
			  image.attr('height', winHeight);					
			}	

			//center the image
			dw = $(this).width(); dh = $(this).height();
			iw = $(this).find("img").width(); ih = $(this).find("img").height();
			var top = 0, left = 0;
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

	}
	
	function getPX(element, attr){
		return parseInt((element.css(attr)).split("px"));
	}	
	
	function display(text){
		$('#msg').html(text);
	}
});