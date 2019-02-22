var msg = 'js funcionou! ';
var score = 45;
var pass = 50;

if(score >= pass){
	msg += 'Parabéns, você passou!';
} else {
	msg += 'Sorry, baby, tente novamente';
}
var elMsg = document.getElementById('resposta');
elMsg.textContent = msg;