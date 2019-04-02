var xhr = new XMLHttpRequest();
xhr.onload = function() {
	if(xhr.status ===200) {
		var response = xhr.responseXML;
		var events = response.getElementsByTagName('event');
		
		for(var i = 0; i < events.length; i++){
			var container, image, location1, city, newline;
			container = document.createElement('div');
			container.className = 'event';
		}
	}
}