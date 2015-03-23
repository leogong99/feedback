exports.save = function(req, res) {
	var comment = req.body.Issues;
	var img = req.body.data;
	console.log("User name = " + comment + ", password is " + img);
	res.end("yes");
};