define(function() {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'http://jingong.desktop.amazon.com:3001/stylesheets/feedback.min.css';
	link.media = 'all';

	var head = document.getElementsByTagName('body')[0];
	head.appendChild(document.createElement('feedback'));
	head.appendChild(link);
	var link1 = document.createElement('link');
	link1.rel = 'stylesheet';
	link1.type = 'text/css';
	link1.media = 'all';
	link1.href = 'http://jingong.desktop.amazon.com:3001/stylesheets/bootstrap.css';
	head.appendChild(link1);
});