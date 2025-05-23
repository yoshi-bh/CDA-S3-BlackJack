import { Croupier } from "./Croupier";
import { Joueur } from "./Joueur";
import { Mise } from "./Mise";
import { Paquet } from "./Paquet";

export class Partie {
    public mises: Mise[] = [];

    constructor(
        public joueurs: Joueur[],
        public croupier: Croupier = new Croupier(),
        public paquet: Paquet = new Paquet()
    ) {}

    demarrer(): void {
        // Distribution initiale des cartes
    }

    jouerTour(): void {
        // Logique du tour de jeu
    }

    finPartie(): void {
        // Finalisation de la partie
    }
}