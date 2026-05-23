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
        SUM(qtd_acertos) AS acertos,
        SUM(qtd_erros) AS erros

      FROM tentativa_quiz

      WHERE fk_usuario = ${idUsuario};
    `;
  } else {
    instrucaoSql = `
      SELECT
        qtd_acertos AS acertos,
        qtd_erros AS erros

      FROM tentativa_quiz

      WHERE id_tentativa = (
        SELECT MAX(id_tentativa)
        FROM tentativa_quiz
        WHERE fk_usuario = ${idUsuario}
        AND dificuldade = '${dificuldade}'
);
    `;
  }

  console.log(instrucaoSql);

  return database.executar(instrucaoSql);
}

function buscarCategoriaDestaque(idUsuario) {
  const instrucaoSql = `
    SELECT
      c.nome_categoria,

      ROUND(
        AVG(
          CASE
            WHEN ru.acertou = 1 THEN 100
            ELSE 0
          END
        ),
      1) AS aproveitamento

    FROM resposta_usuario ru

    INNER JOIN tentativa_quiz tq
    ON tq.id_tentativa = ru.fk_tentativa

    INNER JOIN pergunta p
    ON p.id_pergunta = ru.fk_pergunta

    INNER JOIN categoria c
    ON c.id_categoria = p.fk_categoria

    WHERE tq.fk_usuario = ${idUsuario}

    GROUP BY c.nome_categoria;
  `;
  return database.executar(instrucaoSql);
}

function analisarResultado(idUsuario) {
  const instrucaoSql = `
    SELECT
      p.pergunta,
      ru.resposta_marcada,
      p.alternativa_correta,
      ru.acertou

    FROM resposta_usuario ru

    INNER JOIN pergunta p
    ON ru.fk_pergunta = p.id_pergunta

    INNER JOIN tentativa_quiz tq
    ON ru.fk_tentativa = tq.id_tentativa

    WHERE tq.fk_usuario = ${idUsuario}

    ORDER BY ru.id_resposta DESC;
  `;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarKpis,
  buscarAcertosErros,
  buscarCategoriaDestaque,
  analisarResultado,
};
