exports.save = function(req, res) {
	var data = JSON.parse(req.body.data);
	var comment = data[0].Issue;
	var fs = require('fs');
	var img = data[1];
	var image = '';
	console.dir(req.body);
	console.log('------------------------');
	console.log('User comment: ' + comment);
	console.log('------------------------');
	var time = new Date().getTime();
	img = img.replace(/^data:image\/png;base64,/, "");
	fs.writeFile('./public/images/screenshot_' + time + '.png', img, 'base64', function(err) {
		if (err) throw err;
		console.log('File saved.');
	});

	console.log('Screen shot: ' + '/images/screenshot_' + time + '.png');
	res.end("yes");
};