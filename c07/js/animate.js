$(function() {
	//document.write('<h2>Teste...</h2>');
	$('li').on('click', function() {
		$(this).animate({opacity: 0.1,paddingLeft: '+=80'}, 500,
		function() {
			//$(this).remove();
		});
	});
});
	