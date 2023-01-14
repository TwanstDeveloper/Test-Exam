function jaran() {
    const x = document.getElementById("num1").value;
    const y = document.getElementById("num2").value;
    document.getElementById("kkk").innerHTML = x * y;
}

function dabash() {
    const m = document.getElementById("num1").value;
    const d = document.getElementById("num2").value;
    document.getElementById("kkk").innerHTML = m / d;
}

function kam() {
    const j = document.getElementById("num1").value;
    const k = document.getElementById("num2").value;
    document.getElementById("kkk").innerHTML = j - k;
}

function ko() {
    var h = document.getElementById("num1").value;
    var a = document.getElementById("num2").value;
    var c = parseInt(a) + parseInt(h);
    document.getElementById("kkk").innerHTML = c;
}

function rf() {
    window.location.href = "index.html";
}