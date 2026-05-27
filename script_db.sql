CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome_usuario VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(255) NOT NULL,
dt_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categoria(
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR(30) NOT NULL
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
dificuldade VARCHAR(50),
data_tentativa DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE resposta_usuario(
id_resposta INT PRIMARY KEY AUTO_INCREMENT,
fk_tentativa INT NOT NULL,
fk_pergunta INT NOT NULL,
resposta_marcada CHAR(1) NOT NULL,
acertou TINYINT NOT NULL,
tempo_pergunta INT NOT NULL,

FOREIGN KEY (fk_tentativa) REFERENCES tentativa_quiz(id_tentativa),
FOREIGN KEY (fk_pergunta) REFERENCES pergunta(id_pergunta)
);

 INSERT INTO categoria (nome_categoria) VALUES
('Geral e Esports'),                  
('Modos de Jogo e Itens'),             
('Configurações e Fundamentos'),      
('Mecânicas Básicas e Intermediárias'),
('Mecânicas Avançadas');

INSERT INTO pergunta 
(pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, alternativa_correta, fk_categoria, nivel_dificuldade)
VALUES
(
'Qual empresa desenvolveu o Rocket League?',
'Valve', 'Ubisoft', 'Psyonix', 'EA Sports', 'Riot Games', 
'C', 1, 'facil'
),
(
'Qual plataforma NÃO possui Rocket League oficialmente?',
'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'Nintendo Wii', 
'E', 1, 'facil'
),
(
'Qual equipe brasileira compete na RLCS?',
'LOUD', 'FURIA', 'Fluxo', 'Pain Gaming', 'MIBR', 
'B', 1, 'facil'
),
(
'O que é a RLCS?',
'Modo casual', 'Loja de itens', 'Campeonato mundial oficial', 'Sistema de ranking', 'Modo mobile', 
'C', 1, 'facil'
),
(
'Qual plataforma é usada no PC para baixar Rocket League?',
'Steam obrigatoriamente', 'Origin', 'Epic Games Store', 'Battle.net', 'Ubisoft Connect', 
'C', 1, 'facil'
),
(
'O que significa MMR?',
'Sistema de física', 'Pontuação competitiva oculta', 'Modo de treinamento', 'Tipo de carro', 'Velocidade máxima', 
'B', 1, 'medio'
),
(
'Qual carro é conhecido pela hitbox equilibrada e mais popular no competitivo?',
'Plank', 'Dominus', 'Breakout', 'Octane', 'Merc', 
'D', 1, 'medio'
),
(
'Qual dessas hitboxes pertence ao famoso carro "Fennec"?',
'Dominus', 'Breakout', 'Octane', 'Hybrid', 'Plank', 
'C', 1, 'medio'
),
(
'Qual habilidade é mais importante para melhorar continuamente?',
'Decoração do carro', 'Reflexo e prática', 'Comprar créditos', 'Mudar câmera', 'Jogar casual', 
'B', 1, 'medio'
),
(
'Qual é a patente mais alta do Rocket League?',
'Grande Campeão', 'Diamante', 'SSL', 'Campeão', 'Platina', 
'C', 1, 'medio'
),
(
'O Breeze Flick é considerado:',
'Uma mecânica de drible avançada', 'Um modo de jogo extra', 'Uma técnica de defesa aérea', 'Uma configuração de câmera de pro-player', 'Um modelo de carro antigo', 
'A', 1, 'dificil'
),
(
'O termo "Ceiling Shuffle" refere-se a:',
'Ficar deslizando continuamente pelas paredes laterais', 'Manter o carro andando de cabeça para baixo no teto da arena alternando as rodas', 'Um drible onde a bola quica no teto', 'Trocar de carro no meio da partida', 'Fazer gols usando o comando de girar no ar', 
'B', 1, 'dificil'
),
(
'Qual é o modo competitivo mais popular do Rocket League?',
'1x1', '2x2', '3x3', 'Rumble', 'Hoops', 
'B', 2, 'facil'
),
(
'Qual moeda virtual é usada na loja do Rocket League?',
'Coins', 'Credits', 'RL Points', 'V-Bucks', 'Tokens', 
'B', 2, 'facil'
),
(
'Qual é o nome do passe de temporada do Rocket League?',
'Battle Stars', 'Rocket Pass', 'Competitive Pass', 'Boost Pass', 'RL Prime', 
'B', 2, 'facil'
),
(
'Qual modo extra utiliza poderes aleatórios?',
'Hoops', 'Snow Day', 'Dropshot', 'Rumble', 'Duelo', 
'D', 2, 'facil'
),
(
'Qual modo transforma o Rocket League em uma partida de basquete?',
'Dropshot', 'Rumble', 'Hoops', 'Snow Day', 'Heatseeker', 
'C', 2, 'facil'
),
(
'Qual item NÃO altera atributos do carro?',
'Boost', 'Rodas', 'Pintura', 'Chassi', 'Todos os itens cosméticos', 
'E', 2, 'facil'
),
(
'Qual modo utiliza um disco no lugar da bola?',
'Hoops', 'Snow Day', 'Dropshot', 'Heatseeker', 'Knockout', 
'B', 2, 'facil'
),
(
'Qual versão mobile oficial do Rocket League existe?',
'Rocket League Go', 'Rocket League Mobile', 'Sideswipe', 'Rocket Arena', 'RL Pocket', 
'C', 2, 'facil'
),
(
'Rocket League Sideswipe possui jogabilidade:',
'3D', 'VR', '2D', 'Texto', 'RTS', 
'C', 2, 'facil'
),
(
'Qual destes é um modo padrão?',
'2x2', 'Rumble', 'Hoops', 'Snow Day', 'Dropshot', 
'A', 2, 'facil'
),
(
'Qual item representa a explosão ao marcar um gol?',
'Boost', 'Decal', 'Goal Explosion', 'Topper', 'Trail', 
'C', 2, 'facil'
),
(
'No modo extra Dropshot, como os gols são marcados?',
'Chutando na trave', 'Quebrando o chão do lado adversário', 'Cravando a bola na cesta', 'Destruindo o gol com Rumble', 'Acertando o teto', 
'B', 2, 'medio'
),
(
'Quantos jogadores compõem uma equipe no modo padrão clássico (Standard)?',
'1', '2', '3', '4', '5', 
'C', 3, 'facil'
),
(
'Qual é a core padrão dos dois times principais em uma partida normal?',
'Verde e Vermelho', 'Preto e Branco', 'Azul e Laranja', 'Amarelo e Roxo', 'Rosa e Cinza', 
'C', 3, 'facil'
),
(
'Qual botão é usado para pular por padrão nos consoles?',
'Gatilho esquerdo', 'Analógico direito', 'Botão inferior da face (X/A)', 'Botão de opções', 'D-Pad para cima', 
'C', 3, 'facil'
),
(
'Qual conceito é considerado o mais importante em equipe?',
'Flip Reset', 'Rotação', 'Air Dribble', 'Bump', 'Ceiling Shot', 
'B', 3, 'medio'
),
(
'Qual é o objetivo da rotação?',
'Deixar todos atacando', 'Alternar posições entre ataque e defesa', 'Ficar parado no gol', 'Pegar boost infinito', 'Somente fazer passes', 
'B', 3, 'medio'
),
(
'Qual recurso deve ser controlado constantemente durante a partida?',
'Rodas', 'Boost', 'Ping', 'MMR', 'Rank', 
'B', 3, 'medio'
),
(
'Quanto de boost um jogador começa imediatamente após um gol ou no início da partida?',
'0', '25', '33', '50', '100', 
'C', 3, 'medio'
),
(
'Qual o tempo de duração padrão de uma partida normal sem prorrogação?',
'3 minutos', '5 minutos', '7 minutos', '10 minutos', 'Exclusivo por limite de gols', 
'B', 3, 'medio'
),
(
'O Shadow Defense consiste em:',
'Atacar constantemente sem olhar para trás', 'Defender correndo na mesma direção do ataque oponente, espelhando a jogada', 'Usar pouco boost na linha de fundo', 'Ficar parado dentro do gol esperando o chute', 'Dar bump no atacante por trás', 
'B', 3, 'dificil'
),
(
'Quanto tempo o jogador tem para usar o segundo pulo (dodge) após sair do chão normalmente?',
'Cerca de 1.25 a 1.45 segundos', 'Exatamente 3 segundos', 'Tempo ilimitado', '0.5 segundos', '2.5 segundos', 
'A', 3, 'dificil'
),
(
'Se você cair do teto sem pular, quanto tempo você tem para usar o seu flip no ar?',
'1.5 segundos', '2 segundos', 'Tempo ilimitado até tocar em algo', 'Não é possível usar o flip', '0.75 segundos', 
'C', 3, 'dificil'
),
(
'Qual dessas técnicas é uma forma de drible no chão que usa fintas visuais sem tocar na bola?',
'Breezi Flick', 'Fake Dribble (ou Delay)', 'Tornado Spin', 'Helicopter Stall', 'Chain Dash', 
'B', 3, 'dificil'
),
(
'O que acontece quando você bate em um oponente na velocidade máxima (Supersônico)?',
'O carro dele congela', 'Ocorre uma demolição (Demo)', 'O seu carro perde o boost', 'A bola muda de cor', 'O jogo para', 
'B', 4, 'facil'
),
(
'Para que serve o Powerslide?',
'Pular mais alto', 'Ganhar boost infinito', 'Virar rapidamente mantendo velocidade', 'Resetar o flip', 'Frear o carro', 
'C', 4, 'medio'
),
(
'Qual cápsula de boost fornece 100 de boost?',
'Pequena', 'Média', 'Grande', 'Especial', 'Azul', 
'C', 4, 'medio'
),
(
'O que acontece ao realizar um dodge (pulo duplo com direcional)?',
'O carro desacelera', 'O carro ganha impulso', 'O boost acaba', 'A câmera muda', 'O carro trava', 
'B', 4, 'medio'
),
(
'O que é essencial para voar corretamente (fazer um Aerial) no Rocket League?',
'Boost', 'Freio', 'Powerslide', 'Demo', 'Rumble', 
'A', 4, 'medio'
),
(
'Qual mecânica ajuda a manter a velocidade nas curvas?',
'Half Flip', 'Drible', 'Powerslide', 'Ceiling Shot', 'Fake', 
'C', 4, 'medio'
),
(
'Qual parte do carro normalmente gera os chutes mais fortes?',
'Teto', 'Rodas', 'Parte traseira', 'Quina frontal', 'Lateral', 
'D', 4, 'medio'
),
(
'O Supersônico acontece quando:',
'O carro fica sem boost', 'O carro atinge velocidade máxima', 'O jogador marca gol', 'A bola sobe', 'O jogo entra na prorrogação', 
'B', 4, 'medio'
),
(
'O Wall Drag acontece:',
'No teto', 'Na linha do gol', 'Na parede', 'No kickoff', 'No modo Hoops', 
'C', 4, 'medio'
),
(
'O que é um "Fast Aerial"?',
'Um voo usando o teto', 'Subir rapidamente usando pulo duplo e boost simultâneos', 'Voo usando o rastro do oponente', 'Um chute forte de longe', 'Ganha velocidade ao cair da parede', 
'B', 4, 'medio'
),
(
'Qual mecânica utiliza a parede para iniciar uma jogada aérea?',
'Wall Drag', 'Fake Kickoff', 'Pinch', 'Half Flip', 'Fast Kickoff', 
'A', 4, 'dificil'
),
(
'O que caracteriza a mecânica do "Half Flip"?',
'Um cancelamento de flip traseiro para girar o carro e mudar de direção rapidamente', 'Um pulo incompleto na parede', 'Girar o carro de lado no chão', 'Chutar a bola com metade da força', 'Um drible usando o capô do carro', 
'A', 4, 'dificil'
),
(
'O que é necessário para realizar um Flip Reset?',
'Tocar na parede', 'Encostar as quatro rodas na bola', 'Fazer um gol aéreo', 'Usar todo o boost', 'Dar dois pulos', 
'B', 5, 'dificil'
),
(
'Qual mecânica permite lançar a bola rapidamente após equilibrá-la no teto do carro?',
'Pinch', 'Double Tap', 'Flick', 'Musty', 'Ceiling Shot', 
'C', 5, 'dificil'
),
(
'O que é um Double Tap?',
'Dois gols seguidos', 'Bater na bola duas vezes após rebote direto na tabela/parede', 'Dois flips consecutivos no chão', 'Uma defesa dupla no gol', 'Dois jogadores atacando a mesma bola', 
'B', 5, 'dificil'
),
(
'O Air Dribble consists em:',
'Driblar no chão usando o Powerslide', 'Levar a bola pelo ar de forma controlada com múltiplos toques', 'Defender parado no teto da arena', 'Bater forte na parede para isolar a bola', 'Dar bump nos adversários enquanto voa', 
'B', 5, 'dificil'
),
(
'Qual mecânica envolve bater a bola na parede e finalizar direto no rebote sem que ela toque o chão?',
'Musty Flick', 'Flip Reset', 'Double Tap', 'Pinch', 'Air Roll', 
'C', 5, 'dificil'
),
(
'Qual mecânica é considerada uma das mais difíceis do jogo por exigir o reset do pulo no ar?',
'Pulo duplo', 'Flip Reset', 'Powerslide', 'Kickoff', 'Demo', 
'B', 5, 'dificil'
),
(
'O que é um "Kuxir Pinch"?',
'Um drible de teto inventado na RLCS', 'Pressionar a bola contra a parede lateral fazendo ela ir direto para o gol', 'Um passe de calcanhar feito no ar', 'Uma demolição em pleno ar', 'Salvar a bola em cima da linha do gol', 
'B', 5, 'dificil'
),
(
'Qual a principal diferença mecânica do "Musty Flick"?',
'O flip é executado quando o bico do carro está apontado levemente para trás', 'Ele usa o teto para pegar velocidade', 'É feito sem tocar na bola', 'Exige o uso de 100 de boost no chão', 'Inverte os comandos do analógico', 
'A', 5, 'dificil'
),
(
'O que é "Wave Dash"?',
'Um comando de voz para o time', 'Uma técnica de drible lateralmente', 'Cancelar um flip direcionando as rodas para o chão para ganhar velocidade instantânea', 'Um chute forte usando o teto do carro', 'O rastro deixado pelo carro no supersônico', 
'C', 5, 'dificil'
),
(
'A mecânica "Speed Flip" é mais utilizada em qual situação de jogo?',
'Durante a defesa de rebotes', 'No início da partida (Kickoffs) para chegar primeiro na bola', 'Para fazer gols de longa distância', 'No modo Rumble para ativar poderes', 'Para evitar demolições', 
'B', 5, 'dificil'
),
(
'O que é o "Meechy Flick" (Mairy Flick / Classified)?',
'Um drible usando as quatro rodas no chão', 'Uma variação avançada de flick segurando o analógico para trás com rotação específica', 'Um gol de bicicleta invertido', 'Uma técnica secreta dos bots', 'Uma defesa com a traseira do carro', 
'B', 5, 'dificil'
),
(
'O que é um "Stall"?',
'Um bug que fecha o jogo', 'Uma mecânica aérea onde você anula a gravidade vertical do carro combinando air roll e direção oposta', 'Ficar parado na frente do goleiro fazendo barulho', 'Chutar a bola direto para o chão', 'Acelerar e frear ao mesmo tempo', 
'B', 5, 'dificil'
);
