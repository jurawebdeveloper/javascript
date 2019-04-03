var xhr = new XMLHttpRequest();
xhr.onload = function() {
	if(xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);
		
		var newContent = '';
		for(var i = 0; i < responseObject.events.length; i++) {
			newContent += '<div class = "events">';
			newContent += '';
			newContent += '';
			newContent += '';
			newContent += '';
			newContent += '';
		}
	}
};
xhr.open('GET', 'data/data.json', true);
xhr.send(null);