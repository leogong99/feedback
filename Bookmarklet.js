javascript: (function() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://54.68.180.166/www/js/lib/require.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-main', 'http://54.68.180.166/www/js/app');
    
    document.getElementsByTagName('body')[0].appendChild(document.createElement('feedback'));
    document.getElementsByTagName('head')[0].appendChild(script);
})();
