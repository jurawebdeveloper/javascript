//document.write('<h2>Testando script...</h2>')
function checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elMsg.textContent = 'Nome deve ter no mínimo 5 caracteres.';
	} else {
		elMsg.textContent = '';
	}	
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;