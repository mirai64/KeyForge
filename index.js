function copyPassword() {
    let copyText = document.getElementById("passInput");
}

copyText.select();
copyText.setSelectionRange(0, 65);
navigator.clipboard.writeText(copyText.value);