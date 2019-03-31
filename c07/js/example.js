$(function() {
	//document.write('<h2>Teste...</h2>');
	var $list, $newItemForm, $newItemButton;
	var item = '';
	$lits = $('ul');
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');
	
	$('li').hide().each(function(index){
		$(this).delay(450 * index).fadeIn(1600);
	})
});
	