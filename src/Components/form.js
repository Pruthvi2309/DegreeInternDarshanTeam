
function validate(){
    if(username.value.length < 9){
        username.style.border = "1px solid red";
        user_error.style.display="block";
        username.focus();
        return false;
    }   
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }  
}