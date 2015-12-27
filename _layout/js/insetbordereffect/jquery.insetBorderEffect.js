/**
 *
 * Inset Border Effect jQuery Plugin
 * v 1.0
 *
 * Author: Robin Thrift  - 	http://rob-thrift.com
 * Alerations by: Chris Coyier - http://css-tricks.com/examples/InsetBorderEffect/	
 *	
 * Free for commercial use
 *	
**/

// allows for use of $ without conflict worries
(function($) {
	
	$.fn.insetBorder = function(options) {
		
		// defaults
		options = $.extend({
			speed : 250,
			inset : 10,
			borderColor : '#ffffff',
			borderType: "solid",
			outerClass : "ibe_outer",
			innerClass : "ibe_inner"
		}, options);
		
		// run plugin on entire jQuery set
		return this.each(function(i) {
				
      var			
  			$el = $(this),
  			ibe_height = $el.outerHeight(),
			  ibe_width = $el.outerWidth();
			
  		var
			  wrapper = $("<div />", {
  			  "class": options.outerClass,
  			  "css"  : {
    				"width": ibe_width,
    				"height": ibe_height,
    				"overflow": "hidden",
    				"top": 0,
    				"left": 0,
    				"position": "relative"
  				},
    		  "mouseenter": function() {
    				  $el
    					 .next()
    					 .animate({
    					   "top": "-" + options.inset + "px", 
    					   "left": "-" + options.inset + "px", 
    					   "height": ibe_height, 
    					   "width": ibe_width, 
    					   "opacity": 0.1
    					 }, {
    					   "duration": options.speed, 
    					   "queue": false,
    					   "complete": function() {
    					   
    					     // BUG: for some reason this is getting called twice.
    					     
    					     // Kinda works... attempt at allowing selectability of main element
    					     // The problem is this only fires on complete but must make visibile on mouseleave no matter what
    					     // $el.next().css("visibility", "hidden");
    					     
    					   }
    					 });
  					 
  				  // on mouseleave
  					},
  					"mouseleave": function() {
  					  
  					  $el
  					     .next()
  					     // .css({
  					     //  "visibility": "visible"
  					     // })
  						   .animate({
  						     "top": 0, 
  						     "left": 0, 
  						     "height": (ibe_height - (options.inset * 2)) + "px", 
  						     "width": (ibe_width - (options.inset * 2)) + "px", 
  						     "opacity": 1
  						   }, {
  						    "duration": options.speed, 
  						    "queue": false
  						  });
  						  
  					} 
  				}),
			   
			 after = $("<div />", {
  			  "class": options.innerClass,
  			  "css"  : {
    				"height": (ibe_height - (options.inset * 2)) + "px",
    				"width": (ibe_width - (options.inset * 2)) + "px",
    				"border": options.inset + "px " + options.borderType + " " + options.borderColor,
    				"position": "absolute",
    				"top": 0,
    				"left": 0
			    }
			   });

			$el.wrap(wrapper).after(after);
			 
		});
				
	};
	
})(jQuery);