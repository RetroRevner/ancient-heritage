  function dataForm(event) {
   event.preventDefault();
    let name =  document.forms["signUp"]["Name"].value;
    let email =  document.forms["signUp"]["Email"].value;
    let password =  document.forms["signUp"]["Password"].value;
    let confirm_password =  document.forms["signUp"]["confirmPassword"].value;
    let error1 = document.getElementsByClassName("error")[0];
    let error2 = document.getElementsByClassName("error")[1];
    let error3 = document.getElementsByClassName("error")[2];
    let error4 = document.getElementsByClassName("error")[3];
    let input = document.getElementsByTagName("input");
    let success1 = document.getElementsByClassName("success")[0];
    let valid = true ;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //بيتاكد ان الايميل مكتوب صح ان يكون جواه @ . حروف انجلش والامتداد
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //بيقبل حروف وارقام 
    let englishRegex = /^[A-Za-z ]+$/;
    if (name.trim() == ""){
       error1.innerText = "✖ Name is required";
       error1.style.color ="rgb(182, 28, 28)" ;
       input[0].classList.add("E");
       valid = false ;
    }
    else if(!englishRegex.test(name)){
       error1.innerText = "✖ Name must be English";
       error1.style.color ="rgb(182, 28, 28)" ;
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
    if (password.trim() == "" ){
       error3.innerText = "✖ Password is required";
       error3.style.color = "rgb(182, 28, 28)" ;
        input[2].classList.add("E");
       valid = false ;
    }
    else if (!passwordRegex.test(password)){
       error3.innerText = "✖ Password must be 8+ chars with letters and numbers.";
       error3.style.color = "rgb(182, 28, 28)" ;
        input[2].classList.add("E");
       valid = false ;
    }
    else{
    error3.innerText="";
    }
    if (confirm_password.trim() === "") {
      error4.innerText = "✖ Confirm password is required";
      error4.style.color = "rgb(182, 28, 28)";
      input[3].classList.add("E");
      valid = false;
    }
    else if (confirm_password !== password) {
       error4.innerText = "✖ Passwords don't match";
       error4.style.color = "rgb(182, 28, 28)";
       input[3].classList.add("E");
       valid = false;
    }
    else{
    error4.innerText="";
    }
   if (valid) {
      // success1.innerText = "Account created successfully 🎉"
      //  success1.style.color =" rgb(24, 80, 24)"
      input[0].classList.add("T");
      input[1].classList.add("T");
      input[2].classList.add("T");
      input[3].classList.add("T");
      let dateOfUser = {
      Name:name,
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
