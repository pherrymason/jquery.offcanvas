(function(factory) {
	if( typeof define === 'function' && define.amd ) {
		define(['jquery'], factory);
	}
	else if( typeof exports === 'object' ) {
		factory( require('jquery') );
	}
	else {
		factory( jQuery );
	}
}( function ($) {

var
Offcanvas = {

	init : function() {
		var
		self = this,
		move_class = '';

	//	move_class = 'move';
		move_class = 'move-inner';
	//	move_class = 'offcanvas-overlap';


		$(document)
		.on('click.sepia.offcanvas', '.sp-left-off-canvas-toggle', function(event){
			self.toggle(event, move_class+'-right');
		})
		.on('click.sepia.offcanvas', '.sp-right-off-canvas-toggle', function(event){
			self.toggle(event, move_class+'-left');
		})
		.on('click.sepia.offcanvas', '.sp-exit-off-canvas, .exit-off-canvas', function(event){
			self.clickRemoveClass(event, move_class+'-left');
			self.clickRemoveClass(event, move_class+'-right');
		});
	},

	getWrapper : function() {
		var $off_canvas = $('.sp-off-canvas-wrap');
		return $off_canvas;
	},

	toggle : function(event, class_name) {
		event.preventDefault();
		var
		$off_canvas = this.getWrapper();

		if ($off_canvas.is('.'+class_name)){
			this.hide(class_name, $off_canvas);
		}
		else{
			this.show(class_name, $off_canvas);
		}
	},

	clickRemoveClass : function(event, class_name) {
		event.preventDefault();
		var
		$off_canvas = this.getWrapper();
		this.hide(class_name, $off_canvas);
	},

	show : function(class_name, $off_canvas){
		$off_canvas.trigger('open.sepia.offcanvas');
		$off_canvas.addClass(class_name);
	},

	hide : function(class_name, $off_canvas){
		$off_canvas.trigger('open.sepia.offcanvas');
		$off_canvas.removeClass(class_name);
	}
};

Offcanvas.init();

}));