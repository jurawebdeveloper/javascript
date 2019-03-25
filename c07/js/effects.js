$(function() {
	//document.write('<h2>Teste...</h2>');
	$('h2').hide().slideDown();
	var $li = $('li');
	$li.hide().each(function(index){
		$(this).delay(1200*index).fadeIn(700);
	});
	$li.on('click', function() {
		$(this).fadeOut(700);
	});
});
	