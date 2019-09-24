// Regn ut hvor høy du blir

// Input vi får fra prompt og annen type input er String
const inpMorsHoyde = prompt("Hvor høy er din mor?");
const inpFarsHoyde = prompt("Hvor høy er din far?");


// Vi må gjøre om string til number
const morsHoyde = Number(inpMorsHoyde);
const farsHoyde = Number(inpFarsHoyde);

function finnHoyde(mh, fh) {
    // Hvis du er gutt
    const dinHoyde = (mh + fh + 12) / 2;
    document.write("Du blir " + dinHoyde + " cm");
}

// Starter funksjonen
finnHoyde(morsHoyde, farsHoyde);




/*
const dittNavn = prompt("Hva heter du?");

function skrivMelding(navn) {
    document.write("Hei " + navn);
}

skrivMelding(dittNavn);
*/