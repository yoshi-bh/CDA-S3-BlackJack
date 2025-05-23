import { Carte } from "../models/Carte";

export interface IParticipant {
    recevoirCarte(carte: Carte): void;
    getMain(): Carte[];
}