let startEl = document.getElementById("start-el")
let messageEl = document.getElementById("message-el")
let buttonEl = document.getElementById("button-el")
let inputEl = document.getElementById("input-el")
let message = ""
startEl.addEventListener("click", function() {
    message = "PLEASE ENTER YOUR AGE"
    messageEl.textContent = message
})
const call = buttonEl.addEventListener("click", function() {
    let UserAge = Number(inputEl.value)
    if (UserAge < 18) {
        message = "PLEASE YOU ARE NOT ELIGIBLE FOR A DRIVERS LICENSE"
    }else if (UserAge > 18) {
        message = "YOU ARE ELIGIBLE"
    }else {
        message = "YOU ARE ELIGIBLE"
    }
    inputEl.value = ""
    messageEl.textContent = message
})