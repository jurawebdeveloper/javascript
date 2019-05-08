console.log('And we\'re off...');
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur',function(){
	console.log('You entered', this.value);
});

