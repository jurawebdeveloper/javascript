$(function(){
	var people = [
		{                                              // Each person is an object
		  name: 'Casey',                               // It holds name and rate
		  rate: 60
		},
		{
		  name: 'Camille',
		  rate: 80
		},
		{
		  name: 'Gordon',
		  rate: 75
		},
		{
		  name: 'Nigel',
		  rate: 120
		}
	];
	
	var results = [];
	
	people.forEach(function(person){
		if (person.rate >= 0 && person.rate <= 200) {
			results.push(person);
		}
	});
	
	var $tableBody = $('<tbody></tbody>');
	for(var i = 0; i < results.length; i++) {
		var person = results[i];
		var $row = $('<tr></tr>');
		$row.append($('<td></td>').text(person.name));
		$row.append($('<td></td>').text(person.rate));
		$tableBody.append($row);
	}
	$('thead').after($tableBody);  
});
