var score1 = 6;
var score2 = 5;
var pass1 = 7;
var pass2 = 7;

var minPass = ((score1 >= pass1) || (score2 >= pass2));

var msg = 'Precisa refazer: ' + !minPass;

var elMsg = document.getElementById('resposta');
elMsg.textContent = msg;