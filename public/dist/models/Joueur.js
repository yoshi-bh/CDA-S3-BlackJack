export class Joueur {
    constructor(id, nom, jetonsInitiaux) {
        this.main = [];
        this.enJeu = true;
        this.id = id;
        this.nom = nom;
        this.jetons = jetonsInitiaux > 0 ? jetonsInitiaux : 0;
    }
    recevoirCarte(carte) {
        this.main.push(carte);
    }
    getMain() {
        return this.main.filter(carte => carte.face);
    }
    miser(montant) {
        if (this.jetons >= montant) {
            this.jetons -= montant;
            return true;
        }
        return false;
    }
    stopPioche() {
        this.enJeu = false;
    }
    calculerScore() {
        let score = 0;
        let asCount = 0;
        this.getMain().forEach(carte => {
            switch (carte.valeur) {
                case 'As':
                    asCount++;
                    score += 11;
                    break;
                case 'Valet':
                case 'Dame':
                case 'Roi':
                    score += 10;
                    break;
                default:
                    score += parseInt(carte.valeur) || 0;
            }
        });
        while (score > 21 && asCount > 0) {
            score -= 10;
            asCount--;
        }
        return score;
    }
}
