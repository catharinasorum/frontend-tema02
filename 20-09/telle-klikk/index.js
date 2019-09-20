

// Referere til poeng-teksten
const txtKlikk = document.querySelector("#txtKlikk");
let antall = 0;

function tellOpp() {
    antall++; // Øker antall med 1.
    txtKlikk.innerText = antall;
}

document.addEventListener("click", tellOpp);