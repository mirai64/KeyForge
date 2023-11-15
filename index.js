function copyPassword() {

    let passInput = document.getElementById("passInput");

    if (passInput.value.trim() === "") {
        alert('Please generate a password.');
        return;
    }

    navigator.clipboard.writeText(passInput.value)
        .then(function() {
            alert("Password copied!");
        })
        .catch(function(err) {
            alert("Unable to copy password. Please try again.");
        });
}

let slider = document.getElementById("length")
let output = document.getElementById("lengthValue")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function generatePassword() {
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let charset = "";

    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (numbers) charset += "0123456789"
    if (symbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?"

    let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex]
        }

        document.getElementById("password").value = password;

}

function updateLengthValue() {
    let length = document.getElementById("length").value;
    document.getElementById("lengthValue").innerText = length;
}

// link this to the Password Strength: portion
// options are: Bad, Weak, Strong, Very Strong
// Bad password: 5-7
// Weak: 8-11
// Strong: 12-24
// Very Strong: 25-64