document.write('<h2>teste</h2>');
$(function() {
	$('ul').before('<p class = "notice">Just Adapted</p>');
	$('li.hot').prepend('+ ');
});