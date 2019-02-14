function Hotel(nome, quartos, ocupados) {
	this.name = nome;
	this.rooms = quartos;
	this.booked = ocupados;
	
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
}

var ibisHotel = new Hotel('Ibis',40,25);
var tullipHotel = new Hotel('Tullip In', 80,64);

var elName1 = document.getElementById('hotelName');
elName1.textContent = ibisHotel.name;


var elName2 = document.getElementById('hotelName2');
elName2.textContent = tullipHotel.name;