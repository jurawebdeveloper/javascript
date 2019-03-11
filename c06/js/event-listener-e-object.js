//document.write('<h2>Teste...</h2>');
var elUsername = document.getElementById('username');

function checkLength(minimo) {
	var elMsg = document.getElementById('feedback');
	if(elUsername.value.length < minimo) {
		elMsg.innerHTML = 'Campo deve conter no mínimo 5 caracteres';
	} else {
		elMsg.innerHTML = '';
	}
}


elUsername.addEventListener('blur',function(){checkLength(5);},false);