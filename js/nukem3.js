var audio = new Audio('../audio/awman.wav')
window.addEventListener('keydown', (event) => {
    if (event.key === 's' && document.getElementById("n").style.marginTop == "0px" || event.key === 'S' && document.getElementById("n").style.marginTop == "0px" || event.code === 'Space' && document.getElementById("n").style.marginTop == "0px" || event.keyCode == "40" && document.getElementById("n").style.marginTop == "0px") {
        document.getElementById("n").style.marginLeft = parseFloat(document.getElementById("p").style.marginLeft.replace(/px/, "")) - 12.5 + "px"
        document.getElementById("n").style.marginTop = "-100px"
        function animate() {
            if (parseInt(document.getElementById("n").style.marginLeft.replace(/px/, "")) - 1 < parseInt(document.getElementById("e").style.marginLeft.replace(/px/, "")) + parseInt(document.getElementById("e").style.width.replace(/px/, "")) && parseInt(document.getElementById("n").style.marginLeft.replace(/px/, "")) + parseInt(document.getElementById("n").style.width.replace(/px/, "")) > parseInt(document.getElementById("e").style.marginLeft.replace(/px/, "")) - 1) {
                if (parseInt(document.getElementById("n").style.marginTop.replace(/px/, "")) - 1 < parseInt(document.getElementById("e").style.marginTop.replace(/px/, "")) + parseInt(document.getElementById("e").style.height.replace(/px/, "")) && parseInt(document.getElementById("n").style.marginTop.replace(/px/, "")) + 60 > parseInt(document.getElementById("e").style.marginTop.replace(/px/, "")) - 1) {
                    document.getElementById("t2").innerHTML = 'y'
                    document.getElementById("n").style.display = "none"
                    document.getElementById("e").src = "../img/boom.png"
                    document.getElementById("e").style.width = "160px"
                    document.getElementById("e").style.heigth = "120px"
                    audio.play()
                    audio = ""
                } else {
                    document.getElementById("t2").innerHTML = 'n'
                }
            } else {
                document.getElementById("t2").innerHTML = 'n'
            }
            if (document.getElementById("t2").innerHTML == 'n') {
                document.getElementById("n").style.display = "inline"
                if (document.getElementById("t3").innerHTML == "1") {
                    document.getElementById("n").style.marginTop = parseFloat(document.getElementById("n").style.marginTop.replace(/px/, "")) + 3 + "px"
                }
                if (document.getElementById("t3").innerHTML == "2") {
                    document.getElementById("n").style.marginTop = parseFloat(document.getElementById("n").style.marginTop.replace(/px/, "")) + 7.5 + "px"
                }
                if (document.getElementById("t3").innerHTML == "3") {
                    document.getElementById("n").style.marginTop = parseFloat(document.getElementById("n").style.marginTop.replace(/px/, "")) + 15 + "px"
                }
            }
            if (parseInt(document.getElementById("n").style.marginTop.replace(/px/, "")) < 551) {
                window.requestAnimationFrame(animate)
            }
            if (parseInt(document.getElementById("n").style.marginTop.replace(/px/, "")) > 550 && document.getElementById("t2").innerHTML == 'n') {
                document.getElementById("n").style.marginTop = "0px"
                document.getElementById("n").style.display = "none"
            }
            
        }
        animate()
    }
})