var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[1];
position.appendChild(newEl);