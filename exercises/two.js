/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	

	Movie.find({title: /Lord of the Rings/}, function(err, movies){
		var ids = [];
		for (var i of movies) {
			ids.push(i._id);
		}
		var answer = [];
		Checkout.find({movieId: {$in: ids}}, function(err, users){
			for (var j of users) {
				if (!answer.includes(j.userId)){
					answer.push(j.userId);
				}	
			}
			console.log("Users " + answer.join(", ") + " checked out the Lord of the Rings trilogy");	
		});
	});
};
