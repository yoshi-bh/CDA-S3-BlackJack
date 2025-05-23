import { Croupier } from "./Croupier";
import { Joueur } from "./Joueur"; // Vérifiez que le chemin est correct
import { Paquet } from "./Paquet";

export class Partie {
    constructor(
        public joueurs: Joueur[],
        public croupier: Croupier = new Croupier(),
        public paquet: Paquet = new Paquet()
    ) {}

    demarrer(): void {
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

    jouerTour(joueur: Joueur, action: 'piocher' | 'rester'): void {
        if (action === 'piocher' && joueur.enJeu) {
            const carte = this.paquet.piocherCarte();
            joueur.recevoirCarte(carte);

            if (joueur.calculerScore() > 21) {
                console.log(`${joueur.nom} a dépassé 21 !`);
                joueur.stopPioche();
            }
        }
    }

    finPartie(): void {
        // Logique de fin de partie
        this.croupier.jouerTour(this.paquet);
        // Ajouter la logique de comparaison des scores
    }
}