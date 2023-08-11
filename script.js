document.querySelector('button').onclick = function () {
    let password = document.querySelector('#password').value
    let confirm = document.querySelector('#confirm_password').value

    if (password !== confirm) {
        alert("Passwords do not match!")
        return false;
    }
}