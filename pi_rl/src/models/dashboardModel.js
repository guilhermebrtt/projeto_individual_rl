var database = require("../database/config");

function buscarKpis(idUsuario, dificuldade) {
  let instrucaoSql = "";

  if (dificuldade == "geral") {
    instrucaoSql = `
      SELECT 
        MAX(pontuacao) AS melhorPontuacao,

        ROUND(AVG(
          (qtd_acertos / (qtd_acertos + qtd_erros)) * 100
        ), 1) AS mediaAproveitamento,

        ROUND(AVG(tempo_total), 1) AS tempoMedio

      FROM tentativa_quiz

      WHERE fk_usuario = ${idUsuario};
    `;
  } else {
    instrucaoSql = `
      SELECT 
        MAX(tq.pontuacao) AS melhorPontuacao,

        ROUND(AVG(
          (tq.qtd_acertos / (tq.qtd_acertos + tq.qtd_erros)) * 100
        ), 1) AS mediaAproveitamento,

        ROUND(AVG(tq.tempo_total), 1) AS tempoMedio

      FROM tentativa_quiz tq

      INNER JOIN pergunta p
      ON p.nivel_dificuldade = '${dificuldade}'

      WHERE tq.fk_usuario = ${idUsuario};
    `;
  }

  console.log(instrucaoSql);

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarKpis,
};
