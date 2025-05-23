export class Paquet {
    constructor() {
        this.cartes = [];
        this.initialiser();
    }
    initialiser() {
        const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
        const couleurs = ['Coeur', 'Carreau', 'Pique', 'Trèfle'];
        // Création des 52 cartes
    }
    melanger() {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
        }
    }
    piocherCarte() {
        return this.cartes.pop();
    }
}
