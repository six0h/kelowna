$(function() {
	
	$('#spriteBox').hide();

	$('#thedark').delay(300).show().animate({'display':'block','opacity':'0.75'},function() {
		$('#like-gate').delay(400).animate({'left':'0px'}, 500, 'easeOutQuint');
	});


});
