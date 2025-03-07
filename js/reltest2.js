document.getElementById("1").style.marginTop = screen.availHeight / 4 - parseFloat(document.getElementById("1").style.height.replace(/px/, "")) + "px"
document.getElementById("1").style.marginLeft = screen.availWidth / 2 + "px"
document.getElementById("5").style.marginTop = screen.availHeight - 350 + "px"
document.getElementById("4").style.marginTop = screen.availHeight - 350 + "px"
const audio = new Audio('../audio/cannonfire.mp3')

window.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        //document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) - 15 + "px"
        //document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) - 15 + "px"
        //document.getElementById("6").style.marginLeft = parseFloat(document.getElementById("6").style.marginLeft.replace(/px/, "")) - 15 + "px"
        document.getElementById("p6").innerHTML = "d"
        document.getElementById("1").src = "../img/pointd.png"
    }
    if (event.key === 'a') {
        //document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) + 15 + "px"
        //document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 15 + "px"
        //document.getElementById("6").style.marginLeft = parseFloat(document.getElementById("6").style.marginLeft.replace(/px/, "")) + 15 + "px"
        document.getElementById("p6").innerHTML = "a"
        document.getElementById("1").src = "../img/pointa.png"
    }
    if (event.key === 'w') {
        //document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) + 15 + "px"
        //document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) + 15 + "px"
        //document.getElementById("6").style.marginTop = parseFloat(document.getElementById("6").style.marginTop.replace(/px/, "")) + 15 + "px"
        document.getElementById("p6").innerHTML = "w"
        document.getElementById("1").src = "../img/pointw.png"
    }
    if (event.key === 's') {
        //document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) - 15 + "px"
        //document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) - 15 + "px"
        //document.getElementById("6").style.marginTop = parseFloat(document.getElementById("6").style.marginTop.replace(/px/, "")) - 15 + "px"
        document.getElementById("p6").innerHTML = "s"
        document.getElementById("1").src = "../img/points.png"
    }
    if (event.key === 'm' && parseFloat(document.getElementById("4").style.marginLeft.replace(/px/, "")) > 599) {
        document.getElementById("p7").innerHTML = document.getElementById("p6").innerHTML
        document.getElementById("4").style.marginLeft = "0px"
        
        if (document.getElementById("p7").innerHTML == "d") {
            document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) + 120 + "px"
            document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 120 + "px"
            document.getElementById("6").style.marginLeft = parseFloat(document.getElementById("6").style.marginLeft.replace(/px/, "")) + 120 + "px"
        }
        if (document.getElementById("p7").innerHTML == "a") {
            document.getElementById("2").style.marginLeft = parseFloat(document.getElementById("2").style.marginLeft.replace(/px/, "")) - 120 + "px"
            document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) - 120 + "px"
            document.getElementById("6").style.marginLeft = parseFloat(document.getElementById("6").style.marginLeft.replace(/px/, "")) - 120 + "px"
        }
        if (document.getElementById("p7").innerHTML == "w") {
            document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) - 120 + "px"
            document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) - 120 + "px"
            document.getElementById("6").style.marginTop = parseFloat(document.getElementById("6").style.marginTop.replace(/px/, "")) - 120 + "px"
        }
        if (document.getElementById("p7").innerHTML == "s") {
            document.getElementById("2").style.marginTop = parseFloat(document.getElementById("2").style.marginTop.replace(/px/, "")) + 120 + "px"
            document.getElementById("3").style.marginTop = parseFloat(document.getElementById("3").style.marginTop.replace(/px/, "")) + 120 + "px"
            document.getElementById("6").style.marginTop = parseFloat(document.getElementById("6").style.marginTop.replace(/px/, "")) + 120 + "px"
        }
        audio.play()
        document.getElementById("3").style.marginLeft = parseFloat(document.getElementById("1").style.marginLeft.replace(/px/, "")) + 17.5 + "px"
        document.getElementById("3").style.marginTop = parseFloat(document.getElementById("1").style.marginTop.replace(/px/, "")) + 17.5 + "px"
        document.getElementById("p3").innerHTML = parseFloat(document.getElementById("3").style.marginLeft.replace(/px/, "")) + 200
        document.getElementById("p4").innerHTML = "1"
    }
    
})