const old = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, ""))
function coll(o1, o2) {
    if (parseFloat(o2.style.marginLeft.replace(/px/, "")) - 1 < parseFloat(o1.style.marginLeft.replace(/px/, "")) + parseFloat(o1.style.width.replace(/px/, "")) && parseFloat(o2.style.marginLeft.replace(/px/, "")) + parseFloat(o2.style.width.replace(/px/, "")) > parseFloat(o1.style.marginLeft.replace(/px/, "")) - 1) {
        if (parseFloat(o2.style.marginTop.replace(/px/, "")) - 1 < parseFloat(o1.style.marginTop.replace(/px/, "")) + parseFloat(o1.style.height.replace(/px/, "")) && parseFloat(o2.style.marginTop.replace(/px/, "")) + parseFloat(o2.style.height.replace(/px/, "")) > parseFloat(o1.style.marginTop.replace(/px/, "")) - 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


function animate() {
    if (document.getElementById("p4").innerHTML == "1") {
        //document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("1").style.marginLeft.replace(/px/, "")) + "px"
        //document.getElementById("3").style.marginTop = parseFloat(document.getElementById("1").style.marginTop.replace(/px/, "")) + 5 + "px"
        //document.getElementById("p3").innerHTML = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 200

        

        if (document.getElementById("p2").innerHTML = "1") {
            const old = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 1000
        }
        document.getElementById("p2").innerHTML = "0"
        if (document.getElementById("p7").innerHTML == "d") {
            document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 3 + "px"
        }
        if (document.getElementById("p7").innerHTML == "a") {
            document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) - 3 + "px"
        }
        if (document.getElementById("p7").innerHTML == "w") {
            document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) - 3 + "px"
        }
        if (document.getElementById("p7").innerHTML == "s") {
            document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) + 3 + "px"
        }
            
            
            //document.getElementById("p").innerHTML = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + "      " + parseFloat(document.getElementById("p3").innerHTML)
        if (coll(document.getElementById("3"), document.getElementById("2")) == true) {
            document.getElementById("p4").innerHTML = "0"
        }
    }
    if (parseFloat(document.getElementById("4").style.marginLeft.replace(/px/, "")) < 601) {
        document.getElementById("4").style.marginLeft = parseFloat(document.getElementById("4").style.marginLeft.replace(/px/, "")) + 6 + "px"
    }
    if
     (document.getElementById("2")) {
        if (coll(document.getElementById("3"), document.getElementById("2")) == true) {
            document.getElementById("p").innerHTML = "true"
            document.getElementById("2").style.marginLeft = "100000000px"
            document.getElementById("3").style.marginLeft = "10000000px"
        }
    }
    if (document.getElementById("2")) {
        if (coll(document.getElementById("1"), document.getElementById("2")) == true) {
            document.getElementById("p").innerHTML = "ded"
            document.getElementById("1").style.marginLeft = "100000000px"
            document.getElementById("3").style.marginLeft = "10000000px"
        }
    }
    if (parseFloat(document.getElementById("1").style.marginLeft.replace(/px/, "")) < parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, ""))) {
        document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) - 0.5 + "px"
    }
    if (parseFloat(document.getElementById("1").style.marginLeft.replace(/px/, "")) > parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, ""))) {
        document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) + 0.5 + "px"
    }
    if (parseFloat(document.getElementById("1").style.marginTop.replace(/px/, "")) > parseFloat(document.getElementById("2").style.marginTop.replace(/px/, ""))) {
        document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) + 0.5 + "px"
    }
    if (parseFloat(document.getElementById("1").style.marginTop.replace(/px/, "")) < parseFloat(document.getElementById("2").style.marginTop.replace(/px/, ""))) {
        document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) - 0.5 + "px"
    }
    window.requestAnimationFrame(animate)
    
}

//window.addEventListener('keydown', (event) => {
//    if (event.key === 'm' && document.getElementById("p2").innerHTML == "1") {
//        document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("1").style.marginLeft.replace(/px/, "")) + "px"
//        document.getElementById("3").style.marginTop = parseFloat(document.getElementById("1").style.marginTop.replace(/px/, "")) + 5 + "px"
//        document.getElementById("p3").innerHTML = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 200
//        window.requestAnimationFrame(animate)
//    }
//    
//})
window.requestAnimationFrame(animate)