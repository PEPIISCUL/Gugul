function cul() {
    if (document.getElementById("cu2").innerHTML == "g") {
        if (document.getElementById("cu").innerHTML == "r") {
            document.getElementById("la").src = "../img/layer2.png"
            document.getElementById("2").style.zIndex = 0
            document.getElementById("1").style.zIndex = 1
            document.getElementById("cu").innerHTML = "b"
            document.getElementById("cu2").innerHTML = "n"
        }
    }
    if (document.getElementById("cu2").innerHTML == "g") {
        if (document.getElementById("cu").innerHTML == "b") {
            document.getElementById("la").src = "../img/layer1.png"
            document.getElementById("1").style.zIndex = 0
            document.getElementById("2").style.zIndex = 1
            document.getElementById("cu").innerHTML = "r"
            document.getElementById("cu2").innerHTML = "n"
        }
    }
    document.getElementById("cu2").innerHTML = "g"
}