//document.write('<h2>teste...</h2>');

var elUserneme = document.getElementById('username');
elUserneme.addEventListener('blur', function(e){checkLength(e,5);}, 'false');

var elForm = document.getElementsByTagName('form')[0];
elForm.addEventListener('focus', function(e){tipInput(e);}, 'false');


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
	target1.placeholder = 'digite no mínimo 5 caracteres...';
}