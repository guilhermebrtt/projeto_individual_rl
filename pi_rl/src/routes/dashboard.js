var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/kpis/:idUsuario/:dificuldade", function (req, res) {
  dashboardController.buscarKpis(req, res);
});

module.exports = router;
