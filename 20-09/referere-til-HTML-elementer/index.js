// Referere til et HTML-dokument med JS
const overskrift = document.getElementById("overskrift");

overskrift.innerHTML = "Jeg er <em>skrevet</em> i JavaScript"; // HTML når du skal endre html elementer i tillegg til tekst
// overskrift.innerText = "Jeg er skrevet i JavaScript"; 

console.log(overskrift.innerHTML);

console.log(document.body); // kan ha mellomrom inne i parantesen: ( document.body )

console.log(document.head);
