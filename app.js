let express = require('express'),
    app = express();

var path = require('path');
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
//app.use(express.static(__dirname + '/views'));

var db = {
	classificacoes: JSON.parse(fs.readFileSync(__dirname + "/data/classificacao-specs.json")),
	itens: JSON.parse(fs.readFileSync(__dirname + "/data/item-specs.json"))
};

let server = app.listen(process.env.PORT || 3000, function () {
	console.log(__dirname + "/data/classificacao-specs.json");
	console.log(__dirname + "/data/item-specs.json");
  	console.log('process.env.PORT');
});

app.get('/', function(request, response) {
  response.render('index', db.classificacoes);
});

module.exports = app;