  function Name(event){
     let name =  document.forms["signUp"]["Name"].value;
     let error1 = document.getElementsByClassName("error")[0];
     let input = document.getElementsByTagName("input");
     let englishRegex = /^[A-Za-z ]+$/; 
      if (name.trim() == ""){
       error1.innerText = "✖ Name is required";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       return false ;
     }
      else if(!englishRegex.test(name)){
       error1.innerText = "✖ Name must contain only English letters";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       return false ;
     }
     else if (name.length < 3){
       error1.innerText = "✖ Name must be at least 3 characters";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       return false ;     
     }
      else{
       error1.innerText="";
       return true ;
     }
  }
  function Email(event){
     let email =  document.forms["signUp"]["Email"].value;
     let error2 = document.getElementsByClassName("error")[1];
     let input = document.getElementsByTagName("input");
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //بيتاكد ان الايميل مكتوب صح ان يكون جواه @ . حروف انجلش والامتداد
      if (email.trim() == ""){
       error2.innerText = "✖ Email is required";
       error2.style.color ="rgb(182, 28, 28)" ;
       input[1].classList.add("E");
       return false ;
      }
      else if(!emailRegex.test(email)){
       error2.innerText = "✖ Not valid email address";
       error2.style.color ="rgb(182, 28, 28)" ;
       input[1].classList.add("E");
       return false ;
      }
      else{
       error2.innerText="";
       return true ;
     }
  }
  function password(event){
    let password =  document.forms["signUp"]["Password"].value;
    let error3 = document.getElementsByClassName("error")[2];
    let input = document.getElementsByTagName("input");
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //بيقبل حروف وارقام 
      if (password.trim() == "" ){
       error3.innerText = "✖ Password is required";
       error3.style.color = "rgb(182, 28, 28)" ;
        input[2].classList.add("E");
      return false ;
     }
     else if (!passwordRegex.test(password)){
       error3.innerText = "✖ Password must be 8+ chars with letters and numbers.";
       error3.style.color = "rgb(182, 28, 28)" ;
        input[2].classList.add("E");
      return false ;
     }
    else{
    error3.innerText="";

    return true ;
    }
  }
  function cpassword(event){
    let password =  document.forms["signUp"]["Password"].value;
     let confirm_password =  document.forms["signUp"]["confirmPassword"].value;
     let error4 = document.getElementsByClassName("error")[3];
     let input = document.getElementsByTagName("input");
      if (confirm_password.trim() === "") {
      error4.innerText = "✖ Confirm password is required";
      error4.style.color = "rgb(182, 28, 28)";
      input[3].classList.add("E");
      return false ;
     }
     else if (confirm_password !== password) {
       error4.innerText = "✖ Passwords don't match";
       error4.style.color = "rgb(182, 28, 28)";
       input[3].classList.add("E");
       return false ;
     }
    else{
    error4.innerText="";
    return true ;
    }
  }
  
  function dataForm(event) {
   event.preventDefault();
    let input = document.getElementsByTagName("input");
    let name =  document.forms["signUp"]["Name"].value;
    let email =  document.forms["signUp"]["Email"].value;
    let pass =  document.forms["signUp"]["Password"].value;
    
   if ( Name() && Email() && password() && cpassword()) {
      input[0].classList.add("T");
      input[1].classList.add("T");
      input[2].classList.add("T");
      input[3].classList.add("T");
      let dateOfUser = {
      Name:name ,
      Email:email ,
      Password:pass
      }
   localStorage.setItem("user",JSON.stringify(dateOfUser));
     setTimeout(() => {
        window.location.href = "../pages/profile.html";
     }, 3000);
   }

 }
function clearM(index) {
  let errorM = document.getElementsByClassName("error");
  let input = document.getElementsByTagName("input");
   input[index].classList.remove("E");
   errorM[index].innerText = "";
}

function upMod(){
       const elementsToToggle = [
        ".a", ".miniTitle", "h1 span", "h1", ".line", 
        ".description",".left", ".sign-up","div select", "button",
         "form div", ".form-link .active",
          ".form-link .sign",
    ];

    elementsToToggle.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) { 
            el.classList.toggle("light");
        }
    });

    const groups = [ "div label", "div input" , ".sign-up p","div option",, ".Q a"];
    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.toggle("light");
        });
    });
}
  if (document.querySelector(".a").classList.contains("light")) {
    let currentUp = localStorage.setItem("UpMod", "light");
}
else {
    let currentUp = localStorage.setItem("UpMod", "dark");
}
let savedUp = localStorage.getItem("UpMod");
let savedMod = localStorage.getItem("theme");
if (savedUp !== savedMod) {
    upMod();
}
