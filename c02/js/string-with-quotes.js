var title;
var message;
title = "Molly's special odffers.";
message = '<a href=\"sale.html\">25% off!</a>'; <!--A barra invertida \" serve para escapar o caractere de aspa dentro da string-->
var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;