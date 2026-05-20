var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/listarPerguntasQuiz/:dificuldade", function (req, res) {
  quizController.listarPerguntasQuiz(req, res);
});

router.post("/finalizarQuiz", function (req, res) {
  console.log("finalizarQuiz aqui");

  quizController.finalizarQuiz(req, res);
});

module.exports = router;
