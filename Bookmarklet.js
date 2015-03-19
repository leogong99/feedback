javascript: (function() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://54.68.180.166/www/js/lib/require.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-main', 'http://54.68.180.166/www/js/app');
    
    document.getElementsByTagName('body')[0].appendChild(document.createElement('feedback'));
    
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://54.68.180.166/www/css/feedback.min.css';
    link.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(script).appendChild(link);
})();
