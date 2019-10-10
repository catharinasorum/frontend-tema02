const main = document.querySelector("main");

main.innerHTML += `
    <h1>Dette er en overskrift</h1>
`;


// Vi lager et HTML-element
const overskrift = document.createElement("h2");
overskrift.innerText = "Trykk på meg, for å fjerne meg!";
overskrift.className = "tekst";
overskrift.classList.add("liten");
overskrift.id = "t1032434";
overskrift.style.color = "white";

main.appendChild(overskrift);

overskrift.onclick = () => main.removeChild(overskrift); // Kalles en arrow function