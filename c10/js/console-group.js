$form = $('#calculator');


$form.on('submit', function(e){
	e.preventDefault();
	console.log('Clicou submit...');

	
	var width, height, area;

	width = $('#width').val();
	height = $('#height').val();              
	area = width * height;
	
	console.group('Cálculo de área');
	console.info('Width ', width);
	console.info('Height ', height);
	console.groupEnd();
	
	
	
	$form.append('<p>' + area + '</p>');

});