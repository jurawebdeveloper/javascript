(function(){
	var pwd = document.getElementById('pwd');
	var chk = document.getElementById('showPwd');
	
	addEvent(chk, 'change', function(e) {
		var target = e.target || e.srcElement;
		try {
			if (target.checked) {
				pwd.type = 'text';
			} else {
				pwd.type = 'password';
			}
		} catch(error) {
			alertr('Este browser não pode exibir a senha.')
		}
	});
}());


















