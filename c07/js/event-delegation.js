$(function() {
	//document.write('<h2>Teste...</h2>');
	var listItem, itemId, itemStatus, eventType;
	$('ul').on(
		'click mouseover', ':not(#four)', {status: 'important'},
		function(e){
			listItem = 'Item: ' + e.target.textContent + '<br />';
			itemId = 'Item ID: ' + e.target.id + '<br />';
			itemStatus = 'Status: ' + e.data.status + '<br />';
			eventType = 'Event: ' + e.type;
			$('#notes').html(listItem + itemId + itemStatus + eventType);
		}
	);
});
	