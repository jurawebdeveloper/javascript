//document.write('<h2>teste</h2>');
$(function() {
	$('li').each(function() {
		var ids = this.id;
		$(this).append(' <span class = "order">' + ids + '</span>');
	});
});