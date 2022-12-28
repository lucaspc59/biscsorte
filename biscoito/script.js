let phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela ao invés de amaldiçoar a escuridão.",

]

function newPhrase() {

let random = Math.floor(Math.random() *(phrases.length));
document.getElementById('sorte').innerHTML = phrases[random];


document.querySelector(".scr1").classList.add("hide")
document.querySelector(".scr2").classList.remove("hide")



}