document.write('<h2>teste</h2>');
$(function() {
	$('li:contains("pine")').text('almonds');
	$('li.hot').html(function() {
		return '<em>' + $(this).text() + '</em>';
	});
	$('li#one').remove();
});