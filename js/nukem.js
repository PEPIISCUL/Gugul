window.addEventListener('keydown', (event) => {
    if (document.getElementById("t2").innerHTML == 'n') {
        if (event.key === 'd' && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 880) || event.key === 'D' && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 880) ||
        event.keyCode == "39" && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 880)) {
            const cul = parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) + 10
            document.getElementById("p").style.marginLeft = cul + "px"
        }
        if (event.key === 'a' && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 300) ||event.key === 'A' && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 300) ||
        event.keyCode == "37" && (parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) != 300)) {
            const cul = parseInt(document.getElementById("p").style.marginLeft.replace(/px/, "")) - 10
            document.getElementById("p").style.marginLeft = cul + "px"
        }
    }
    if (event.key === 'r' || event.key === 'R') {
        location.reload()
    }
})