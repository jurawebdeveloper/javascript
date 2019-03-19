//document.write('<h2>teste...</h2>');

var username, noteName, textEntered, target;
noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');


document.addEventListener('click', function(e) {recorderControls(e);}, false);
noteInput.addEventListener('input', writeLabel, false);

function recorderControls(e) {
	e = window.event;
	target = e.target;
	e.preventDefault();
	switch(target.getAttribute('data-state')) {
		case 'record':
		record(target);
		break;
		case 'stop':
		stop(target);
		break;
	}
}

function record(target) {
	target.setAttribute('data-state', 'stop');
	target.textContent = 'stop';
}

function stop(target) {
	target.setAttribute('data-state', 'record');
	target.textContent = 'record';
}

function writeLabel(e) {
	e = window.event;
	target = e.target;
	textEntered = target.value;
	noteName.textContent = textEntered;
}