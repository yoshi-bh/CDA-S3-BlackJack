import { Carte } from "./Carte.js";

export class Paquet {
    private cartes: Carte[] = [];

    constructor() {
        this.initialiser(); 
        this.melanger();
    }

    private initialiser(): void {
        const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As']; 
        const couleurs = ['Coeur', 'Carreau', 'Pique', 'Trèfle'];
        
        for (const couleur of couleurs) {
            for (const valeur of valeurs) {
                this.cartes.push(new Carte(valeur, couleur)); //
            }
        }
    }

    melanger() {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
        }
    }

    piocherCarte(): Carte {
        if (this.cartes.length === 0) throw new Error("Paquet vide !");
        return this.cartes.pop()!;
    }
}