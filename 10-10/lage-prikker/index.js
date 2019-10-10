const main = document.querySelector("main");

function lagPrikk(evt) {
    const prikk = document.createElement("div");
    prikk.className = "prikk";
    prikk.style.left = (evt.clientX - 10)+ "px"; // For å treffe midten
    prikk.style.top = (evt.clientY - 10)+ "px"; // For å treffe midten
    
    main.appendChild(prikk);
    
    setTimeout( () => main.removeChild(prikk) ,5000);
}

document.addEventListener("mousemove", lagPrikk);