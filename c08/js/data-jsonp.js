function showEvents(data) {
	var newContent = '';
	for(var i = 0; i < data.events.length; i++) {
		newContent += '<div class = "event">';
		newContent += '<img src = "' + data.events[i].map + '"';
		newContent += ' alt = "' + data.events[i].location + '" />';
		newContent += 'teste';
		newContent += 'teste';
		newContent += '</div>';
	}

	document.getElementById('content').innerHTML = newContent;
}