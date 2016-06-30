//functions
	$(function(){
		//pause in clicking pause button
		$('#pause').click(function() {
	    $('#slider').cycle('pause');
		return false; 
		});
		//resume in clicking play button
		$('#play').click(function() {
		$('#slider').cycle('resume');
	    return false; });
		
		//pause in hover next button
		$('#next').hover(function (){
			$('#slider').cycle('pause');
		},function(){
			$('#slider').cycle('resume');
		});
		//pause in hover prev button
		$('#prev').hover(function (){
			$('#slider').cycle('pause');
		},function(){
			$('#slider').cycle('resume');
		});
	
//slider options
 
	$('#slider').cycle({
		fx:     'scrollHorz',
		next:    '#next',
		prev:    '#prev',
		pager:    '#pager',
		timeout:   2000,
		speed:     900,
	});
});