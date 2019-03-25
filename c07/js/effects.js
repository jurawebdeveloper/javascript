$(function() {
	//document.write('<h2>Teste...</h2>');
	$('h2').hide().slideDown();
	var $li = $('li');
	$li.hide().each(function(index){
		$(this).delay(700*index).fadeIn(700);
	});
});
	