import { IParticipant } from "../interfaces/IParticipant";
import { Joueur } from "./Joueur";
import { Paquet } from "./Paquet";

export class Croupier extends Joueur implements IParticipant {
    constructor() {
        super(0, "Croupier", Infinity);
    }

    distribuerCarte(joueur: Joueur, paquet: Paquet): void {
        const carte = paquet.piocherCarte();
        joueur.recevoirCarte(carte);
    }

    verifierGagnant(...participants: Joueur[]): Joueur | null {
        // Logique de vérification
        return null;
    }
}