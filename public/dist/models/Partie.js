import { Croupier } from "./Croupier";
import { Paquet } from "./Paquet";
export class Partie {
    constructor(joueurs, croupier = new Croupier(), paquet = new Paquet()) {
        this.joueurs = joueurs;
        this.croupier = croupier;
        this.paquet = paquet;
    }
    demarrer() {
        // Distribution initiale des cartes
        this.joueurs.forEach(joueur => {
            joueur.recevoirCarte(this.paquet.piocherCarte());
            joueur.recevoirCarte(this.paquet.piocherCarte());
        });
        // Le croupier reçoit ses cartes
        this.croupier.recevoirCarte(this.paquet.piocherCarte());
        const carteCachee = this.paquet.piocherCarte();
        carteCachee.face = false;
        this.croupier.recevoirCarte(carteCachee);
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
    finPartie() {
        // Logique de fin de partie
        this.croupier.jouerTour(this.paquet);
        // Ajouter la logique de comparaison des scores
    }
}
