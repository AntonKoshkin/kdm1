$('body').on('click', '#navBtn', function(event) {
	event.preventDefault();

	if ($(window).width() < 1280) {
		$('#nav').slideToggle(400);
	}
});

// $(window).resize(function(event) {
// 	if ($(window).width() >= 1263) {
// 		$('#nav').css('display', 'block');
// 	}
// });