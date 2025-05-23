var _a, _b, _c;
import { Casino } from "./models/Casino.js";
const casino = new Casino("Belagio", "Las Vegas");
const montant = document.getElementById("amount").value;
(_a = document.getElementById("buyToken")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => casino.fournirJetons(+montant));
(_b = document.getElementById("sellToken")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => casino.echangerJetons(+montant));
(_c = document.getElementById("popup")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => { }); // Add link of gameboard.html here
