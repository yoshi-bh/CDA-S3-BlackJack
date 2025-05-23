import { IParticipant } from "../interfaces/IParticipant.js";
import { Carte } from "./Carte.js";
import { Joueur } from "./Joueur.js";
import { Paquet } from "./Paquet.js";
import { Partie } from "./Partie.js";

export class Croupier implements IParticipant {
    public main: Carte[] = [];

    constructor(public id: number = 0, public nom: string = "Croupier") {}

    distribuerCarte(participant: IParticipant, paquet: Paquet): void {
        const carte = paquet.piocherCarte();
        participant.recevoirCarte(carte);
    }

    public calculerScore(): number {
    let score = 0;
    let asCount = 0;

    this.getMain().forEach((carte) => {
        switch (carte.valeur) {
            case "Valet":
            case "Dame":
            case "Roi":
                score += 10;
                break;
            case "As":
                asCount++;
                score += 11;
                break;
            default:
                score += parseInt(carte.valeur) || 0;
        }
    });

    while (score > 21 && asCount > 0) {
        score -= 10;
        asCount--;
    }

    return score;
}

    vérifierGagnant(partie: Partie): Map<Joueur, "gagné" | "perdu" | "égalité"> {
        const resultats = new Map<Joueur, "gagné" | "perdu" | "égalité">();
        const scoreCroupier = this.calculerScore();

        partie.joueurs.forEach((joueur) => {
            const scoreJoueur = this.calculerScore(joueur.main);

            if (scoreJoueur > 21) {
                resultats.set(joueur, "perdu");
            } else if (scoreCroupier > 21) {
                resultats.set(joueur, "gagné");
            } else if (scoreJoueur > scoreCroupier) {
                resultats.set(joueur, "gagné");
            } else if (scoreJoueur === scoreCroupier) {
                resultats.set(joueur, "égalité");
            } else {
                resultats.set(joueur, "perdu");
            }
        });

        return resultats;
    }

    jouerTour(paquet: Paquet): void {
    
    this.main.forEach(carte => carte.face = true);
    
    
    while (this.calculerScore() < 17) { 
        const carte = paquet.piocherCarte();
        if (!carte) break;
        this.recevoirCarte(carte);
    }
}

    recevoirCarte(carte: Carte): void {
        this.main.push(carte);
    }

    getMain(): Carte[] {
    return this.main.filter(carte => carte.face);
}
}