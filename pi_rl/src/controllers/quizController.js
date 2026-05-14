var quizModel = require("../models/quizModel");

function listarPerguntasQuiz(req, res) {
  var dificuldade = req.params.dificuldade;

  if (dificuldade == undefined) {
    res.status(400).send("A dificuldade está undefined!");
  } else {
    quizModel
      .listarPerguntasQuiz(dificuldade)
      .then(function (resultado) {
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao buscar as perguntas! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

async function finalizarQuiz(req, res) {
  var idUsuario = req.body.idUsuario;
  var pontuacao = req.body.pontuacao;
  var acertos = req.body.acertos;
  var erros = req.body.erros;
  var tempo = req.body.tempo;
  var respostas = req.body.respostas;

  if (
    idUsuario == undefined ||
    pontuacao == undefined ||
    acertos == undefined ||
    erros == undefined ||
    tempo == undefined ||
    respostas == undefined
  ) {
    res.status(400).send("Dados do quiz incompletos!");
    return;
  }

  try {
    var resultadoTentativa = await quizModel.cadastrarTentativa(
      idUsuario,
      pontuacao,
      acertos,
      erros,
      tempo,
    );

    var idTentativa = resultadoTentativa.insertId;

    for (var i = 0; i < respostas.length; i++) {
      await quizModel.cadastrarResposta(
        idTentativa,
        respostas[i].idPergunta,
        respostas[i].respostaMarcada,
        respostas[i].acertou,
        respostas[i].tempoPergunta,
      );
    }

    res.status(200).json({
      mensagem: "Quiz finalizado com sucesso!",
      idTentativa: idTentativa,
    });
  } catch (erro) {
    console.log(erro);
    console.log("\nHouve um erro ao finalizar o quiz! Erro: ", erro.sqlMessage);

    res.status(500).json(erro.sqlMessage);
  }
}

module.exports = {
  listarPerguntasQuiz,
  finalizarQuiz,
};
