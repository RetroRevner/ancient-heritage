 function dataForm(event) {
   event.preventDefault();
    let email =  document.forms["signIn"]["Email"].value;
    let password =  document.forms["signIn"]["Password"].value;
    let error1 = document.getElementsByClassName("error")[0];
    let error2 = document.getElementsByClassName("error")[1];
    let input = document.getElementsByTagName("input");
    let success1 = document.getElementsByClassName("success")[0];
    let valid = true ;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //بيتاكد ان الايميل مكتوب صح ان يكون جواه @ . حروف انجلش والامتداد
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //بيقبل حروف وارقام 
    if (email.trim() == ""){
       error1.innerText = "✖ Email is required";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       valid = false ;
    }
    else if(!emailRegex.test(email)){
       error1.innerText = "✖ Not valid email address";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       valid = false ;
    }
     else{
       error1.innerText="";
     }
    if (password.trim() == "" ){
       error2.innerText = "✖ Password is required";
       error2.style.color = "rgb(182, 28, 28)" ;
        input[1].classList.add("E");
       valid = false ;
    }
    else if (!passwordRegex.test(password)){
       error2.innerText = "✖ Password must be 8+ chars with letters and numbers.";
       error2.style.color = "rgb(182, 28, 28)" ;
        input[1].classList.add("E");
       valid = false ;
    }
    else{
    error2.innerText="";
    }
   if (valid) {
      //   success1.innerText = "Login successful  Welcome back!";
      //  success1.style.color =" rgb(49, 193, 49)"
        input[0].classList.add("T");
        input[1].classList.add("T");
        let dateOfUser = {
           Email:email
      }
   localStorage.setItem("user",JSON.stringify(dateOfUser));
     setTimeout(() => {
        window.location.href = "../pages/profile.html";
     }, 3000);
   }
 }
function clearM(index) {
  let errorM = document.getElementsByClassName("error");
  let successM = document.getElementsByClassName("success");
  let input = document.getElementsByTagName("input");
   input[index].classList.remove("E");
   errorM[index].innerText = "";
  successM[index].innerText = "";
}

function inMod(){
   
}
