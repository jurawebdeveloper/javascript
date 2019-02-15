var msg = '<h2>Browser Window</h2><p>width: ' + window.innerWidth + '</p>';
	msg += '<p>height: ' + window.innerHeight + '</p>'
	msg += '<h2>History</h2>'
var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;