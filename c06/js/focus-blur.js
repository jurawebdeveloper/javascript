//document.write('<h2>teste...</h2>');

var elUserneme = document.getElementById('username');
elUserneme.addEventListener('blur', checkLength, 'false');


function checkLength(){
	var elMsg = document.getElementById('feedback');
	if(this.value.length < 5) {
		elMsg.innerHTML = 'O campo deve conter pelo menos 5 caracteres';
	} else {
		elMsg.innerHTML = '';
	}
}