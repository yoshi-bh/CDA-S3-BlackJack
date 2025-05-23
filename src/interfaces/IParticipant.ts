import { Carte } from "../models/Carte.js";

export interface IParticipant {
    recevoirCarte(carte: Carte): void;
    getMain(): Carte[];
}