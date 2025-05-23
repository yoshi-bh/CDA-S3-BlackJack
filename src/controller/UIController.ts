import { Carte } from "../models/Carte";
import { Joueur } from "../models/Joueur";
import { Partie } from "../models/Partie";

export class UIController {


    private partie: Partie;
    private joueurActif: Joueur;

    constructor(partie: Partie, joueur: Joueur) {
        this.partie = partie;
        this.joueurActif = joueur;
        this.initialiserEcouteurs();
        this.mettreAJourUI();
    }

    private initialiserEcouteurs() {
        document.getElementById('btn-piocher')?.addEventListener('click', () => this.piocherCarte());
        document.getElementById('btn-terminer')?.addEventListener('click', () => this.terminerTour());
        document.getElementById('btn-quitter')?.addEventListener('click', () => this.quitterPartie());
    }

    private piocherCarte() {
        if (this.joueurActif.enJeu) {
            this.partie.jouerTour(this.joueurActif, 'piocher');
            this.mettreAJourUI();
            
            if (this.joueurActif.calculerScore() > 21) {
                alert("Vous avez dépassé 21 !");
            }
        }
    }

    private terminerTour() {
        this.partie.jouerTour(this.joueurActif, 'rester');
        this.mettreAJourUI();
    }

    private quitterPartie() {
        window.location.href = "/index.html"; 
    }

    private mettreAJourUI() {

        const jetonsElement = document.getElementById('jetons-disponibles');
        if (jetonsElement) jetonsElement.textContent = this.joueurActif.jetons.toString();


        this.afficherCartes('main-joueur', this.joueurActif.getMain());
        this.afficherCartes('main-croupier', this.partie.croupier.getMain());
    }

    private afficherCartes(containerId: string, cartes: Carte[]) {
        const container = document.getElementById(containerId);
        if (!container) return;

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