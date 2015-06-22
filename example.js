var Promise = require('bluebird');
var _innerError = new Error('error');

module.exports = {
	
	innerError: _innerError,
	
	withCatches: function() {
		return new Promise(function (resolve1, reject1) {
	  		return new Promise(function (resolve2, reject2) {
	    		return new Promise(function (resolve3, reject3) {
	      			return undefined('error');
	    		}).catch(reject2);
	  		}).catch(reject1);
		});
	},
	
	withoutCatches: function() {
		return new Promise(function (resolve1, reject1) {
	  		return new Promise(function (resolve2, reject2) {
	    		return new Promise(function (resolve3, reject3) {
	      			return undefined('error');
	    		});
	  		});
		});
	}
};