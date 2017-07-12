var mongoose = require('mongoose');

var doadorSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    default: '' 
  },
  dataNascimento: Date,
  endereco: String,
  telefone: String,
  cpf: String,
  email: String,
  login: { 
    type: String, 
    unique: true, 
    lowercase: true 
  },
  senha: String,
  confirmarSenha: String
});

doadorSchema.pre('save', function (next) {
  var doador = this;
  next();
});

module.exports = mongoose.model('Doador', doadorSchema);