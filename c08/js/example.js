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
	
	$('#content').on('click', '#event a', function(e) {
		e.preventDefault();
		var loc = this.id.toUpperCase();
		
		var newContent = '';
		for (var i = 0; i < times[loc].length; i++) {
			newContent += '<li><span class = "time">' + times[loc][i].time + '</span></li>'
		}
		$('#sessions').html('<ul>' + newContent + '</ul>');
	});
});