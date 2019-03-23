document.write('<h2>teste</h2>');
$(function() {
	var backgroundColor = $('li').css('background-color');
	$('ul').append('<p> Cor de fundo: ' + backgroundColor + '</p>');
	$('li').css({
		'background-color':'#c5a996',
		'border': '1px solid #fff',
	});
});