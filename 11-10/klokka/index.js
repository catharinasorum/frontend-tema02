const ur = document.querySelector("#ur");

for(let i=0; i<60; i++) {

    const rotasjon = i * 6 + "deg";
    const avstand = 160 + "px";

    let klasse = "";
    if(i % 15 === 0) {
        klasse = "tjukk";
    }

    ur.innerHTML += `
        <div class="${klasse}" 
            style="transform: rotate(${rotasjon}) translateY(${avstand})">
        </div>
    `;
}

const tallene = ["12", "3", "6", "9"];

for(let [indeks, tall ]of tallene.entries()) {
    ur.innerHTML += `
        <div class="t" style="transform: rotate(${indeks * 90}deg) translateY(-180px)">
            <span class="tall" style="transform: rotate(${-indeks * 90}deg)">${tall}</span>
        </div>
    `;
}

const sekundviser = document.querySelector("#sekundviser");


function visTid() {
    const tid = new Date();
    const sekunder = tid.getSeconds();
    sekundviser.style.transform = `rotate(${sekunder * 6}deg)`;
}

setInterval(visTid, 1000);
visTid();


