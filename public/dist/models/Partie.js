import { Croupier } from "./Croupier";
import { Paquet } from "./Paquet";
export class Partie {
    constructor(joueurs, croupier = new Croupier(), paquet = new Paquet()) {
        this.joueurs = joueurs;
        this.croupier = croupier;
        this.paquet = paquet;
        this.mises = [];
    }
    demarrer() {
        // Distribution initiale des cartes
    }
    jouerTour() {
        // Logique du tour de jeu
    }
    finPartie() {
        // Finalisation de la partie
    }
}
