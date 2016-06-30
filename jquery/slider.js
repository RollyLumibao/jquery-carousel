//functions
	$(function(){
		//pause in clicking pause button
		$('#pause').click(function() {
	    $('#slider').cycle('pause');
		});
		//resume in clicking play button
		$('#play').click(function() {
		$('#slider').cycle('resume');
	    });
		//pause in hover next button
		$('#next').hover(function () {
			$('#slider').cycle('pause');
		},function(){
			$('#slider').cycle('resume');
		});
		//pause in hover prev button
		$('#prev').hover(function () {
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
		timeout:   3000,
		speed:     900,
	});
});