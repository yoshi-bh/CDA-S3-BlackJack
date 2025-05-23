import { ICasino } from "../interfaces/ICasino";

class Casino implements ICasino {
	constructor(private name: string, private address: string, private solde: number = 0, private partieEnCours: []) {}

  fournirJetons(amount: number): void {
    if (player.cash >= amount) {
      player.cash -= amount;
      player.token += amount;
    }
  };

  echangedJetons(amount: number): void {
    if (player.token >= amount) {
      player.token -= amount;
      player.cash += amount;
    }
  };

  // createCasino(): Casino;
}
