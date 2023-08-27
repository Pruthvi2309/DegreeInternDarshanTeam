function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/    //pattern for validation
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    //Name Validation
    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }

    //Bday Validation
    if(values.bday === ""){
        error.bday = "Birthday  should not be empty"
    }
    else{
        error.bday = ""
    }

    //Email Validation
    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    }
    else{
        error.email = ""
    }

    //Phone Validation
    if(values.phone === ""){
        error.phone = "Phone Number should not be empty"
    }
    else{
        error.phone = ""
    }

    //Password Validation
    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }
    else{
        error.password = ""
    }

    return error;
}

export default Validation;