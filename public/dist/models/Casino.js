class Casino {
    constructor(name, address, solde = 0, partieEnCours = []) {
        this.name = name;
        this.address = address;
        this.solde = solde;
        this.partieEnCours = partieEnCours;
    }
    fournirJetons() {
        console.log("Hello");
        const montant = document.getElementById("amount").value;
        console.log("Amount: " + montant);
        // if (player.argent >= montant) {
        //   player.argent -= montant;
        //   player.jetons += montant;
        // }
    }
    ;
    echangerJetons() {
        const montant = document.getElementById("amount").value;
        // if (player.jetons >= montant) {
        //   player.jetons -= montant;
        //   player.argent += montant;
        // }
    }
    ;
}
export {};
