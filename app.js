let express = require('express'),
    app = express();

var path = require('path');
//var hbs = require('handlebars');
var hbs = require('express-hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
app.use(express.static(__dirname + '/views'));

let server = app.listen(3000, function () {
  console.log('Escutando em: http://localhost:3000');
});

app.get('/', function(request, response) {
  response.render('index');
});

module.exports = app;