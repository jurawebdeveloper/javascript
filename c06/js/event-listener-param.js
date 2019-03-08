//document.write('<h2>Testando script</h2>')
var elMsg = document.getElementById('feedback');
var elUsername = document.getElementById('username');

function checkUsername(minimo){
	if(elUsername.value.length < minimo) {
		elMsg.textContent = 'O nome deve conter no mínimo 5 caracteres'
	} else {
		elMsg.textContent = '';
	}
}

elUsername.addEventListener('blur', function() {checkUsername(5);}, false);