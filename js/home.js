window.onload = function() {
        const pic1 = document.getElementById("pic1");
        const pic2 = document.getElementById("pic2");
        
        // بنضيف الكلاس اللي فيه التعديلات عشان الترانزيشن يشتغل
        pic1.classList.add("transition");
        pic2.classList.add("transition");
    };

let headerElement = document.querySelector(".back");
function homeMod() {


    document.querySelector(".container").classList.toggle("light");
    document.querySelector(".start1").classList.toggle("light");
    document.querySelector(".start2").classList.toggle("light");
    document.querySelector(".homeEnd").classList.toggle("light");
    document.querySelector("#pic1").classList.toggle("light");
    document.querySelector("#pic2").classList.toggle("light");
    let img1 =document.querySelector("#pic1");
    let img2 = document.querySelector("#pic2");
    if(img1.classList.contains("light")){img1.src="assets/Logos/Gemini_Generated_Image_1v6z321v6z321v6z.png";}else{img1.src="assets/Logos/8cc965f1bdc89d973ee405eeeba73d60.jpg";}
    if(img2.classList.contains("light")){img2.src="assets/Logos/e0693429b82dbaf5307eff5f7196b8911.jpg";}else{img2.src="assets/Logos/e0693429b82dbaf5307eff5f7196b891.jpg";}







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
