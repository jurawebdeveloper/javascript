//document.write('<h2>Teste...</h2>');
function checkLength() {
	var elMsg = document.getElementById('feedback');
	if(this.value.length < 5) {
		elMsg.innerHTML = 'Campo deve conter no mínimo 5 caracteres';
	} else {
		elMsg.innerHTML = '';
	}
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',checkLength,false);