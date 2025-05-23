import { Casino } from "./models/Casino.js";

const casino = new Casino("Belagio", "Las Vegas");
const montant = (<HTMLInputElement>document.getElementById("amount")).value;

document.getElementById("buyToken")?.addEventListener("click", () => casino.fournirJetons(+montant));
document.getElementById("sellToken")?.addEventListener("click", () => casino.echangerJetons(+montant));
document.getElementById("popup")?.addEventListener("click", () => {}); // Add link of gameboard.html here