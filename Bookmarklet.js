javascript: (function() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://54.148.79.245/www/js/lib/require.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-main', 'http://54.148.79.245/www/js/app');
    document.getElementsByTagName('head')[0].appendChild(script);
    document.getElementsByTagName('body')[0].appendChild(document.createElement('feedback'));
})();
