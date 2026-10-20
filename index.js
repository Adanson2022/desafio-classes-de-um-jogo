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

let playerOne = new playerProp("Bravo", "26", "ninja");

playerOne.atacar();