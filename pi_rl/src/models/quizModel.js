var database = require("../database/config");

function listarPerguntasQuiz(dificuldade) {
  var instrucaoSql = `
    SELECT * FROM pergunta
    WHERE nivel_dificuldade = '${dificuldade}';
  `;

  return database.executar(instrucaoSql);
}

function cadastrarTentativa(
  idUsuario,
  pontuacao,
  acertos,
  erros,
  tempo,
  dificuldade,
) {
  var instrucaoSql = `
    INSERT INTO tentativa_quiz
    (
      fk_usuario,
      pontuacao,
      qtd_acertos,
      qtd_erros,
      tempo_total,
      dificuldade
    )
    VALUES
    (
      ${idUsuario},
      ${pontuacao},
      ${acertos},
      ${erros},
      ${tempo},
      '${dificuldade}'
    );
  `;

  return database.executar(instrucaoSql);
}

function cadastrarResposta(
  idTentativa,
  idPergunta,
  respostaMarcada,
  acertou,
  tempoPergunta,
) {
  var instrucaoSql = `
    INSERT INTO resposta_usuario
    (
      fk_tentativa,
      fk_pergunta,
      resposta_marcada,
      acertou,
      tempo_pergunta
    )
    VALUES
    (
      ${idTentativa},
      ${idPergunta},
      '${respostaMarcada}',
      ${acertou},
      ${tempoPergunta}
    );
  `;

  return database.executar(instrucaoSql);
}

module.exports = {
  listarPerguntasQuiz,
  cadastrarTentativa,
  cadastrarResposta,
};
