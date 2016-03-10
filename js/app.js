
$(document).ready(function() {
	$('.ryu').mouseenter(function() {

		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').hide();
    	$('.ryu-still').show();
	})

	.mousedown(function() {
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// show hadouken animation to the right
    })
    .mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to position
    });
});