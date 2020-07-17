var express = require('express');
var Cliente = require('../models/cliente');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cpf = req.query.cpf;
  var cliente = new Cliente();
  cliente.cpf = cpf;
  let cpfValidado = cliente.validateCPF();
  res.render('index', { title: 'PROMOCAO', cpfValidado:cpfValidado, cpf:cpf });
});

module.exports = router;
