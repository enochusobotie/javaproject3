        const Btn = document.getElementById("enter")
        Btn.addEventListener('click', function (e){
        // alert("working")
        let InputError = ""
        const error = document.getElementById("error")
        const number = document.getElementById("number")
        const getsales = document.getElementById("getsales")
        if(number.value === ""){
            number.style.borderColor = "#ff0000"
            InputError = " You must enter a value to continue"
            InputError.style.color = "#ff0000"
            error.innerHTML = InputError
        }else if(isNaN(number.value)){
            number.style.borderColor = "#ff0000"
            InputError = "invalid price entry"
            error.innerHTML = InputError
        }
        else{
            // alert("All is well")
             error.innerHTML = ""
             number.style.borderColor = "#00ff00"
             getsales.innerHTML = number_reveal(number.value)
        }
    })