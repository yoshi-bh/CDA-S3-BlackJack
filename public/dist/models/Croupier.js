export class Croupier {
    constructor(id = 0, nom = "Croupier") {
        this.id = id;
        this.nom = nom;
        this.main = [];
    }
    distribuerCarte(participant, paquet) {
        const carte = paquet.piocherCarte();
        participant.recevoirCarte(carte);
    }
    calculerScore() {
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
    vérifierGagnant(partie) {
        const resultats = new Map();
        const scoreCroupier = this.calculerScore();
        partie.joueurs.forEach((joueur) => {
            const scoreJoueur = this.calculerScore(joueur.main);
            if (scoreJoueur > 21) {
                resultats.set(joueur, "perdu");
            }
            else if (scoreCroupier > 21) {
                resultats.set(joueur, "gagné");
            }
            else if (scoreJoueur > scoreCroupier) {
                resultats.set(joueur, "gagné");
            }
            else if (scoreJoueur === scoreCroupier) {
                resultats.set(joueur, "égalité");
            }
            else {
                resultats.set(joueur, "perdu");
            }
        });
        return resultats;
    }
    jouerTour(paquet) {
        this.main.forEach(carte => carte.face = true);
        while (this.calculerScore() < 17) {
            const carte = paquet.piocherCarte();
            if (!carte)
                break;
            this.recevoirCarte(carte);
        }
    }
    recevoirCarte(carte) {
        this.main.push(carte);
    }
    getMain() {
        return this.main.filter(carte => carte.face);
    }
}
