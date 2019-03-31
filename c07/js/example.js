$(function() {
	//document.write('<h2>Teste...</h2>');
	var $list, $newItemForm, $newItemButton;
	var item = '';
	$list = $('ul');
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');
	
	$('li').hide().each(function(index){
		$(this).delay(450 * index).fadeIn(1600);
	});
	
	function updateCount(){
		var items = $('li[class!=complete]').lenght;
		$('#counter').text(items);
	}
	updateCount();
	
	$newItemButton.show();
	$newItemForm.hide();
	$('#showForm').on('click', function() {
		$newItemButton.hide();
		$newItemForm.show();
	});
	
	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var text = $('input:text').val();
		$list.append('<li>' + text + '</li>');
		$('input:text').val('');
		updateCount();
	});
});
	