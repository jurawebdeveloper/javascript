var msg = '<h2>Browser Window</h2><p>width: ' + window.innerWidth + '</p>';
	msg += '<p>height: ' + window.innerHeight + '</p>'
	msg += '<h2>History</h2><p>itens: ' + window.history.length + '</p>';
	msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
	msg += '<p>heigth: ' + window.screen.height + '</p>'
var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;
alert('Página atual: '+ window.location);