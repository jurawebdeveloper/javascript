var score = 55;
var msg;
if(score >=50){
	msg = 'Parabéns!'
	msg += ' Vá para a próxima etapa'
}
var elMsg = document.getElementById('resposta');
elMsg.textContent = msg;