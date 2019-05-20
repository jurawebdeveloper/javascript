(function(){
	var $imgs = $('#gallery img');
	var $search = $('#filter-search');      
	var cache = []; 
	
	$imgs.each(function(){
		cache.push({
			element: this,
			text: this.alt.trim().toLowerCase()
		});
	});
	
	function filter(){
		var query = this.value.trim().toLowerCase();  // Get the query
		cache.forEach(function(img) {         // For each entry in cache pass image 
		  var index = 0;                      // Set index to 0

		  if (query) {                        // If there is some query text
			index = img.text.indexOf(query);  // Find if query text is in there
		  }

		  img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
		});
	}
	
	if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }   
	
}());
























