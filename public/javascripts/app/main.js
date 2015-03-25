define(["require", "jquery", "react", "feedback", "html2canvas", "init"], function(require, $, React, feedback, html2canvas, init) {
	Feedback({
		h2cPath: html2canvas,
		url: 'http://jingong.desktop.amazon.com:3001/feedback'
	});
	return jQuery.noConflict(true);
});