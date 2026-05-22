var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/kpis/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarKpis(req, res);
});

router.get("/acertos-erros/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarAcertosErros(req, res);
});

module.exports = router;
