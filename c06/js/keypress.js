//document.write('<h2>Teste...</h2>')
function charCount(e){
    var entradaTexto, mostraCaractere, contador, ultimaTecla;
    entradaTexto = document.getElementById('message').value;
    mostraCaractere = document.getElementById('charactersLeft');
    contador = (18 - (entradaTexto.length));
    mostraCaractere.textContent = contador;

    ultimaTecla = document.getElementById('lastKey');
    ultimaTecla.textContent = 'Última tecla no código ASCII foi: ' + e.keyCode;

}
var el = document.getElementById('message');
el.addEventListener('keypress', charCount,'false');