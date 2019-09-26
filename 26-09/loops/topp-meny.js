const topMenu = document.querySelector("#topMenu");


const bloggere = [
    { navn: "Fotballfrue", url: "fotballfrue.html" },
    { navn: "Pappahjerte", url: "pappahjerte.html" },
    { navn: "Voe", url: "voe.html" },
    { navn: "Funkygine", url: "funkygine.html" }
];

for(const blogger of bloggere) {
    const valgtSide = document.location.href;
    const sjekk = valgtSide.search(blogger.url);

    let klasse = "";

    if(sjekk > 0) {
        klasse = "active";
    }


    topMenu.innerHTML += `
        <a class="${klasse}" href="${blogger.url}">${blogger.navn}</a>
    `;
}