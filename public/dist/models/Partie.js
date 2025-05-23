import { Croupier } from "./Croupier.js";
import { Paquet } from "./Paquet.js";
export class Partie {
    constructor(joueurs, croupier = new Croupier(), paquet = new Paquet()) {
        this.joueurs = joueurs;
        this.croupier = croupier;
        this.paquet = paquet;
    }
    demarrer() {
        try {
            this.joueurs.forEach(joueur => {
                joueur.recevoirCarte(this.paquet.piocherCarte());
                joueur.recevoirCarte(this.paquet.piocherCarte());
            });
            const carteCachee = this.paquet.piocherCarte();
            if (!carteCachee)
                throw new Error("Plus de cartes disponibles !");
            carteCachee.face = false;
            this.croupier.recevoirCarte(carteCachee);
        }
        catch (error) {
            console.error("Erreur lors du démarrage :", error);
        }
    }
    jouerTour(joueur, action) {
        if (action === 'piocher' && joueur.enJeu) {
            const carte = this.paquet.piocherCarte();
            joueur.recevoirCarte(carte);
            if (joueur.calculerScore() > 21) {
                console.log(`${joueur.nom} a dépassé 21 !`);
                joueur.stopPioche();
            }
        }
    }
    jouerTourCroupier() {
        this.croupier.getMain().forEach(carte => carte.face = true);
        while (this.croupier.calculerScore() < 17) {
            const carte = this.paquet.piocherCarte();
            this.croupier.recevoirCarte(carte);
        }
        this.finPartie();
    }
    lancerTourCroupier() {
        this.croupier.jouerTour(this.paquet);
        this.finPartie();
    }
    finPartie() {
        // Compare les scores et affiche le résultat
        const scoreJoueur = this.joueurs[0].calculerScore();
        const scoreCroupier = this.croupier.calculerScore();
        if (scoreJoueur > 21) {
            alert("Vous avez perdu !");
        }
        else if (scoreCroupier > 21 || scoreJoueur > scoreCroupier) {
            alert("Vous avez gagné !");
        }
        else {
            alert("Égalité !");
        }
    }
}
