var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/kpis/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarKpis(req, res);
});

router.get("/acertos-erros/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarAcertosErros(req, res);
});

router.get("/categoriaDestaque/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarCategoriaDestaque(req, res);
});

router.get("/analisarResultado/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.analisarResultado(req, res);
});

module.exports = router;
