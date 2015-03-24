javascript: (function() {
	var script = document.createElement('script');
	script.setAttribute('src', 'http://localhost:3000/javascripts/lib/require.js');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('data-main', 'http://localhost:3000/javascripts/app');
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
})();