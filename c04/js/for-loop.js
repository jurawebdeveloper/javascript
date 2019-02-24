var scores = [24,32,17];
var arrayLength = scores.length;
var roundNumber = 0;
var i;

var msg = 'js works';
for (i=0; i<arrayLength;) {
    roundNumber = (1+i);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br />';
}

var elMsg = document.getElementById('resposta');
elMsg.innerHTML = msg;