import { ICasino } from "../interfaces/ICasino";

class Casino implements ICasino {
	constructor(
    private name: string,
    private address: string,
    private solde: number = 0,
    private partieEnCours: [] = []
  ) {

  }

  fournirJetons(): void {
    console.log("Hello");
    const montant = (<HTMLInputElement>document.getElementById("amount")).value;
    console.log("Amount: " + montant);
    // if (player.argent >= montant) {
    //   player.argent -= montant;
    //   player.jetons += montant;
    // }
  };

  echangerJetons(): void {
    const montant = (<HTMLInputElement>document.getElementById("amount")).value;
    // if (player.jetons >= montant) {
    //   player.jetons -= montant;
    //   player.argent += montant;
    // }
  };

  // createCasino(): Casino;
}
