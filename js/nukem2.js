function animate() {
    if (parseInt(document.getElementById("e").style.marginLeft.replace(/px/, "")) >= 780) {
        document.getElementById("t").innerHTML = 'f'
        document.getElementById("e").src = "../img/witch.png"
    }
    if (parseInt(document.getElementById("e").style.marginLeft.replace(/px/, "")) <= 300) {
        document.getElementById("t").innerHTML = 't'
        document.getElementById("e").src = "../img/witch2.png"
    }
    if (document.getElementById("t").innerHTML == 't') {
        if (document.getElementById("t3").innerHTML == "1") {
            document.getElementById("e").style.width = "111px"
            document.getElementById("e").style.height = "61px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) + 2 + "px"
        }
        if (document.getElementById("t3").innerHTML == "2") {
            document.getElementById("e").style.width = "83.25px"
            document.getElementById("e").style.height = "45.75px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) + 5 + "px"
        }
        if (document.getElementById("t3").innerHTML == "3") {
            document.getElementById("e").style.width = "55.5px"
            document.getElementById("e").style.height = "30.5px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) + 10 + "px"
        }
    }
    if (document.getElementById("t").innerHTML == 'f') {
        if (document.getElementById("t3").innerHTML == "1") {
            document.getElementById("e").style.width = "111px"
            document.getElementById("e").style.height = "61px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) - 2 + "px"
        }
        if (document.getElementById("t3").innerHTML == "2") {
            document.getElementById("e").style.width = "83.25px"
            document.getElementById("e").style.height = "45.75px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) - 5 + "px"
        }
        if (document.getElementById("t3").innerHTML == "3") {
            document.getElementById("e").style.width = "55.5px"
            document.getElementById("e").style.height = "30.5px"
            document.getElementById("e").style.marginLeft = parseFloat(document.getElementById("e").style.marginLeft.replace(/px/, "")) - 10 + "px"
        }
    }
    if (document.getElementById("t2").innerHTML == 'n') {
        window.requestAnimationFrame(animate)
    }
}
window.requestAnimationFrame(animate)