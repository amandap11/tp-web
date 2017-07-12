let express = require('express'),
    app = express();

var path = require('path');
var fs = require('fs');

//MongoDB
var mongoose = require('mongoose');
var secrets = require('./data/secrets');
var dbcon = secrets.db;
var MongoClient = require('mongodb').MongoClient;

//Doador
var doadorRoute = require('./routes/doador');

// Connect to the db
MongoClient.connect(dbcon, function(err, db) {
  if(err) { 
  	return console.error('MongoDB Connection Error. Please make sure that MongoDB is running.'); 
  }
});


var db = {
	dados: JSON.parse(fs.readFileSync(__dirname + "/data/dados.json"))
};

var doadorProvisorio = {
	nome: "Amanda Pereira",
	dataNascimento: "11/03/1993",
	endereco: "Rua Três, nº 25, Bairro das Couves, Belo Horizonte",
	telefone: "3333-2222",
	cpf: "123456789-11",
	email: "amanda@amanda.com",
	senha: "123456",
	confirmarSenha:"123456"
}

var pontoColetaProvisorio = {
	nome: "Lar das crianças",
	endereco: "Rua Quatro, nº 10, Bairro Floresta, Belo Horizonte",
	telefone: "3333-1111",
	email: "lar@lar.com",
	senha: "123456",
	confirmarSenha:"123456"
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
//app.use(express.static(path.join(__dirname + 'views')));

var porta = process.env.PORT || 3000;

let server = app.listen(porta, function () {
  console.log('Escutando em: http://localhost:' + porta);
});

app.get('/', function(request, response) {
  response.render('index', db.dados);
});

app.get('/login', function(request, response) {
  response.render('login');
});

app.get('/cadastroDoador', function(request, response) {
  response.render('cadastroDoador');
});

//CORRIGIR ISSO AQUI!!
app.post('/editarConta', doadorRoute);

app.get('/loginPontoDeColeta', function(request, response) {
  response.render('loginPontoDeColeta');
});

app.get('/cadastroPontoDeColeta', function(request, response) {
  response.render('cadastroPontoDeColeta');
});

app.get('/locais', function(request, response) {
  response.render('locais');
});

app.get('/faleConosco', function(request, response) {
  response.render('faleConosco');
});

app.get('/minhaContaDoador', function(request, response) {
  response.render('minhaContaDoador', doadorProvisorio);
});

app.get('/minhaContaPontoColeta', function(request, response) {
  response.render('minhaContaPontoColeta', pontoColetaProvisorio);
});

app.get('/editarConta', function(request, response) {
  response.render('editarConta', doadorProvisorio);
});

app.get('/editarContaPontoColeta', function(request, response) {
  response.render('editarContaPontoColeta', pontoColetaProvisorio);
});

app.get('/registrarDoacao', function(request, response) {
  response.render('registrarDoacao');
});

app.get('/usarMoedas', function(request, response) {
  response.render('usarMoedas');
});

module.exports = app;