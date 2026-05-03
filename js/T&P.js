function T_PMod() {
    const elementsToToggle = [
        ".background","h1"
    ];

    elementsToToggle.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) { 
            el.classList.toggle("light");
        }
    });

    const groups = ["h3","p","li"];
    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.toggle("light");
        });
    });
}
  if (document.querySelector(".background").classList.contains("light")) {
    let currentT_P = localStorage.setItem("t_pMod", "light");
}
else {
    let currentT_P = localStorage.setItem("t_pMod", "dark");
}
let savedT_P = localStorage.getItem("t_pMod");
let savedMod = localStorage.getItem("theme");
if (savedT_P !== savedMod) {
    T_PMod();
} 