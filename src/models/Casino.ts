import { ICasino } from "../interfaces/ICasino";

class Casino implements ICasino {
	constructor(
    private name: string,
    private address: string,
    private solde: number = 0,
    private partieEnCours: [] = []
  ) {}

  fournirJetons(montant: number): void {
    if (player.argent >= montant) {
      player.argent -= montant;
      player.jetons += montant;
    }
  };

  echangerJetons(montant: number): void {
    if (player.jetons >= montant) {
      player.jetons -= montant;
      player.argent += montant;
    }
  };

  

  // createCasino(): Casino;
}
