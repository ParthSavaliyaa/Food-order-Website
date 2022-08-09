function validate(){
    var useremail=document.signup.emails.value;
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

 var pass1=document.signup.password.value;
 if( pass1 == "" ){
    document.getElementById("p1alert").innerHTML="please enter Password";
    password.style.border = "red 1px solid";
    return false;
    
}
else{
    p1alert.innerHTML="";
}

var pass2=document.signup.retype.value;
if( pass2 == "" ){
    document.getElementById("p2alert").innerHTML="please Re-enter Password";
    password.style.border = "red 1px solid";
    return false;
}
else if(!pass2.match(pass1)){
    document.getElementById("p2alert").innerHTML="password mismatched";
    retype.style.border = "red 1px solid";
    return false;

}
else{
    p2alert.innerHTML="";
}

}

