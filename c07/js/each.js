//document.write('<h2>teste</h2>');
$(function() {
	var ids = '';
	var $listItens = $('li'):
	$listItens.on('mouseover click', function() {
		ids = this.id;
		$listItens.childreen('span').remove();
	});
});