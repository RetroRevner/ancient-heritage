let head = document.querySelector(".heading h1");
let cards = document.querySelectorAll(".card-container");
function museumMod(){
    head.classList.toggle("light");
    document.querySelector(".heading p").classList.toggle("light");
    document.querySelector(".heading span").classList.toggle("light");
    cards.forEach(e => {
        e.classList.toggle("light");
    })
}
if (head.classList.contains("light")) {
    let currentMus = localStorage.setItem("museumMod", "light");
}
else {
    let currentMus = localStorage.setItem("museumMod", "dark");
}
let savedMus = localStorage.getItem("museumMod");
let savedMod = localStorage.getItem("theme");
if (savedMus !== savedMod) {
    museumMod();
}