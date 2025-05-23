import { Joueur } from "./Joueur";
export class Croupier extends Joueur {
    constructor() {
        super(0, "Croupier", Infinity);
    }
    distribuerCarte(joueur, paquet) {
        const carte = paquet.piocherCarte();
        joueur.recevoirCarte(carte);
    }
    verifierGagnant(...participants) {
        // Logique de vérification
        return null;
    }
}
