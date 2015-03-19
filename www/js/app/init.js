define(function(){  
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'http://54.68.180.166/www/css/feedback.css';
  link.media = 'all';
  

  var feedbackContainer = document.createElement('feedback');
  feedbackContainer.style.width = "100%";
  feedbackContainer.style.height = "100%";
  feedbackContainer.style.position = "fixed";
  document.getElementsByTagName('body')[0].appendChild(feedbackContainer);
  document.getElementsByTagName('head')[0].appendChild(link);
  var link1  = document.createElement('link');
  link1.rel  = 'stylesheet';
  link1.type = 'text/css';
  link1.media = 'all';
  link1.href = 'http://54.68.180.166/www/css/bootstrap.css';
  document.getElementsByTagName('head')[0].appendChild(link1);
});