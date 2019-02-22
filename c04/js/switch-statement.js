var msg = 'js funcionou! ';
var level = 3;

switch (level){
	case 1:
		msg += 'Boa sorte no pripeiro teste!';
		break;
	case 2:
		msg += 'Segundo de 3 níveis - siga em frente!';
		break;
	case 3:
		msg += 'Etapa final, quase lá!';
		break;
	default:
		msg += 'Boa sorte';
		break;
}

var elMsg = document.getElementById('resposta');
elMsg.textContent = msg;