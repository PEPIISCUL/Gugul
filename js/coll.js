function but() {
    document.getElementById("x").value = 100
    document.getElementById("x2").value = 0
    document.getElementById("y").value = 50
    document.getElementById("y2").value = 0
}
document.getElementById("x").value = 100
document.getElementById("x2").value = 0
document.getElementById("y").value = 50
document.getElementById("y2").value = 0
function animate() {
    document.getElementById("1").style.marginLeft = document.getElementById("x").value + "px"
    document.getElementById("2").style.marginLeft = document.getElementById("x2").value + "px"
    document.getElementById("1").style.marginTop = document.getElementById("y").value + "px"
    document.getElementById("2").style.marginTop = document.getElementById("y2").value + "px"
    if (parseInt(document.getElementById("2").style.marginLeft.replace(/px/, "")) - 1 < parseInt(document.getElementById("1").style.marginLeft.replace(/px/, "")) + parseInt(document.getElementById("1").style.width.replace(/px/, "")) && parseInt(document.getElementById("2").style.marginLeft.replace(/px/, "")) + parseInt(document.getElementById("2").style.width.replace(/px/, "")) > parseInt(document.getElementById("1").style.marginLeft.replace(/px/, "")) - 1) {
        if (parseInt(document.getElementById("2").style.marginTop.replace(/px/, "")) - 1 < parseInt(document.getElementById("1").style.marginTop.replace(/px/, "")) + parseInt(document.getElementById("1").style.height.replace(/px/, "")) && parseInt(document.getElementById("2").style.marginTop.replace(/px/, "")) + parseInt(document.getElementById("2").style.height.replace(/px/, "")) > parseInt(document.getElementById("1").style.marginTop.replace(/px/, "")) - 1) {
            document.getElementById("a").innerHTML = 'collision = yes'
        } else {
            document.getElementById("a").innerHTML = 'collision = no'
        }
    } else {
        document.getElementById("a").innerHTML = 'collision = no'
    }
    window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate)