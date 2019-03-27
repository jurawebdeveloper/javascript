//document.write('<h2>teste</h2>');
$(function() {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('#textInput');
	
	$newItemButton.show();
	$newItemForm.hide();
	
	$('#showForm').on('click', function(){
		$newItemButton.hide();
		$newItemForm.show();
	});
	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var $newText = $('input:text').val();
		$('li:last').after('<li>' + $newText + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});