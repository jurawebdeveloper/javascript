(function() { /**** esta funcao imediatamente declarada ajuda proteger o escopo das variaveis    *****/
	var hotel = {
		name: 'Ibis',
		roomRate: 240,
		discount: 15,
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	}


var hotelName, roomRate, specialRate;

hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('rate');
specialRate = document.getElementById('rooms');

hotelName.textContent = hotel.name;
roomRate.textContent = 'R$ ' + hotel.roomRate.toFixed(2);
specialRate.textContent = 'R$ ' + hotel.offerPrice();


/****** informar prazo da oferta    ******/
var expiraMsg, hoje, elFim;

function ofertaExpira(hoje) {
	var seteDias, dia, data, mes, ano, nomeDias, nomeMeses;
	seteDias = new Date(hoje.getTime() + 7 * 24 * 60 * 60 * 1000);
	nomeDias = ['Domingo','Segunda Feira','Terça Feira','Quarta Feira','Quinta Feira','Sexta Feira','Sábado'];
	nomeMeses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
	dia = nomeDias[seteDias.getDay()];
	data = seteDias.getDate();
	mes = nomeMeses[seteDias.getMonth()];
	ano = seteDias.getFullYear();
	
	expiraMsg = 'Oferta expira ' + dia + ' - ' + data + ' de ' + mes +  ' de ' + ano;
	return expiraMsg;
}

hoje = new Date();
elFimOferta = document.getElementById('fimOferta');
elFimOferta.innerHTML = ofertaExpira(hoje)

}());