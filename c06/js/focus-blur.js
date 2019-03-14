//document.write('<h2>teste...</h2>');


var elUserneme = document.getElementById('username');
elUserneme.addEventListener('blur', function(e){checkLength(e,5);}, 'false');

var elForm = document.getElementsByTagName('form')[0];
elForm.addEventListener('focus', function(e){tipInput(e);}, 'false');


//window.addEventListener('focus', setup, 'false');
/* isto não está funcionando direito: naão consigo mudar para outro input, fica sempre no username *****/
function checkLength(e,minimo){
	
	var target = e.target;
	var elMsg = document.getElementById('feedback');
	if(target.value.length < minimo) {
		elMsg.innerHTML = 'O campo deve conter pelo menos ' + minimo + ' caracteres';
	} else {
		elMsg.innerHTML = '';
	}
}

function tipInput(e) {
	var target1 = e.target;
	if (target1.id == 'username') {
		texto = 'digite no mínimo 5 caracteres...'
	} else {
		texto = 'digite no mínimo 6 caracteres com letras e números'
	}
	target1.placeholder = texto;
}


function setup() {
	var focusInput = document.getElementById('username');
	focusInput.focus();
}