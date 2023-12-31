function copyPassword() {

    let passInput = document.getElementById("password");

    if (passInput.value.trim() === "") {
        alert('Please generate a password.');
        return;
    }

    navigator.clipboard.writeText(passInput.value)
        .then(function() {
            // alert("Password copied!");
        })
        .catch(function(err) {
            alert("Unable to copy password. Please refresh the page and try again.");
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

    // password generation
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

const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");

    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark") {
        body.classList.add("dark")
        toggle.classList.add("active")
    }
    console.log(getMode)

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark")

        if(!body.classList.contains("dark")){
            return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark")
    });

    toggle.addEventListener("click", () => toggle.classList.toggle("active"));

function toggleToolTip() {
    let tooltip = document.getElementById("copyToolTip");
      tooltip.style.display = "block";

      // Hides the tooltip after 3 seconds; fade out transition
      setTimeout(function() {
        tooltip.style.opacity = 0;
        setTimeout(function() {
          tooltip.style.display = "none";
          tooltip.style.opacity = 1;
        }, 1000);
      }, 3000);
}