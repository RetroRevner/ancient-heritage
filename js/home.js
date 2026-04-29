let headerElement = document.querySelector("header");
function homeMod() {
    
}
if (headerElement.classList.contains("light")){
    let currenthome = localStorage.setItem("home","light");
}
else {
    let currenthome = localStorage.setItem("home","dark");
}
let savedhome = localStorage.getItem("home");
let savedMod = localStorage.getItem("theme");
if (savedhome !== savedMod) {
    homeMod();
}