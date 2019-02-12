var name = 'Molly';
var greeting = 'Hello ';
var message = ', please check your order.';
var elWelcome = document.getElementById('welcome');
elWelcome.textContent = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var price = 5;
var cost = price * tiles;

var elSign = document.getElementById('sign');
var elTiles = document.getElementById('tiles');
var elCost = document.getElementById('subtotal');
elSign.textContent = sign;
elTiles.textContent = tiles;
elCost.textContent = cost;
