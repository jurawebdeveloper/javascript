var score1 = 5;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

var passBoth = (score1 >= pass1) && (score2 >= pass2);

var msg = 'Passou nas 2 rodadas: ' + passBoth;

var elMsg = document.getElementById('resposta');
elMsg.textContent = msg;