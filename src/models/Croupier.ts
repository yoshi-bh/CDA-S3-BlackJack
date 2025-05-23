import { IParticipant } from "../interfaces/IParticipant";
import { Carte } from "./Carte";
import { Joueur } from "./Joueur";
import { Paquet } from "./Paquet";
import { Partie } from "./Partie";

export class Croupier implements IParticipant {
    public main: Carte[] = [];

    constructor(public id: number = 0, public nom: string = "Croupier") {}

    distribuerCarte(participant: IParticipant, paquet: Paquet): void {
        const carte = paquet.piocherCarte();
        participant.recevoirCarte(carte);
    }

    public calculerScore(main: Carte[]): number {
        let score = 0;
        let asCount = 0;

        main.forEach((carte) => {
            if (carte.face) { 
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
                        score += parseInt(carte.valeur);
                }
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
        const scoreCroupier = this.calculerScore(this.main);

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
        while (this.calculerScore(this.main) < 17) {
            this.recevoirCarte(paquet.piocherCarte());
        }
    }

    recevoirCarte(carte: Carte): void {
        this.main.push(carte);
    }

    getMain(): Carte[] {
        return this.main;
    }
}