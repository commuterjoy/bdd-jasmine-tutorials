
var express = require('express')
  , path = require('path')
  , http = require('http');

var app = express();

app.configure(function() {
    app.set('port', 3000);
    app.use(express.logger('dev'));
    app.use(express.static(path.join(__dirname, '.')));
    });

app.get('/', function(req, res) {
    
    var specs = [3,4,5,6,8].map(function(i){
        var href = 'tests/' + i + '/runner.html'
        return '<li style="line-height: 200%"><a href="'+href+'">'+href+'</a></li>'
    }) 

    res.setHeader('Content-Type', 'text/html');
    res.end(specs.join(''));

})

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
