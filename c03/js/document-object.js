var msg = '<p><b>Título :</b>' + document.title + '.<br />';
	msg += '<b>Endereço: </b>' + document.URL + '<br />';
	msg += '<b> Atualizado em: </b>' + document.lastModified + '<br /></p>;'

var elFooter = document.getElementById('footer');
elFooter.innerHTML = msg;