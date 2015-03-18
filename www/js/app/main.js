define(["jquery", "react", "html2canvas"], function($, React, html2canvas) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
   // tutorial1-raw.js
	var CommentBox = React.createClass({displayName: 'CommentBox',
	  render: function() {
	    return (
	      React.createElement('div', {className: "commentBox"},
	        "Hello, world! I am a CommentBox."
	      )
	    );
	  }
	});
	React.render(
	  React.createElement(CommentBox, null),
	  document.getElementsByTagName('feedback')[0]
	);
	return jQuery.noConflict(true);
});
