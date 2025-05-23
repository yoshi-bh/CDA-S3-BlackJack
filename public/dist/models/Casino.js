export class Casino {
    constructor(name, address, solde = 0, partieEnCours = []) {
        this.name = name;
        this.address = address;
        this.solde = solde;
        this.partieEnCours = partieEnCours;
        this.player = { argent: 0, jetons: 0 };
        this.updatePlayerValues();
    }
    updatePlayerValues() {
        this.player = { argent: Number(document.getElementById("playerMoney")?.textContent),
            jetons: Number(document.getElementById("playerTokens")?.textContent) };
    }
    fournirJetons(montant) {
        if (this.player.argent >= montant) {
            document.getElementById("playerTokens").innerHTML = (this.player.jetons + montant).toString();
            document.getElementById("playerMoney").innerHTML = (this.player.argent - montant).toString();
            this.updatePlayerValues();
        }
        else {
            console.log("Player doesn't have enough money");
        }
    }
    ;
    echangerJetons(montant) {
        if (this.player.jetons >= montant) {
            document.getElementById("playerTokens").innerHTML = (this.player.jetons - montant).toString();
            document.getElementById("playerMoney").innerHTML = (this.player.argent + montant).toString();
            this.updatePlayerValues();
        }
        else {
            console.log("Player doesn't have enough tokens");
        }
    }
    ;
}
