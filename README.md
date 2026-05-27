# 🚀 Projeto Pessoal: Rocket League

Bem-vindo ao meu repositório dedicado a uma das minhas maiores paixões: **Rocket League**. 
Este projeto foi criado para compartilhar meu conhecimento e paixão por este jogo único.

## 📖 História do Jogo
Lançado em 7 de julho de 2015 pela **Psyonix Studios**, Rocket League é o sucessor espiritual de *Supersonic Acrobatic Rocket-Powered Battle-Cars (SARPBC)*, lançado em 2008 para PlayStation 3.
*   **O Conceito:** A ideia central é simples e genial: futebol, mas com carros turbinados, onde você pode voar e fazer tudo o que possa imaginar.
*   **A Evolução:** Após um lançamento moderado, o jogo explodiu em popularidade, tornando-se gratuito (Free-to-Play) em 2020 após a aquisição pela Epic Games, consolidando-se como um dos principais eSports do mundo.
*   **RLCS:** A Rocket League Championship Series (RLCS) é o cenário competitivo profissional, crescendo a cada temporada.

## 🎮 Jogabilidade (Gameplay)
A jogabilidade é definida pela frase: **"Difícil de aprender, impossível de dominar"**.
*   **Objetivo:** Marcar gols acertando uma bola gigante com carros em arenas futuristas.
*   **Mecânicas Principais:** Uso de turbo (boost), saltos, giros (flips) e controle aéreo.
*   **Física:** O jogo depende 100% da física, exigindo precisão, posicionamento (rotação) e trabalho em equipe.
*   **Modos:** Principalmente 1v1, 2v2, 3v3 (padrão competitivo), além de modos extras (Hoops, Rumble, Snow Day).

## 🖥️ Plataformas
Rocket League é amplamente acessível e suporta *cross-platform* (jogadores de plataformas diferentes podem jogar juntos).
*   **PC:** Epic Games Store e Steam.
*   **Consoles:** PlayStation 4/5, Xbox One/Series X|S, Nintendo Switch.

  ---

  # ▶️ Guia de Instalação e Execução do Projeto

## 📋 Pré-requisitos

Antes de iniciar o projeto, é necessário possuir as seguintes ferramentas instaladas:

- Node.js
- MySQL Server
- Git
- Oracle Virtual Box (caso utilize máquina virtual)
- VSCode ou outro editor de código

---

# 📥 Clonando o Repositório

Abra o terminal e execute:

```bash
git clone [https://github.com/seu-repositorio/projeto.git](https://github.com/guilhermebrtt/projeto_individual_rl.git)
```

Depois, acesse a pasta do projeto:

```bash
cd pi_rl
```

---

# 📦 Instalando as Dependências

Execute o comando abaixo para instalar todas as dependências do Node.js:

```bash
npm install
```

---

# 🛢️ Configuração do Banco de Dados

## 1. Abrir o MySQL

Abra o MySQL Workbench ou o terminal MySQL.

---

## 2. Executar o Script SQL

Execute o script responsável pela criação do banco de dados e tabelas.

Exemplo:

```sql
CREATE DATABASE rocketleague;
USE rocketleague;
```

Depois execute todas as tabelas presentes no arquivo `.sql` do projeto.

---

# ⚙️ Configurar Arquivo de Ambiente

Crie na raiz do diretório `projeto_individual_rl\pi_rl` o arquivo de configuração do banco de dados (`.env`), adicione as credenciais:

```javascript
DB_HOST: localhost,
DB_DATABASE: "rocketleague"
DB_USER: "root",
DB_PASSWORD: "SUA_SENHA",
DB_PORT: 3306
```
#### *Os valores serão preenchidos com os dados do seu banco 
---

# ▶️ Executando o Projeto

Para iniciar o servidor Node.js execute:

```bash
npm start
```

ou

```bash
node app.js
```

---

# 🌐 Acessando o Sistema

Após iniciar o servidor, acesse no navegador:

```bash
http://localhost:8080
```

---

# 👤 Funcionalidades do Projeto

O sistema possui:

- Cadastro e login de usuários
- Conteúdo educativo sobre Rocket League
- Sistema de quizzes
- Dashboard de desempenho
- Gráficos dinâmicos com Chart.js
- Filtro por dificuldade
- Sistema de análise de respostas

---

# 🧠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MySQL
- Chart.js
- Github
- Trello

---

# 📌 Observações

- Certifique-se de que o MySQL Server esteja em execução antes de iniciar o projeto.
- Caso utilize VM, configure corretamente as portas da máquina virtual.
- O projeto utiliza armazenamento de sessão através do `sessionStorage`.
