$(window).scroll(function(event) {
	if ($(window).scrollTop() > 150) {
		$('body').addClass('header--fixed');

		$('#fixWidth').removeClass('col-md-2').addClass('col-md-4');
		$('#fixWidth2').removeClass('col-md-5').addClass('col-md-3');



	} else {
		$('body').removeClass('header--fixed');

		$('#fixWidth').removeClass('col-md-4').addClass('col-md-2');
		$('#fixWidth2').removeClass('col-md-3').addClass('col-md-5');
	}
});