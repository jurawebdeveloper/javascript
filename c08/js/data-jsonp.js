function showEvents(data) {
	var newContent = '';
	for(var i = 0; i < data.events.length; i++) {
		newContent += '<div class = "event">';
		newContent += 'teste';
		newContent += 'teste';
		newContent += 'teste';
		newContent += 'teste';
		newContent += 'teste';
	}

	document.getElementById('content').innerHTML = newContent;
}