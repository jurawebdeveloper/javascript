document.write('<h2>teste</h2>');
$(function() {
	$('li#three').removeClass('hot');
	$('li.hot').addClass('favorite');
	$('ul').attr('id', 'group');
});