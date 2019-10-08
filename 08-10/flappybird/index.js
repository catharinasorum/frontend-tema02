const theBird = document.querySelector("#theBird");
const main = document.querySelector("main");

let ypos = 100; // Fuglens y-position
let fart = 10; // Farten på at den faller ned
let flaksekraft = 6; // Hvor hardt den flakser opp
let g = 0.2; // Gravitasjon
let bakgrunnsfart = -1.5; // Bakgrunnen skal gå til venstre
let bakgrunnspos = 0; // Bakgrunnsposisjonen

let theGameIsOn = true; // Så lenge denne er "true" så skal spillet kjøre


// Fuglen flakser
function flaks() {
    fart = - flaksekraft;
}

document.addEventListener("click", flaks);


// Flytter fuglen nedover
function fallNed() {
    fart += g; 
    ypos += fart;
    theBird.style.top = ypos + "px";
    theBird.style.transform = `rotate(${fart * 2}deg)`;
}

// Flytter bakgrunnen
function flyttBakgrunn() {
    bakgrunnspos += bakgrunnsfart;
    main.style.backgroundPosition = `${bakgrunnspos}px 0`;
}

// Sjekker om fuglen treffer bakken
function sjekkOmFuglenTrefferBakken() {
    if(ypos > 300) {
        theGameIsOn = false;
    }
}

// Selve gameloopen
function gameLoop() {

    fallNed();
    flyttBakgrunn();
    sjekkOmFuglenTrefferBakken();
    if(theGameIsOn) {
          requestAnimationFrame(gameLoop); // Starter funksjonen med en liten forsinkelse
    }

}

// Starte loopen
gameLoop();