let headerElement = document.querySelector(".back");
function homeMod() {
    const elementsToToggle = [
       ".nmec",".egy",".art",".grand",".coptic"
    ];

    elementsToToggle.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) { 
            el.classList.toggle("light");
        }
    });

    const groups = [".icon" ,".back h3",".back p" ,".back",".front" ,".card",".titleFeatures",".titleCard"];
    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.toggle("light");
        });
    });

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
 }
