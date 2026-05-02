let storeData = localStorage.getItem("user")
 let userData = JSON.parse(storeData);

 function email (event){
   let emailV =  document.forms["signIn"]["Email"].value;
   let error1 = document.getElementsByClassName("error")[0];
   let input = document.getElementsByTagName("input");
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //بيتاكد ان الايميل مكتوب صح ان يكون جواه @ . حروف انجلش والامتداد

       if (emailV.trim() == ""){
       error1.innerText = "✖️ Email is required";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       return false ;
    }
    else if(!emailRegex.test(emailV)){
       error1.innerText = "✖️ Not valid email address";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       return false ;
    }
     else{
       error1.innerText="";
       return true ;
     }
 }
 function password(event){
    let passwordV =  document.forms["signIn"]["Password"].value;
    let error2 = document.getElementsByClassName("error")[1];
    let input = document.getElementsByTagName("input");
    let passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/; //بيقبل حروف وارقام 

    if (passwordV.trim() == "" ){
       error2.innerText = "✖️ Password is required";
       error2.style.color = "rgb(182, 28, 28)" ;
        input[1].classList.add("E");
      return false ;
    }
    else if (!passwordRegex.test(passwordV)){
       error2.innerText = "✖️ Password must be 8+ chars with letters and numbers.";
       error2.style.color = "rgb(182, 28, 28)" ;
        input[1].classList.add("E");
       return false ;
    }
    else{
    error2.innerText="";
    return true ;
    }
 }


 function dataForm(event) {
   event.preventDefault();
   let input = document.getElementsByTagName("input");
   let emailV =  document.forms["signIn"]["Email"].value;
   let passwordV =  document.forms["signIn"]["Password"].value;
   let notFound = document.querySelector(".errorS")
    if (email() && password()) {
        input[0].classList.add("T");
        input[1].classList.add("T");
        if (!userData) {
          notFound.innerText = "No account found. Please sign up first.";
          notFound.style.color = "rgb(182, 28, 28)" ;
        }
      if((userData.Email == emailV) && (userData.Password == passwordV) ){
        setTimeout(() => {
        window.location.href = "../pages/profile.html";
        }, 3000);
      }
      else {
        notFound.innerText = "No account found. Please sign up first.";
        notFound.style.color = "rgb(182, 28, 28)" ;
        setTimeout(() => {
        window.location.href = "../pages/sign-up.html";
        }, 3000);
      } 

   }
 }





function clearM(index) {
  let errorM = document.getElementsByClassName("error");
  let successM = document.getElementsByClassName("success");
  let input = document.getElementsByTagName("input");
   input[index].classList.remove("E");
   errorM[index].innerText = "";
}
function inMod() {

    const elementsToToggle = [
        ".a", ".miniTitle", "h1 span", "h1", ".line", 
        ".description", ".sign-in", "button", ".or",
         "form div", ".form-link .active",
          ".form-link .sign",
    ];

    elementsToToggle.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) { 
            el.classList.toggle("light");
        }
    });

    const groups = [ "div label", "div input" , ".sign-in p", ".Q a", ".icon"];
    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.toggle("light");
        });
    }); 
  }
  if (document.querySelector(".a").classList.contains("light")) {
    let currentIn = localStorage.setItem("InMod", "light");
}
else {
    let currentIn = localStorage.setItem("InMod", "dark");
}
let savedIn = localStorage.getItem("InMod");
let savedMod = localStorage.getItem("theme");
if (savedIn !== savedMod) {
    inMod();
}