var database = require("../database/config");

function buscarKpis(idUsuario, dificuldade) {
  let instrucaoSql = "";

  if (dificuldade == "geral") {
    instrucaoSql = `
      SELECT 
        IFNULL(COUNT(id_tentativa), 0) AS quizzes,

        IFNULL(MAX(pontuacao), 0) AS melhorPontuacao,

        IFNULL(
          ROUND(
            AVG(
              (qtd_acertos / (qtd_acertos + qtd_erros)) * 100
            ),
          1),
        0) AS mediaAproveitamento,

        IFNULL(
          ROUND(AVG(tempo_total), 1),
        0) AS tempoMedio

      FROM tentativa_quiz

      WHERE fk_usuario = ${idUsuario};
    `;
  } else {
    instrucaoSql = `
      SELECT 
        IFNULL(COUNT(DISTINCT tq.id_tentativa), 0) AS quizzes,

        IFNULL(MAX(tq.pontuacao), 0) AS melhorPontuacao,

        IFNULL(
          ROUND(
            AVG(
              (tq.qtd_acertos / (tq.qtd_acertos + tq.qtd_erros)) * 100
            ),
          1),
        0) AS mediaAproveitamento,

        IFNULL(
          ROUND(AVG(tq.tempo_total), 1),
        0) AS tempoMedio

      FROM tentativa_quiz tq

      INNER JOIN resposta_usuario ru
      ON ru.fk_tentativa = tq.id_tentativa

      INNER JOIN pergunta p
      ON p.id_pergunta = ru.fk_pergunta

      WHERE tq.fk_usuario = ${idUsuario}
      AND p.nivel_dificuldade = '${dificuldade}';
    `;
  }
  console.log(instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarKpis,
};
