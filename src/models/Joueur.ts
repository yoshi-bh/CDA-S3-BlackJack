import { IParticipant } from "../interfaces/IParticipant";
import { Carte } from "./Carte";

export class Joueur implements IParticipant {
    public readonly id: number;
    public readonly nom: string;
    public jetons: number;
    public main: Carte[] = [];
    public enJeu: boolean = true;

    constructor(id: number, nom: string, jetonsInitiaux: number) {
        this.id = id;
        this.nom = nom;
        this.jetons = jetonsInitiaux > 0 ? jetonsInitiaux : 0;
    }

    recevoirCarte(carte: Carte): void {
        this.main.push(carte);
    }

    getMain(): Carte[] {
        return this.main.filter(carte => carte.face);
    }


    miser(montant: number): boolean {
        if (montant <= 0 || montant > this.jetons) return false;
        
        this.jetons -= montant;
        return true;
    }


    stopPioche(): void {
        this.enJeu = false;
    }


    public calculerScore(): number {
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