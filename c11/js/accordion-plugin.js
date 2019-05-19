(function($){
	$.fn.accordion = function (speed) {        // Return the jQuery selection
    this.on('click', '.accordion-control', function (e) {
      e.preventDefault();
      $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle(speed);
    });
    return this;                                 // Return the jQuery selection
	};
})(jQuery);