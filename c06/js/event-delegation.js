//document.write('<h2>Teste...</h2>')
function itemDone(e) {
	var target, elParent, elGrandParent, elMsg;
	elMsg = document.getElementById('mensagem');
	target = e.target;
	elParent = target.parentNode;
	elGrandParent = target.parentNode.parentNode;
	//elMsg.innerHTML = target.textContent;
	elGrandParent.removeChild(elParent);
	e.preventDefoult();
	
}

var el = document.getElementById('listaCompras');

el.addEventListener('click', function(e){itemDone(e)}, 'false');