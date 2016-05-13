(function($) {
  currentLeftValue = 0;
  var methods = {
    left: function () {
      var elementsList = $('.carousel-list');
      var maximumOffset = 0;
      this.click(function() {
        if (currentLeftValue != maximumOffset) {
          currentLeftValue += 125;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
      });
    },
    right: function() {
      var elementsList = $('.carousel-list');
      var pixelsOffset = 125;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
      this.click(function() {
        if (currentLeftValue != minimumOffset) {
          currentLeftValue -= 125;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
      });
    }
  }
  $.fn.testCarusel = function( method ){
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method with name ' +  method + ' doesn"t exist for jQuery.tooltip' );
    }
    return this;
  };
})(jQuery);
