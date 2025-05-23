export class UIController {
    constructor(partie, joueur) {
        this.partie = partie;
        this.joueurActif = joueur;
        this.initialiserEcouteurs();
        this.mettreAJourUI();
    }
    initialiserEcouteurs() {
        var _a, _b, _c;
        (_a = document.getElementById('btn-piocher')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.piocherCarte());
        (_b = document.getElementById('btn-terminer')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this.terminerTour());
        (_c = document.getElementById('btn-quitter')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => this.quitterPartie());
    }
    piocherCarte() {
        if (this.joueurActif.enJeu) {
            this.partie.jouerTour(this.joueurActif, 'piocher');
            this.mettreAJourUI();
            if (this.joueurActif.calculerScore() > 21) {
                alert("Vous avez dépassé 21 !");
            }
        }
    }
    terminerTour() {
        this.partie.jouerTour(this.joueurActif, 'rester');
        this.mettreAJourUI();
    }
    quitterPartie() {
        window.location.href = "/index.html";
    }
    mettreAJourUI() {
        const jetonsElement = document.getElementById('jetons-disponibles');
        if (jetonsElement)
            jetonsElement.textContent = this.joueurActif.jetons.toString();
        this.afficherCartes('main-joueur', this.joueurActif.getMain());
        this.afficherCartes('main-croupier', this.partie.croupier.getMain());
    }
    afficherCartes(containerId, cartes) {
        const container = document.getElementById(containerId);
        if (!container)
            return;
        container.innerHTML = '';
        cartes.forEach(carte => {
            const carteElement = document.createElement('div');
            carteElement.className = `carte ${carte.face ? 'visible' : 'cachee'}`;
            carteElement.innerHTML = carte.face ?
                `<span class="valeur">${carte.valeur}</span><span class="couleur">${carte.couleur}</span>` :
                '🂠';
            container.appendChild(carteElement);
        });
    }
}
