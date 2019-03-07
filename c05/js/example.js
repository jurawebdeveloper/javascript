var listLi = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('banana');

newItemLast.appendChild(newTextLast);
listLi.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('ice tea');
newItemFirst.appendChild(newTextFirst);
listLi.insertBefore(newItemFirst, listLi.firstChild);

listLi2 = document.querySelectorAll('li');
var el = document.getElementById('one')
el.innerHTML = 'apple';
var i;
for (i = 0; i < listLi2.length; i++) {
	listLi2[i].className = 'cool';
}