import { UIController } from "./controller/UIController";
import { Joueur } from "./models/Joueur";
import { Partie } from "./models/Partie";


const joueur = new Joueur(1, "Joueur 1", 200);
const partie = new Partie([joueur]);
const uiController = new UIController(partie, joueur);


partie.demarrer();