import { IParticipant } from "../interfaces/IParticipant";
import { Carte } from "./Carte";
import { Paquet } from "./Paquet";

export class Joueur implements IParticipant {
    public main: Carte[] = [];

    constructor(
        public id: number,
        public nom: string,
        public jetons: number
    ) {}

    recevoirCarte(carte: Carte): void {
        this.main.push(carte);
    }

    getMain(): Carte[] {
        return this.main;
    }

    miser(montant: number): void {
        if (this.jetons >= montant) {
            this.jetons -= montant;
        }
    }

    piocher(paquet: Paquet): void {
        const carte = paquet.piocherCarte();
        this.recevoirCarte(carte);
    }

    stopPioche(): void {

    }
}