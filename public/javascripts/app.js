!function ($) {
$(function(){

	$('.carousel').carousel();
	$('.navbar').scrollspy();


	var formPopoverOptions = {
		trigger: 'focus'
	};
	$('#subjectInput').popover(formPopoverOptions);
	$('#bodyInput').popover(formPopoverOptions);

	var tooltipOptions = {
		placement: 'bottom'	
	};
	$('a#github').tooltip(tooltipOptions);
	$('a#tumblr').tooltip(tooltipOptions);
	$('a#twitter').tooltip(tooltipOptions);
	$('a#email').tooltip(tooltipOptions);

	$('#submitBtn').click(function(e){
		var subject = $('#subjectInput').val();
		var body = $('#bodyInput').val();

		var mailTo = 'mailto:miles.matthias@gmail.com?';
		mailTo += 'subject='+subject;
		mailTo += '&body='+body;
		
		window.open(encodeURI(mailTo));
	});

})
}(window.jQuery)
