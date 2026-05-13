var database = require("../database/config");

function listarPerguntasQuiz(dificuldade) {
  var instrucaoSql = `SELECT * FROM pergunta WHERE nivel_dificuldade = '${dificuldade}'`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarTentativa(idUsuario, pontuacao, acertos, erros, tempo) {
  var instrucaoSql = `
    INSERT INTO tentativa_quiz
    (
      fk_usuario,
      pontuacao,
      qtd_acertos,
      qtd_erros,
      tempo_total
    )
    VALUES
    (
      ${idUsuario},
      ${pontuacao},
      ${acertos},
      ${erros},
      ${tempo}
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

function salvarResultado(idUsuario, acertos, erros, dificuldade, tempo) {
  var instrucaoSql = `INSERT INTO resultado`;
}
