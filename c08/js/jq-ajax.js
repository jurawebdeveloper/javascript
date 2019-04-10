$('nav a').on('click', function(e){
	e.preventDefault();
	var url = this.href;
	var $content = $('#content');
	
	$('nav a.current').removeClass('current');
	$(this).addClass('current');
	$('#container').remove();
	
	
});