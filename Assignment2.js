const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

function changecase (selectortocheck){
  selectortocheck.value = selectortocheck.value.toLowerCase();

}




function validate(){

  var usremail = document.forminput.email.value
  var usrname = document.forminput.login.value;
  var password1 = document.forminput.pass.value;
  var password2 = document.forminput.pass2.value;
  var usrterms = terms;

  var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(usremail == ""){
  
      emails.innerHTML= "Enter the Email!"
      email.style.border= "red 1px solid";
      return false;

  }
   else if(!usremail.match(format)){
      emails.innerHTML="Invalid!"
      email.style.border= "red 1px solid";

      return false;
   }

   else{
      emails.innerHTML = "";

   }

   if(usrname == ""){

      document.getElementById("logins").innerHTML="Enter the UserName!";
      login.style.border= "red 1px solid";

      return false;


   }

   else if(usrname>20){
      logins.innerHTML="The username should be less than 20 characters!";
      login.style.border= "red 1px solid";

      return false;

   }
   
   else{
      logins.innerHTML="";
   }

   var lowerCase= /[a-z]/g;
   var upperCase= /[A-Z]/g;

   if(password1 == ""){
      passw.innerHTML="Enter the password!"
      pass.style.border= "red 1px solid";

      return false;

   }
   else if(password1.length < 6){
      passw.innerHTML="The password should be of 6 characters or more!"
      pass.style.border= "red 1px solid";

      return false;

   }
   else if(!password1.match(lowerCase)){
      passw.innerHTML="The password should have atleast one lowercase letter!"
      pass.style.border= "red 1px solid";

      return false;

   }

   else if(!password1.match(upperCase)){
      passw.innerHTML="The password should have atleast one uppercase letter!"
      
      pass.style.border= "red 1px solid";

      return false;
   }
   else{
      passw.innerHTML=""
   }

   if(password2 == ""){
      passw2.innerHTML="Reenter your password"
      pass2.style.border= "red 1px solid";


      return false;
   }

   else if(password1!=password2){
      passw2.innerHTML="Password does not match!"
      pass2.style.border= "red 1px solid";

      return false;

   }
   else{
      passw2.innerHTML="";
   }

   if(usrterms.checked == false){
      termm.innerHTML="you must agree to the terms and conditions above to continue further!"
      return false;

   }
   return true;
 
 }
 function confirmNews(){

    var newss = document.getElementById("newsletter");

    if(newss.checked){
        alert("You are subscribing to Weekly Kiktten Pictures Newsletter. Click Ok to Continue");
}
  

};
document.getElementById("newsletter").addEventListener("click", confirmNews, false);







