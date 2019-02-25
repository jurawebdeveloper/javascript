
var table = 4;
var operador = 'multiplicacao';
var i = 1;
var msg = 'tabuada <br />';

if (operador === 'adicao') {
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
	}
} else {
	while (i < 11) {
		msg += i + ' x ' + table + ' = ' + (i*table) + '<br />';
		i++;
	}
}
document.getElementById('blackboard').innerHTML = msg;