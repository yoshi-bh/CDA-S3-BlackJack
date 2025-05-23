export class Joueur {
    constructor(id, nom, jetons) {
        this.id = id;
        this.nom = nom;
        this.jetons = jetons;
        this.main = [];
    }
    recevoirCarte(carte) {
        this.main.push(carte);
    }
    getMain() {
        return this.main;
    }
    miser(montant) {
        if (this.jetons >= montant) {
            this.jetons -= montant;
        }
    }
    piocher(paquet) {
        const carte = paquet.piocherCarte();
        this.recevoirCarte(carte);
    }
    stopPioche() {
    }
}
