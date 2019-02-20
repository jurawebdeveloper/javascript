var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95;

var comparison = (score1 + score2) > (highScore1 + highScore2);

var elResposta = document.getElementById('resposta');
elResposta.textContent = 'Novo maior score: ' + comparison;