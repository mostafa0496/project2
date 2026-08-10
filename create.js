var bt = document.getElementById("bttn")
var p = document.getElementById("nigger")
bt.addEventListener("click",function(){
    var ps = document.getElementById("password").value
    var cps = document.getElementById("cpassword").value

    if(ps===cps){
        p.style.color="green"
        p.innerHTML="correct"
        window.location = "pro.html"
    }
    else{
        p.style.color="red"
        p.innerHTML="Fuck off"
    }
})

