let express = require('express'),
    app = express();

var path = require('path');
//var hbs = require('handlebars');
//var hbs = require('express-hbs');

var fs = require('fs');
var _ = require('underscore');

var db = {
	dados: JSON.parse(fs.readFileSync(__dirname + "/data/dados.json"))
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'css')));

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
//app.use(express.static(__dirname + '/views'));

let server = app.listen(process.env.PORT || 3000, function () {
  console.log('Escutando em: http://localhost:3000');
});

app.get('/', function(request, response) {
  response.render('index', db.dados);
});

module.exports = app;