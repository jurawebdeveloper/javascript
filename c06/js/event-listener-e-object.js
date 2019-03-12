//document.write('<h2>Teste...</h2>');
//

function checkLength(e, minimo) {
	var el, elMsg;
	e = window.event;
	el = e.target;
	//elMsg = el.nextSibling;
	elMsg = document.getElementById('feedback');
	if(el.value.length < minimo) {
		elMsg.innerHTML = 'Campo deve conter no mínimo' + minimo + 'caracteres';
		//document.write('<h2>' + elMsg.textContent + '</h2>')
	} else {
		elMsg.innerHTML = '';
	}
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',function(e){checkLength(e, 5);},false);