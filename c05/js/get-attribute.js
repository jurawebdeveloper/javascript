var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
	var attrib = firstItem.getAttribute('class');
	
	var el = document.getElementById('resultado');
	el.className = attrib;
}
