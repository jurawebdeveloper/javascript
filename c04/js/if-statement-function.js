var score = 75;
var msg = 'js funcionou! ';

function congratulate(){
	msg += 'Parabéns! ';
}

if (score >= 50) {
	congratulate();
	msg += 'Siga para a próxima etapa.'
}
var elMsg = document.getElementById('resposta');
elMsg.textContent = msg