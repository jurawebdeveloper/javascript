var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('resultado');
el.innerHTML = msg;
firstItem.textContent = 'pão';
//firstItem.className = 'cool';
