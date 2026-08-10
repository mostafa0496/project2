
var bt = document.getElementById("bttn")
var p = document.getElementById("nigger")
var cuser = "admin"
var cpass = "123456"

bt.addEventListener("click", function () {
    var iuser = document.getElementById("username").value
    var ipass = document.getElementById("password").value

    if (iuser === cuser && ipass === cpass) {
        console.log("nigger")
        p.innerHTML = "Correct"
        p.style.color = "green"
        window.location = "pro.html"
    } else {
        p.innerHTML = "incorrect"
        p.style.color = "red"
    }
});