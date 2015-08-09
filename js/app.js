$(document).ready(function() {
	doIntro();
	$('.instructions').hide();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.logo').hide();
		$('.instructions').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.instructions').hide();
		$('.logo').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.instructions').hide();
		$('.ryu-throwing').show();
		$('.logo').hide();
		$('.hadouken').finish().show()
  			.animate(
    			{'left': '1020px'},
    			500,
    			function() {
      				$(this).hide();
      				$(this).css('left', '520px');
    }
  );
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(e) {
		if(e.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.instructions').hide();
		$('.logo').show();
		$('.ryu-cool').show();
	}
});

$(document).keyup(function(e) {
		if(e.which == 88) {
		$('.ryu-cool').hide();	
		$('.ryu-still').show();
	}
});

function playHadouken () {
  	$('#hadouken-sound')[0].volume = 0.5;
  	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

function doIntro() {
  $('#theme-song')[0].volume = 0.2;
  $('#theme-song')[0].load();
  $('#theme-song')[0].play();
}
