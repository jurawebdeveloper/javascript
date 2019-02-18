var today = new Date();
var year = today.getFullYear();

var msg = '<p>Copyright &copy: ' + year + '</p>'
var elDate = document.getElementById('footer');
elDate.innerHTML = msg;