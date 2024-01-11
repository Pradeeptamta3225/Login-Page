let username = document.getElementById("userName");
let password = document.getElementById("passWord");

function validForm(){
    if( username.value == ""){
        
        document.getElementById("userError").innerHTML = "User Name is Empty"
    }
    return true;
}