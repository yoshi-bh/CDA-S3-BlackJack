export class UIController {
    constructor(partie, joueur) {
        this.partie = partie;
        this.joueurActif = joueur;
        this.initialiserEcouteurs();
        this.mettreAJourUI();
    }
    initialiserEcouteurs() {
        document.getElementById('btn-miser')?.addEventListener('click', () => this.gererMise());
        document.getElementById('btn-piocher')?.addEventListener('click', () => this.piocherCarte());
        document.getElementById('btn-terminer')?.addEventListener('click', () => this.terminerTour());
        document.getElementById('btn-quitter')?.addEventListener('click', () => this.quitterPartie());
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
        this.partie.lancerTourCroupier();
        this.mettreAJourUI();
        const resultats = this.partie.croupier.vérifierGagnant(this.partie);
        resultats.forEach((resultat, joueur) => {
            alert(`${joueur.nom} a ${resultat} !`);
        });
    }
    gererMise() {
        if (this.joueurActif.miser(10)) {
            this.mettreAJourUI();
        }
        else {
            alert("Mise impossible !");
        }
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
