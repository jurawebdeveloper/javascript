var pass = 50;
var score = 40;
var hasPassed = score >= pass;

var elResposta = document.getElementById('resposta');
elResposta.textContent = 'Passou de nível: ' + hasPassed;