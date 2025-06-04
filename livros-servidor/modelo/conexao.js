const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/livraria')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;