var hotel = {
	name: 'Ibis',
	rooms: 55,
	booked: 38,
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
}
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoomsAv = document.getElementById('rooms');
elRoomsAv.textContent = hotel.checkAvailability();