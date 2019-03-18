document.write('<h2>teste...</h2>');

function setup() {
	var textInput = document.getElementById('message');
	textInput.focus();
	event.preventDefault();
}


window.addEventListener('DOMContentLoaded', setup, 'false');
window.addEventListener('beforeunload', function(event){return 'Você tem alterações não salvas.';}, 'false');