import { ICasino } from "../interfaces/ICasino";

export class Casino implements ICasino {
  private player = {argent: 0, jetons: 0};

	constructor(
    private name: string,
    private address: string,
    private solde: number = 0,
    private partieEnCours: [] = []
  ) {
    this.updatePlayerValues();
  }

  updatePlayerValues() {
    this.player = {argent: Number(document.getElementById("playerMoney")?.textContent), 
                  jetons: Number(document.getElementById("playerTokens")?.textContent)};
  }

  fournirJetons(montant: number): void {
    if (this.player.argent >= montant) {
      document.getElementById("playerTokens")!.innerHTML = (this.player.jetons + montant).toString();
      document.getElementById("playerMoney")!.innerHTML = (this.player.argent - montant).toString();
      this.updatePlayerValues();
    } else {
      console.log("Player doesn't have enough money");
    }
  };

  echangerJetons(montant: number): void {
    if (this.player.jetons >= montant) {
      document.getElementById("playerTokens")!.innerHTML = (this.player.jetons - montant).toString();
      document.getElementById("playerMoney")!.innerHTML = (this.player.argent + montant).toString();
      this.updatePlayerValues();
    } else {
      console.log("Player doesn't have enough tokens");
    }
  };

  // createCasino(): Casino;
}
