var quizModel = require("../models/quizModel");

function listarPerguntasQuiz(req, res) {
  var dificuldade = req.params.dificuldade;
  quizModel
    .listarPerguntasQuiz(dificuldade)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro);
    });
}

function finalizarQuiz(req, res) {
  console.log("BODY RECEBIDO:");
  console.log(req.body);

  const idUsuario = req.body.idUsuarioServer;
  const pontuacao = req.body.pontuacaoServer;
  const acertos = req.body.acertosServer;
  const erros = req.body.errosServer;
  const tempo = req.body.tempoServer;
  const respostas = req.body.respostasServer;
  const dificuldade = req.body.dificuldadeServer;

  if (
    idUsuario == undefined ||
    pontuacao == undefined ||
    acertos == undefined ||
    erros == undefined ||
    tempo == undefined ||
    respostas == undefined ||
    dificuldade == undefined
  ) {
    res.status(400).send("Dados undefined");
    return;
  }

  quizModel
    .cadastrarTentativa(
      idUsuario,
      pontuacao,
      acertos,
      erros,
      tempo,
      dificuldade,
    )

    .then(function (resultadoTentativa) {
      const idTentativa = resultadoTentativa.insertId;
      let promises = [];

      for (let i = 0; i < respostas.length; i++) {
        const resposta = respostas[i];

        promises.push(
          quizModel.cadastrarResposta(
            idTentativa,
            resposta.idPergunta,
            resposta.respostaMarcada,
            resposta.acertou ? 1 : 0,
            0,
          ),
        );
      }

      return Promise.all(promises);
    })

    .catch(function (erro) {
      console.log("ERRO NO BACK:");
      console.log(erro);

      res.status(500).json(erro);
    });
}

module.exports = {
  listarPerguntasQuiz,
  finalizarQuiz,
};
