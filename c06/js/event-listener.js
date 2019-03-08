//document.write('<h2>testando arquivo js...</h2>');
function checkUsername() {
	var elMsg = document.getElementById('feedback');
	if(this.value.length < 5) {
		elMsg.textContent = 'O nome deve conter no mínimo 5 caracteres.';
	} else {
		elMsg.textContent = '';
	}
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);