const bakgrunn = document.querySelector("#bakgrunn");
const brikker = document.querySelector("#brikker");

for(let i=0; 1<144; i++) {
    bakgrunn.innerHTML += "<div></div>";
}

function leggBrikke(bokstav, x, y) {
    brikker.innerHTML += `
        <div style="grid-column: ${x} / ${x+1}; grid-row: ${y} / ${y+1}">${bokstav}</div>
    `;
}

leggBrikke("p" 4, 5);
leggBrikke("ø" 5, 5);
leggBrikke("l" 6, 5);
leggBrikke("s" 7, 5);
leggBrikke("e" 8, 5);
