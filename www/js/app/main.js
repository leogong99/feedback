define(["require", "jquery", "react", "feedback", "html2canvas"], function(require, $, React, feedback, html2canvas) {

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
	Feedback({h2cPath: html2canvas});
	return jQuery.noConflict(true);
});
