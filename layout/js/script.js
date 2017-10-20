$(document).ready(function(){	
	// font replacement
	if ( ! ( $.browser.msie && ($.browser.version == 6) ) )
	{ 	
		$("h1#name").css({'font-size':'46px', 'padding-top':'20px' , 'margin-bottom':'0px' });
		Cufon.replace('#portfolio h2, h2.cv-section-name, h1#name'); // using cufon with IE6 breaks the layout in some cases
		
	}	
	
	// tooltips
	$('.tip').tipsy({gravity: 'e'});	//  apply class .tip to any <a> tag to make it's  title be displayed like a tooltip
	
	// lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_square',
		hideflash: false, 		// Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto
		wmode: 'opaque', 		// Set the flash wmode attribute
		autoplay: true, 		// Automatically start videos: True/False
		modal: false 			// If set to true, only the close button will close the window
	});

});