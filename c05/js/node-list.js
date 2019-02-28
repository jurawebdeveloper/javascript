var hotItens = document.querySelectorAll('li.hot');
if (hotItens.length > 0) {
	for (var i = 0; i < hotItens.length; i++) {
		hotItens[i].className = 'cool';
	}
}