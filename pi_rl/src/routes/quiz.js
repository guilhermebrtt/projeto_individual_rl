var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/listarPerguntasQuiz/:dificuldade", function (req, res) {
  quizController.listarPerguntasQuiz(req, res);
});

router.post("/finalizarQuiz", function (req, res) {
  quizController.finalizarQuiz(req, res);
});

router.get("/buscarKPIs/:idUsuario", function (req, res) {
  quizController.buscarKPIs(req, res);
});

module.exports = router;
