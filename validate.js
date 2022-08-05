function validate(){
    var useremail=document.login.emails.value;
    var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 
   if  ( useremail == "" ){
    document.getElementById("ealert").innerHTML="Enter Email address";
    emails.style.border="red 1px solid";
    return false;
   }
   else if(!useremail.match(format)){
    document.getElementById("ealert").innerHTML="Invalid email address";
    emails.style.border= "red 1px solid";
 
    return false;
 }
   else{
    ealert.innerHtml="";
   }

var pass1=document.login.password.value;
if( pass1 == "" ){
    document.getElementById("palert").innerHTML="please enter Password";
    password.style.border = "red 1px solid";
    return false;
    
}
else{
    palert.innerHTML="";
}


 }
 