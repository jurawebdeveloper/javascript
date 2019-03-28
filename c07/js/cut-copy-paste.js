//document.write('<h2>teste</h2>');
$(function() {
	var $p = $('p');
	var $clonedQuote = $p.clone();
	$p.remove();
	$clonedQuote.insertAfter('h2');
	
});