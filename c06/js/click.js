//document.write('<h2>Teste...</h2>')
//var msg = '<h2>Teste...</h2>';
var msg = '<div class = \"header\"><a id = \"close\" href = "#">Close X</a></div>';
	msg += '<div><h2>Manutenção do Sistema</h2>';
	msg += 'Nossos servidores estarão em nanutenção entre as 3h e as 4h da tarde.';
	msg += 'Durante esse tempo poderá ocorrer interrupções no serviço.</div>';
	
	var elNote = document.createElement('div');
	elNote.setAttribute('id', 'note');
	elNote.innerHTML = msg;
	//document.write(msg);
	document.body.appendChild(elNote);
	
function fecharAviso() {
	document.body.removeChild(elNote);
}

var fechar = document.getElementById('close');
fechar.addEventListener('click', fecharAviso, 'false');