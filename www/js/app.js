// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "http://54.68.180.166/www/js/lib",
    "paths": {
      "app": "../app",
      "react": "react-with-addons",
      "JSXTransformer": "JSXTransformer"
    },
     "shim": {
        "jquery.alpha": ["jquery"]
    },
    'jsx': {
      fileExtension: '.jsx'
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
