function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function breaker() {
	await sleep(5000);
}


var hotItens = document.querySelectorAll('li.hot');
if (hotItens.length > 0) {
	for (var i = 0; i < hotItens.length; i++) {
		hotItens[i].className = 'cool';
		breaker();
	}
}