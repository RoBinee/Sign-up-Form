const pwdInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm_password");
const errorMsg = document.querySelector(".error-msg");

confirmInput.addEventListener("keyup", (e)=>{
    const pwd = pwdInput.value;
    const confirmpwd = e.target.value;

    if(pwd === confirmpwd){
        pwdInput.classList.remove("error");
        confirmInput.classList.remove("error");
        errorMsg.textContent = ""
    }else{
        if(!pwdInput.classList.contains("error")){
            pwdInput.classList.add("error");
            confirmInput.classList.add("error");
            errorMsg.textContent = "Password do not match"
        }
    }
})