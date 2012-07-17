jQuery.fn.togglebutton = function (options) {
	myoptions = jQuery.extend ({
		state: "off",
		count:0	
	}, options);
		
	jQuery.extend('click',{
		func: function(x, y) {
			alert(x);
			// do something
		}
	});	
	
	//this.func(1, 2);	
	
	this.click(function(event, options){
		//myoptions.click;
		opt = this.options;
		//alert(opt.state);
		$this = $(this);
		opt.count += 1;
		if(opt.state == 'on'){
			turnoff($this);
			opt.state = 'off';
		}
		else if(opt.state == 'off'){
			turnon($this);
			opt.state = 'on';
		}
	});
	
	this.each(function () {
		this.options = myoptions;
		$this = $(this);
		opt = this.options;
		//alert(opt.click);
		if(opt.state == 'on'){
			$this.attr('class', "toggle-button state-on");
		}
		else if(opt.state == 'off'){
			$this.attr('class', "toggle-button state-off");
		}

	});
	
	function turnon($this){
		$this.attr('class', "toggle-button state-on");
	}
	function turnoff($this){
		$this.attr('class', "toggle-button state-off");
	}
}


