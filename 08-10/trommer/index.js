

function spillTromme(evt) {
    const tastekode = evt.keyCode;
    
    const lyd = document.querySelector(`audio[data-key="${tastekode}"]`);
   
    // Hvis ikke lyd - avslutt funksjonen
    if(!lyd) {
        return;
    }
   
    // Vi spoler lyden tilbake
    lyd.currentTime = 0;
    lyd.play();

    // For at vi skal se hvilket div element som matcher den trommen vi slår
    const divElement = document.querySelector(`main div[data-key="${tastekode}"]`);

    divElement.animate([
        { backgroundColor: "orange", transform: "scale(1.2)" },
        { backgroundColor: "transparent", transform: "scale(1.0)" }
    ], 100);
}

document.addEventListener("keydown", spillTromme);