var randomNumber = Math.floor((Math.random()*10)+1);

var msg = '<h2>random</h2><p>' + randomNumber + '</p>'
var elMath = document.getElementById('info');
elMath.innerHTML = msg