var hotel = new Object();

hotel.name = 'Tullip In';
hotel.rooms = 82;
hotel.booked = 74;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoomsAv = document.getElementById('rooms');
elRoomsAv.textContent = hotel.checkAvailability();