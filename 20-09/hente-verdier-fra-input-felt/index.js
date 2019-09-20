
const inpNavn = document.querySelector("#inpNavn");
const outNavn = document.querySelector("#outNavn");


function visNavn() {
    outNavn.innerHTML = inpNavn.value;
}

// inpNavn.oninput = visNavn;       Dette er en måte å skrive det på
inpNavn.addEventListener("input", visNavn);