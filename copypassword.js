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