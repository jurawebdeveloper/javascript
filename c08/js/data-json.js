var xhr = new XMLHttpRequest();
xhr.onload = function() {
	if(xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);
		
		var newContent = '';
		for(var i = 0; i < responseObject.events.length; i++) {
			newContent += '<div class = "event">';
			newContent += '<img src = "'+ responseObject.events[i].map + '" ';
			newContent += '';
			newContent += '';
			newContent += '';
			newContent += '';
		}
		document.getElementById('content').innerHTML = newContent;
	}
};
xhr.open('GET', 'data/data.json', true);
xhr.send(null);