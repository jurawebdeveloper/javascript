
var elMap = document.getElementById('location');                 // HTML element
var msg = 'Desculpe, não conseguimos descobrir sua localização.';    // No location msg

if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Procurando sua localização...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<h3>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</h3>';               // Add longitude
  msg += '<h3>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</h3>';                // Add latitude
  msg += '<h4>Coordenadas Encontradas:<br>';
  msg += position.coords.latitude + ',' + position.coords.longitude + '<h4>';
  msg += '<h5>Coordenadas corretas: -15.80443,-47.88274 </h5>';
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show error message
  console.log(msg.code);                                    // Log the error
}