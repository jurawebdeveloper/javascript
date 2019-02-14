var hotel = {
	name: 'Ibis',
	rooms: 74,
	booked: 58
	
};

hotel.gym = false;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;
var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;