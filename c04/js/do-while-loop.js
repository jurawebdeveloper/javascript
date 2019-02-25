var i = 1;
var msg = '';
do{
	msg += i + 'x 5 = ' + (i*5) + '<br />';
i = i + 1;	
} while (i < 3);
document.getElementById('resposta').innerHTML = msg;