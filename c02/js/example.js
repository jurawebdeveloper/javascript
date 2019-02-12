var name = 'Molly';
var greeting = 'Hello ';
var message = ', please check your order.';
var elWelcome = document.getElementById('welcome');
elWelcome.textContent = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var price = 5;
var cost = price * tiles;
var shipping = 7;
var total = shipping + cost;

var elSign = document.getElementById('sign');
var elTiles = document.getElementById('tiles');
var elCost = document.getElementById('subtotal');
var elShipping = document.getElementById('shipping');
var elTotal = document.getElementById('total');
elSign.textContent = sign;
elTiles.textContent = tiles;
elCost.textContent = cost;
elShipping.textContent = shipping;
elTotal.textContent = total;
