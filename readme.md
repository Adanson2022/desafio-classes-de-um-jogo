# 🎮 Escrevendo as Classes de um Jogo

Este projeto foi desenvolvido como uma atividade prática para consolidar conceitos fundamentais de **Programação Orientada a Objetos (POO)** em JavaScript, além de aplicar estruturas de decisão e manipulação de variáveis.

## 📝 Objetivo do Desafio

O objetivo principal era criar uma classe genérica que representasse o herói de uma aventura. A classe deve conter propriedades específicas e um método de ataque que varia de acordo com o tipo (classe) do herói selecionado.

### Requisitos Atendidos:
- **Variáveis** e operadores para manipulação de dados.
- **Estruturas de Decisão** (`if / else if / else`) para definir o ataque do herói de forma dinâmica.
- **Classes e Objetos** para a estrutura e instanciação do personagem.
- **Métodos** para executar ações específicas dentro da classe.

---

## 🛠️ Tecnologias Utilizadas

*   **JavaScript (ES6+)**
*   **Node.js** (para execução local do script)

---

## 💻 Código Desenvolvido

O código foi estruturado utilizando uma classe principal onde a lógica do ataque é definida internamente pelo próprio método da classe:

```javascript
class playerProp {
    constructor(playerName, playerAge, playerType) {
        this.playerName = playerName;
        this.playerAge = playerAge;
        this.playerType = playerType;
    }
    
    atacar() {
        let playerAttack = "";
    	
        if (this.playerType === "guerreiro") {
            playerAttack = "espada";
        } else if (this.playerType === "mago") {
            playerAttack = "magia";
        } else if (this.playerType === "monge") {
            playerAttack = "artes marciais";
        } else if (this.playerType === "ninja") {
            playerAttack = "shuriken";
        } else {
            playerAttack = "um ataque básico";
        }
    	
        console.log(`O ${this.playerType} atacou usando ${playerAttack}`);
    }
}

// Instanciando o herói
let playerOne = new playerProp("Bravo", "26", "ninja");

// Executando o método de ataque
playerOne.atacar();
```

---

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.
2. Crie um arquivo chamado `index.js` e cole o código acima.
3. Abra o terminal na pasta do arquivo e execute o comando:
   ```bash
   node index.js
   ```
4. A saída esperada no console será:
   ```text
   O ninja atacou usando shuriken
   ```

---

## 🤝 Regras de Negócio Aplicadas (Tabela de Ataques)

| Tipo (Classe) | Ataque Utilizado |
| :--- | :--- |
| Mago | Magia |
| Guerreiro | Espada |
| Monge | Artes Marciais |
| Ninja | Shuriken |
| *Outros* | *Ataque Básico* |

---
Desenvolvido com 💻 e foco nos estudos de programação! 😉
