import { Casino } from "./models/Casino.js";
const casino = new Casino("Belagio", "Las Vegas");
const montant = document.getElementById("amount").value;
document.getElementById("buyToken")?.addEventListener("click", () => casino.fournirJetons(+montant));
document.getElementById("sellToken")?.addEventListener("click", () => casino.echangerJetons(+montant));
document.getElementById("closeBtn")?.addEventListener("click", () => { window.location.href = "/public/gameboard.html"; });
