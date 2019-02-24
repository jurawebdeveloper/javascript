var scores = [24,32,17,42,74];
var arrayLength = scores.length;
var roundNumber = 0;
var i;

var msg = 'Nº de rounds: ' + scores.length + '<br />';

for (i=0; i < arrayLength; i++) {
    roundNumber = (1+i);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br />';
    //i = i + 1;
}

var elMsg = document.getElementById('resposta');
elMsg.innerHTML = msg;