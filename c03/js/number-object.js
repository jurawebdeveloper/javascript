var originalNumber = 10.23456;
var msg = '<h2>original</h2><p>' + originalNumber + '</p>';
	msg += '<h2>fixed 3</h2><p>' + originalNumber.toFixed(3) + '</p>';
	msg += '<h2>precision 3</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;