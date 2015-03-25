  var script = document.createElement('script');
  script.setAttribute('src', 'http://jingong.desktop.amazon.com:3001/javascripts/lib/require.js');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('data-main', 'http://jingong.desktop.amazon.com:3001/javascripts/app');
  var head  = document.getElementsByTagName('head')[0];
  head.appendChild(script);