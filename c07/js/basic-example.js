//document.write('<h2>Teste...</h2>')
$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(6500);
$('li').on('click', function() {
	$(this).remove();
});