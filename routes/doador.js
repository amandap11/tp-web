var express = require('express');
var User = require('../models/Doador');

var router = express.Router();

router.get('/cadastroDoador/', function(req, res) {
  res.render('/cadastroDoador');
});

router.post('/', function(req, res) {

  var doador = new Doador ({
    nome: db.escape(req.body.nomeDoador),
    dataNascimento: db.escape(req.body.dataNascimentoDoador),
    endereco: db.escape(req.body.enderecoDoador),
    telefone: db.escape(req.body.telefoneDoador),
    cpf: db.escape(req.body.cpfDoador),
    email: db.escape(req.body.emailDoador),
    login: db.escape(req.body.loginDoador),
    senha: db.escape(req.body.passwordDoador),
    confirmarSenha: db.escape(req.body.confirmaPasswordDoador)
  });

  doador.save(function (err) {
    if (err) { 
      console.log('Não foi possível concluir o cadastro do usuário.');
      return next(err);
    };
    res.redirect('/minhaContaDoador');
  });
});

module.exports = router;
