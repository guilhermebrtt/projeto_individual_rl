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

function buscarAcertosErros(idUsuario, dificuldade) {
  let instrucaoSql = "";

  if (dificuldade == "geral") {
    instrucaoSql = `
      SELECT
        SUM(CASE WHEN acertou = 1 THEN 1 ELSE 0 END) AS acertos,
        SUM(CASE WHEN acertou = 0 THEN 1 ELSE 0 END) AS erros
      FROM resposta_usuario ru
      INNER JOIN tentativa_quiz tq
      ON tq.id_tentativa = ru.fk_tentativa
      WHERE tq.fk_usuario = ${idUsuario};
    `;
  } else {
    instrucaoSql = `
      SELECT
        SUM(CASE WHEN ru.acertou = 1 THEN 1 ELSE 0 END) AS acertos,
        SUM(CASE WHEN ru.acertou = 0 THEN 1 ELSE 0 END) AS erros
      FROM resposta_usuario ru

      INNER JOIN tentativa_quiz tq
      ON tq.id_tentativa = ru.fk_tentativa

      INNER JOIN pergunta p
      ON p.id_pergunta = ru.fk_pergunta

      WHERE tq.fk_usuario = ${idUsuario}
      AND p.nivel_dificuldade = '${dificuldade}';
    `;
  }

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarKpis,
  buscarAcertosErros,
};
