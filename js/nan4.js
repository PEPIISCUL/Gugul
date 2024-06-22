function chh() {
    if (document.getElementById("ch").checked) {
        document.getElementById("t2").innerHTML = "1"
    } else {
        document.getElementById("t2").innerHTML = "0"
    }
}
function nano() {
    for (let i = 0; i < parseInt(document.getElementById("t").innerHTML) + 1; i++) {
        document.getElementById("ooo").remove()
    }
}
function nano2() {
    document.getElementById("a").style.marginLeft = "0px"
    document.getElementById("a").style.marginTop = "30px"
}
function nano4() {
    if (document.getElementById("ch2").checked) {
        document.getElementById("t3").innerHTML = "1"
    } else {
        document.getElementById("t3").innerHTML = "0"
    }
}