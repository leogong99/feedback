exports.save = function(req, res) {
	var util = require('util');
	var data = JSON.parse(req.body.feedback);
	var comment = data.note;
	var fs = require('fs');
	var img = data.img;
	var image = '';
	console.log('------------------------');
	console.log('User comment: ' + comment);
	console.log('------------------------');
	var time = new Date().getTime();
	img = img.replace(/^data:image\/png;base64,/, "");
	fs.writeFile('./public/images/screenshot_' + time + '.png', img, 'base64', function(err) {
		if (err) throw err;
		console.log('File saved.');
	});
	console.log('your browser info: ');
	console.dir(data.browser);
	console.log('url info: ');
	console.dir(data.url);
	console.log('html info: ');
	console.dir('n/a');
	console.log('Screen shot: ' + '/images/screenshot_' + time + '.png');
	res.end("yes");
};