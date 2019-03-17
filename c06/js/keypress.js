//document.write('<h2>Teste...</h2>')
function charCount(e){
    var entradaTexto, mostraCaractere, contador, ultimaTeclaCod, ekey;
    entradaTexto = document.getElementById('message').value;
    mostraCaractere = document.getElementById('charactersLeft');
    contador = (18 - (entradaTexto.length));
    mostraCaractere.textContent = contador;

    ekey = e.which || e.keyCode;
    ultimaTeclaCod = document.getElementById('lastKey');
    ultimaTeclaCod.textContent = 'Última tecla no código ASCII foi: ' + ekey;
    
}
var el = document.getElementById('message');
el.addEventListener('keypress', charCount,'false');