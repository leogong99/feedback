define(["require", "jquery", "react", "feedback"], function(require, $, React, feedback) {

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
	Feedback({h2cPath:'lib/html2canvas.js'});
	return jQuery.noConflict(true);
});
