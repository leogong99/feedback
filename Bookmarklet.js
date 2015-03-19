javascript: (function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'http://54.68.180.166/www/js/lib/require.js');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('data-main', 'http://54.68.180.166/www/js/app');
   var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'http://54.68.180.166/www/css/feedback.css';
  link.media = 'all';
  
  document.getElementsByTagName('head')[0].appendChild(script);
  document.getElementsByTagName('body')[0].appendChild(document.createElement('feedback'));
  document.getElementsByTagName('head')[0].appendChild(link);
  var link1  = document.createElement('link');
  link1.rel  = 'stylesheet';
  link1.type = 'text/css';
  link1.media = 'all';
  link1.href = 'http://54.68.180.166/www/css/bootstrap.css';
  document.getElementsByTagName('head')[0].appendChild(link1);
})();
