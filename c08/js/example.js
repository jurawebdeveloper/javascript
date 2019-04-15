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
			newContent += '<li><span class = "time">' + times[loc][i].time + '</span>'
			newContent += '<a href = "descriptions.html#';
			newContent += times[loc][i].title.replace(/ /g, '-') + '">';
			newContent += times[loc][i].title + '</a></li>';
		}
		$('#sessions').html('<ul>' + newContent + '</ul>');
		$('#event a.current').removeClass('current');
		$(this).addClass('current');
		$('#details').text('id details....limpar');
	});
});