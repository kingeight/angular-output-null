(function() {
  'use strict';
  angular.module('app.output', []).filter('strempty', function() {
	    return function(input) {
	    	if(typeof(input)=='string'){
	    		return input.trim().length?input:'N/A';
	    	}
	    	else if(typeof(input)=='number'){
	    		return input;
	    	}
	    	else{
	    		return input||'N/A';
	    	}
	    };
	});
}).call(this);
