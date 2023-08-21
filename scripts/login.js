

let person = JSON.parse(localStorage.getItem("person"));
let uname = document.getElementById("uname");
uname.value = person.uname


function login(uname,password) {
    let pass = document.getElementById("pass").value;
    if(pass !== person.password && uname.value !== person.uname)
    {
        const alert = document.getElementById("alert");
        alert.style.color = "white";
        alert.style.fontSize = "30px";
        alert.style.padding = "10px";
        alert.innerHTML = "Please fill in the details, correctly Data!";
        // alert("Please fill in the details correctly Data");
    }else{
        window.location.href="../pages/task.html";
    }
}



