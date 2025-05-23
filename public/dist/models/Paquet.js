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
        // Algorithme de mélange
    }
    piocherCarte() {
        return this.cartes.pop();
    }
}
