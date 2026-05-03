 function dataForm(event) {
   event.preventDefault();
    let name =  document.forms["feedback"]["Name"].value;
    let email =  document.forms["feedback"]["Email"].value;
    let message =  document.forms["feedback"]["Message"].value;
    let error1 = document.getElementsByClassName("error")[0];
    let error2 = document.getElementsByClassName("error")[1];
    let error3 = document.getElementById("Error");
    let input = document.getElementsByTagName("input");
    let text = document.getElementsByTagName("textarea");
    let success1 = document.getElementsByClassName("success")[0];
    let valid = true ;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //بيتاكد ان الايميل مكتوب صح ان يكون جواه @ . حروف انجلش والامتداد
       if (name.trim() == "" ){
       error1.innerText = "✖ Name is required";
       error1.style.color = "rgb(182, 28, 28)" ;
        input[0].classList.add("E");
       valid = false ;
    }
    else{
    error1.innerText="";
}
    if (email.trim() == ""){
       error2.innerText = "✖ Email is required";
       error2.style.color ="rgb(182, 28, 28)" ;
       input[1].classList.add("E");
       valid = false ;
    }
    else if(!emailRegex.test(email)){
       error2.innerText = "✖ Not valid email address";
       error2.style.color ="rgb(182, 28, 28)" ;
       input[1].classList.add("E");
       valid = false ;
    }
     else{
       error2.innerText="";
     }


    if (message.trim() == "" ){
       error3.innerText = "✖ Message is required";
       error3.style.color = "rgb(182, 28, 28)" ;
        text[0].classList.add("E");
       valid = false ;
    }
    else{
    error3.innerText="";
    }
   if (valid) {
      //   success1.innerText = "Login successful  Welcome back!";
      //  success1.style.color =" rgb(49, 193, 49)"
        input[0].classList.add("T");
        input[1].classList.add("T");
        text[0].classList.add("T");
     setTimeout(() => {
        window.location.href = "../pages/feedBack.html";
     }, 2000);
   }
 }

function clearM(index) {
  let errorM = document.getElementByClassName("error");
  let input = document.getElementsByTagName("input");
  let text = document.getElementsByTagName("textarea");
   input[index].classList.remove("E");
   errorM[index].innerText = "";
} 
function clearT() {
  let errorT= document.getElementById("Error");
  let text = document.getElementsByTagName("textarea")[0];
    text.classList.remove("E");
    errorT.innerText = "";
}

function feedMod(){
   const elementsToToggle = [
        ".a", ".miniTitle", "h1 span", "h1", ".line", 
        ".description", ".head-contact", ".main-contact", "li", 
        ".left", "button"
   ];

   elementsToToggle.forEach(selector => {
        const allElements = document.querySelectorAll(selector);
        allElements.forEach(el => {
            el.classList.toggle("light");
        });
    });

   const groups = [ "div label", "div input", "div select", "div textarea", ".feed-back P", "div option"];
    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.toggle("light");
        });
    });

}
if (document.querySelector(".a").classList.contains("light")) {
   let currentfeed = localStorage.setItem("feedMod", "light");
}
else {
   let currentfeed = localStorage.setItem("feedMod", "dark");
}
let savedfed = localStorage.getItem("feedMod");
let savedMod = localStorage.getItem("theme");
if (savedfed !== savedMod) {
   feedMod();
}