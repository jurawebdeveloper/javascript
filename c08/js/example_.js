$(function(){
	var times;
	$.ajax({
		beforeSend: function(xhr){
			xhr.overrideMimeType("application/json");
		}
	});
	
	function loadTimeTable() {
		$.getJSON('data/example.json').done(function(data){
			times = data;
		}).fail(function(){
			$('#event').html('Desculpe! Não foi possível carregar o calendário no momento.');
		});
	}
	loadTimeTable();
});