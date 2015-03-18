javascript: (function() {
    var script = document.createElement('script');
    script.setAttribute('src', '127.0.0.1:8888/www/js/lib/require.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-main', 'js/app');
    document.getElementsByTagName('head')[0].appendChild(script);
})();
