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
    if (coll(document.getElementById("1"), document.getElementById("2")) == true) {
        document.getElementById("p").innerHTML = "true"
        document.getElementById("2").style.marginLeft = "100px"
    }
//    if (coll(document.getElementById("3"), document.getElementById("2")) == false) {
//        var a = "dumb"
//    }
    window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate)
