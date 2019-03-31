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
		var items = 2;
		
		$('#counter').text(items);
		console.log(items);
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
	
	$list.on('click', 'li', function() {
		var $this = $(this);
		var complete = $this.hasClass('complete');
		
		if(complete === true){
			$this.animate({opacity: 0.0, paddingLeft: '+=180'}, 500, 'swing', function() {
				$this.remove();
			});
		} else {
			item = $this.text();
			$this.remove();
			$list.append('<li class = \"complete\">' + item + '</li>').hide().fadeIn(300);
			updateCount();
		}
	});
});
	