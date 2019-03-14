//document.write('<h2>Teste...</h2>');
function setup() {
	var textInput;
	textInput = document.getElementById('username');
	textInput.focus();
}
window.addEventListener('focus', setup, 'false');