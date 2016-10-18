/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	Checkout.aggregate(
	    [
	        { "$group": { 
	            "_id": '$userId', 
	            "checkoutCount": { "$sum": 1 }
	        }},
	        { "$sort": { "checkoutCount": -1 } },
	    ],
	    function(err,result) {
	    	console.log("User " + result[0]._id + " had the most checkouts");
	    }
	);
};
