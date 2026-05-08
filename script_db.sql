CREATE DATABASE RocketLeague;
USE RocketLeague;

DROP TABLE resposta_usuario;
DROP TABLE tentativa_quiz;
DROP TABLE pergunta;
DROP TABLE categoria;
DROP TABLE usuario;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome_usuario VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(255) NOT NULL,
dt_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categoria(
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR(30) NOT NULL CHECK (nomeCategoria IN ('Gamleplay', 'Conceitos', 'Competitivo'))
);

CREATE TABLE pergunta(
id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(255) NOT NULL,
alternativa_a VARCHAR(255) NOT NULL,
alternativa_b VARCHAR(255) NOT NULL,
alternativa_c VARCHAR(255) NOT NULL,
alternativa_d VARCHAR(255) NOT NULL,
alternativa_e VARCHAR(255) NOT NULL,
alternativa_correta CHAR(1) NOT NULL,
fk_categoria INT NOT NULL,
nivel_dificuldade VARCHAR(20) NOT NULL, 

FOREIGN KEY (fk_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE tentativa_quiz(
id_tentativa INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT NOT NULL,
pontuacao INT NOT NULL,
qtd_acertos INT NOT NULL,
qtd_erros INT NOT NULL,
tempo_total INT NOT NULL,
data_tentativa DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE resposta_usuario(
id_resposta INT PRIMARY KEY AUTO_INCREMENT,
fk_tentativa INT NOT NULL,
fk_pergunta INT NOT NULL,
reposta_marcada CHAR(1) NOT NULL,
acertou BOOLEAN NOT NULL,
tempo_pergunta INT NOT NULL,

FOREIGN KEY (fk_tentativa) REFERENCES tentativa_quiz(id_tentativa),
FOREIGN KEY (fk_pergunta) REFERENCES pergunta(id_pergunta)
);





