
$(document).ready(function() {
	$('body').mouseenter(function() {

		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
    	$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.instructions').hide();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '530px');
			}
		);
		$('.instructions').fadeIn(3000);
		// show hadouken animation to the right
    })
    .mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to position
    });

    $(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '120'){
        $(".ryu-cool").show();
 		$(".ryu-ready").hide(); 
    }
})

 $('body').keyup(function(){
        $(".ryu-cool").hide();
        $(".ryu-ready").show();x
});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};



	// $("body").keydown(function(){
 //        $(".ryu-ready").hide();
 //        $(".ryu-cool").show();
 //    })

    // $("body").keyup(function(){
    //     $(".ryu-cool").hide();
    //     $(".ryu-ready").show();
    // });

 // $("body").keydown(function(event){ 
 //        $("div").html("Key: " + event.which);
 //        console.log('no way');
 //    });