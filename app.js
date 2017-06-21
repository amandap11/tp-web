let express = require('express'),
    app = express();

var path = require('path');
var fs = require('fs');

var fs = require('fs');
var _ = require('underscore');

var db = {
	dados: JSON.parse(fs.readFileSync(__dirname + "/data/dados.json"))
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
//app.use(express.static(__dirname + '/views'));

var db = {
	//classificacoes: JSON.parse(fs.readFileSync(__dirname + "/data/classificacao-specs.json")),
	itens: JSON.parse(fs.readFileSync(__dirname + "/data/item-specs.json"))
};

let server = app.listen(process.env.PORT || 3000, function () {
  	console.log('process.env.PORT');
});

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.render('index', db.classificacoes);
=======
  response.render('index', db.dados);
>>>>>>> amanda3
});

module.exports = app;