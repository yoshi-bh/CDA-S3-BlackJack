import { Carte } from "./Carte";

export class Paquet {
    private cartes: Carte[] = [];

    constructor() {
        this.initialiser();
    }

    private initialiser(): void {
        const valeurs = ['2', '3', '4','5','6','7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
        const couleurs = ['Coeur', 'Carreau', 'Pique', 'Trèfle'];
        
        // Création des 52 cartes
    }

    melanger(): void {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
        }
    }

    piocherCarte(): Carte {
        return this.cartes.pop()!;
    }
}