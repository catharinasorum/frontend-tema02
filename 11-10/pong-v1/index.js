const spillet = document.querySelector("#spillet");
const ctx = spillet.getContext("2d");

function degToRad(grader) {
    return (grader / 360) * (Math.PI * 2);
}

const ball = {
    x: 60, 
    y: 60,
    r: 10,
    xspeed: 5,
    yspeed: 5,
    xdir: 1, 
    ydir: 1
}

const brett = {
    w: 600,
    h: 400
}

const racket = {
    x: 30,
    y: 180,
    w: 8,
    h: 50,
    yspeed: 5,
    ydir: 0
}

function tegnBall() {
    
    ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, degToRad(360));
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    ball.x += ball.xspeed * ball.xdir;
    ball.y += ball.yspeed * ball.ydir;

}

function sjekkOmBallenTrefferVeggen() {
    if(ball.x >= brett.w) { ball.xdir = -1 }; // høyre vegg
    if(ball.x <= 0) { ball.xdir = 1 }; // venstre vegg
    if(ball.y >= brett.h) { ball.ydir = -1 }; // gulv
    if(ball.y <= 0) { ball.ydir = 1 }; // tak
}

function tegnRacket() {
    ctx.beginPath();
        ctx.rect(racket.x, racket.y, racket.w, racket.h);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    racket.y += racket.yspeed * racket.ydir;
}

function startRacket(evt) {
    const tast = evt.keyCode;
    if(tast === 38) {
        racket.ydir = -1;
    }
    if(tast === 40) {
        racket.ydir = 1;
    }
}

function stoppRacket(evt) {
    const tast = evt.keyCode;
    if(tast === 38 && racket.ydir === -1) {
        racket.ydir = 0;
    }
    if(tast === 30 && racket.ydir === 1) {
        racket.ydir = 0;
    }
    
}
// NESTE STEG 
function sjekkOmBallenTrefferRacket() {

    const erOver = (ball.y + ball.r) < racket.y;
    const erUnder = (ball.y + ball.r) > racket.y;
    const erTilHoyre = (ball.x - ball.r) < racket.x;
    const erTilVenstre = (ball.x - ball.r) > racket.x;
    
    if(!erOver && !erUnder && !erTilHoyre && !erTilVenstre) {
        ball.xdir = 1; // snu ballen
    }
}

function loop() {
    ctx.clearRect(0, 0,brett.w, brett.h); // Fjerner mønsteret
    tegnBall();
    tegnRacket();
    sjekkOmBallenTrefferVeggen();
    sjekkOmBallenTrefferRacket()
    // Gjør andre ting

    requestAnimationFrame(loop);
}

loop();

document.addEventListener("keydown", startRacket);
document.addEventListener("keyup", stoppRacket);


/* HVORDAN LAGE EN FIRKANT
ctx.fillStyle = "white";
ctx.fillRect(20, 40, 50, 200); //posisjon x og y, width og høyde

// Definerer en firkant
ctx.rect(200, 50, 80, 40);
ctx.fillStyle = "black";
ctx.strokeStyle = "white";
ctx.fill();
ctx.stroke();


// For å lage en sirkel må vi lage en bue - arc
ctx.beginPath();
    ctx.arc(200,200, 50, 0, degToRad(360), false);
ctx.closePath();
ctx.stroke();

// For å lage en kvart sirkel
ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 100);
    ctx.arc(100,100, 50, 0, degToRad(90), false);
ctx.closePath();
ctx.stroke();
*/