var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
    response.send(cool());
});

app.listen(app.get('port'), function() {
    console.log("my Node app is running at localhost:" + app.get('port'))
})