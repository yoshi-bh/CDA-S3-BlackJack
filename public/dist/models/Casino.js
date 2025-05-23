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
        var _a, _b;
        this.player = { argent: Number((_a = document.getElementById("playerMoney")) === null || _a === void 0 ? void 0 : _a.textContent),
            jetons: Number((_b = document.getElementById("playerTokens")) === null || _b === void 0 ? void 0 : _b.textContent) };
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
