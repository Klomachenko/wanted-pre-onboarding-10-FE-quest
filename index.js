document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault()
    let id = document.getElementById('id').value
    let pw = document.getElementById('password').value
    console.log(id)
    console.log(pw)
})