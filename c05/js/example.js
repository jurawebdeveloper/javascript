var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('banana');

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('ice tea');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);