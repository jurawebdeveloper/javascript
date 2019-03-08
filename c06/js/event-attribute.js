//document.write("<h2>testando script...</h2>");
function checkUsername() {
	var elMsg = document.getElementById('feedback');
	var elUsername = document.getElementById('username');
	
	if (elUsername.value.length < 5) {
		elMsg.textContent = 'O nome deve ter pelo menos 5 caracteres.';
	} else {
		elMsg.textContent = '';
	}
}