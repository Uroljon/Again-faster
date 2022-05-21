document.querySelector(".form").addEventListener("input", e => {
    if(e.target.value){
        e.target.classList.add("active")
    }else{
        e.target.classList.remove("active")
    }
    if (e.target.classList.contains("check_pass")) {
        let pass = document.querySelector(".pass").value;
        if (pass !== e.target.value) {
            document.querySelector(".error").classList.add("visible")
            document.querySelector(".form__btn").setAttribute("disabled", "")
        }else{
            document.querySelector(".error").classList.remove("visible")
            document.querySelector(".form__btn").removeAttribute("disabled")
        }
    }
})
