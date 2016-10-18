/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
	
	Checkout.aggregate(
	    [
	        { "$group": { 
	            "_id": '$movieId', 
	            "checkoutCount": { "$sum": 1 }
	        }},
	        { "$sort": { "checkoutCount": -1 } },
	    ],
	    function(err,result) {
	    	console.log(result[0]._id);
	    	Movie.findOne({_id: result[0]._id}, (err, res) => {
	    		console.log("The movie \"" + res.title + "\" had the most checkouts");
	    	});
	    }
	);
};
