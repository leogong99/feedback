javascript: (function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'http://54.68.180.166/www/js/lib/require.js');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('data-main', 'http://54.68.180.166/www/js/app');
  var head  = document.getElementsByTagName('head')[0];
  head.appendChild(script);
})();
