import { UIController } from "./controllers/UIController.js";
import { Joueur } from "./models/Joueur.js";
import { Partie } from "./models/Partie.js";
window.addEventListener("DOMContentLoaded", () => {
    const joueur = new Joueur(1, "Joueur 1", 200);
    const partie = new Partie([joueur]);
    const uiController = new UIController(partie, joueur);
    partie.demarrer();
});
