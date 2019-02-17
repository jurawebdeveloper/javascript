var saying = 'Home sweet Home ';
var msg = '<h2>length </h2><p>' + saying.length + '</p>';
	msg += '<h2>uppercase </h2><p>' + saying.toUpperCase() + '</p>';
	msg += '<h2>lowercase </h2><p>' + saying.toLowerCase() + '</p>';
	msg += '<h2>Character Index: 12 </h2><p>' + saying.charAt(12) + '</p>';
	msg += '<h2>first ee </h2><p>' + saying.indexOf('ee') + '</p>';
	msg += '<h2>Substring 8-14 </h2><p>' + saying.substring(8,14) + '</p>';
	msg += '<h2>replace </h2><p>' + saying.replace('me', 'w') + '</p>';

var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;