$('#exchangerates').append('<div id="rates">Teste</div><div id="reload"></div>');
function loadRates() {
	$.getJSON('data/rates.json').done(function(data){
	var msg = '';
	$.each(data, function(key,val){
		msg += '<div class = "' + key + '">' + key + ': ' + val + '</div>';
	});
	$('#rates').html(msg);
	}).fail(function() {
		$('#rates').text('Desculpe, não conseguimos carregar os dados.');
	})
}
loadRates();