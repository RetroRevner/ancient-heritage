let headerElement = document.querySelector("header");
function homeMod() {
    headerElement.classList.toggle("light");
    document.querySelector(".Ephemera").classList.toggle("light");
    document.querySelector(".Ephemera span").classList.toggle("light");
    document.querySelector(".curated").classList.toggle("light");
    document.querySelector(".collectionButtom button").classList.toggle("light");
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