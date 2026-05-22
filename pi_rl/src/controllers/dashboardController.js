var dashboardModel = require("../models/dashboardModel");

function buscarKpis(req, res) {
  var idUsuario = req.params.idUsuario;
  var dificuldade = req.params.dificuldade;

  dashboardModel
    .buscarKpis(idUsuario, dificuldade)
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarAcertosErros(req, res) {
  const idUsuario = req.params.idUsuario;
  const dificuldade = req.params.dificuldade;

  dashboardModel
    .buscarAcertosErros(idUsuario, dificuldade)

    .then(function (resultado) {
      console.log("Resultado Acertos/Erros:", resultado);

      res.status(200).json(resultado);
    })

    .catch(function (erro) {
      console.log("Erro ao buscar acertos e erros:", erro);

      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarKpis,
  buscarAcertosErros,
};
