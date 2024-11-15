const validate = new window.JustValidate('#form')

// validate
let validation = new JustValidate("#form")
validation.addField("#name", [
    {
        rule: "required",
        errorMessage: "Please enter your name"
    },
    {
        rule: 'minLength',
        errorMessage: "min 2 symbols",
        value: 3,
    }
])
validation.addField("#email", [
    {
        rule: "required",
        errorMessage: "Please enter your email"
    },
    {
        rule: 'email',
    },
])
validation.addField("#password", [
    {
        rule: "required",
        errorMessage: "Please enter your password",
    },
    {
        rule: 'password',
        rule: 'minLength',
        errorMessage: "min 4 symbols",
        value: 4,
    },
])
const showPass = document.getElementById("showPass")
showPass.addEventListener("click", () => {
    const passwordInput = document.getElementById("password")
    const confirmPasswordInput = document.getElementById("confirmPassword")

    if(passwordInput.type === "password") {
        passwordInput.type = "text"
        confirmPasswordInput.type = "text"
    } else {
        passwordInput.type = "password"
        confirmPasswordInput.type = "password"
    }
})