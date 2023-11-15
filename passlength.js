let slider = document.getElementById("passRange")
let output = document.getElementById("charRange")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// link this to the Password Strength: portion
// options are: Bad, Weak, Strong, Very Strong
// Bad password: 5-7
// Weak: 8-11
// Strong: 12-24
// Very Strong: 25-64