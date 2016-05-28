
(function($) {

	var scrollStopper = function(event) {
		var ev = event || window.event;
		
		var $this = $(ev.target).attr('data-isStopOverscroll') === 'true'? $(ev.target): $(ev.target).parents('[data-isStopOverscroll="true"]');
		if ($this.scrollTop()<1  && (ev.originalEvent.deltaY<0) ) {
			ev.preventDefault();
			return false;
		}
		else{
			var thisItemHeight = $this.outerHeight();
			var maxScroll = $this[0].scrollHeight - thisItemHeight;
			if($this.scrollTop()>(maxScroll-1) && (ev.originalEvent.deltaY>0)){
				ev.preventDefault();
				return false;
			};
		};
	};

	$.fn.stopOverscroll = function() {
		return this.on('mousewheel', scrollStopper).attr('data-isStopOverscroll', 'true');
	};

	$.fn.startOverscroll = function() {
		return this.off('mousewheel', null, scrollStopper).removeAttr('data-isStopOverscroll');
	};


})(jQuery);