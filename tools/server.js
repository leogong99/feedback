/*
 * node static file server:
 * modified from https://gist.github.com/rpflorence/701407
 */
/*jslint evil: true, nomen: true, sloppy: true */

var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log(addresses);

var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    port = process.argv[2] || 80,
    types = {
        'html': 'text/html',
        'js': 'application/javascript'
    },
    site = 'http://' + addresses[0] + ':' + port;

http.createServer(function (request, response) {
    var uri = url.parse(request.url).pathname,
        filename = path.join(__dirname, '..', uri);

    fs.exists(filename, function (exists) {
      if (!exists) {
          response.writeHead(404, {'Content-Type': 'text/plain'});
          response.write('404 Not Found\n');
          response.end();
          return;
      }

      if(!fs.lstatSync(filename).isDirectory()) {
            var type = filename.split('.');
            type = type[type.length - 1];

            response.writeHead(200, { 'Content-Type': types[type] + '; charset=utf-8' });
            fs.createReadStream(filename).pipe(response);
      } else {
        /**
         * if users visit the site such as http://localhost:8888
         * then lead them to http://localhost:8888/www/app.html
         */
        response.writeHead(301, {'Location': site + '/www/app.html' });
        response.end();
     }
  });
}).listen(parseInt(port, 10));

console.log('Static file server running at\n  => ' + site + '/\nCTRL + C to shutdown');
