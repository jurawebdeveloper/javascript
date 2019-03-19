//document.write('<h2>teste...</h2>');

function setup() {
	var textInput = document.getElementById('message');
	textInput.focus();
}


window.addEventListener('DOMContentLoaded', setup, false);
window.addEventListener('beforeunload', function(event){
	var message = 'Você tem alterações não salvas.';
	(event || window.event).returnValue = message;
	return message;
	});