var c = 0
var c3 = 0
var c4 = 0
function RemoveDOMelement(){
    c += 1
    document.getElementById("nice").innerHTML = c
}          
function RemoveDOMelement2(){
    c -= 1
    document.getElementById("nice").innerHTML = c
}
function RemoveDOMelement23(){
    c3 += 1
    document.getElementById("nice3").innerHTML = c3
}             
function RemoveDOMelement3(){
    c3 -= 1
    document.getElementById("nice3").innerHTML = c3
}

function RemoveDOMelement4(){
    c4 += 1
    if (c4 == 0) {
        document.getElementById("eee").src="../img/1.png";
    }
    if (c4 == 1) {
        document.getElementById("eee").src="../img/2.png";
    }
    if (c4 == 2) {
        document.getElementById("eee").src="../img/3.png";
    }
    if (c4 == 3) {
        document.getElementById("eee").src="../img/4.png";
    }
    if (c4 == 4) {
        document.getElementById("eee").src="../img/5.png";
    }
    if (c4 > 4) {
        c4 = 4
    }
    if (c4 < 0) {
        c4 = 0
    }
    //document.getElementById("nice").innerHTML = c
}          
function RemoveDOMelement24(){
    c4 -= 1
    if (c4 == 0) {
        document.getElementById("eee").src="../img/1.png";
    }
    if (c4 == 1) {
        document.getElementById("eee").src="../img/2.png";
    }
    if (c4 == 2) {
        document.getElementById("eee").src="../img/3.png";
    }
    if (c4 == 3) {
        document.getElementById("eee").src="../img/4.png";
    }
    if (c4 == 4) {
        document.getElementById("eee").src="../img/5.png";
    }
    if (c4 > 4) {
        c4 = 4
    }
    if (c4 < 0) {
        c4 = 0
    }
    //document.getElementById("nice").innerHTML = c
}

function plus(){
    var input = document.getElementById("e").value
    document.getElementById("o").innerHTML = c + c3 + Number(input);
    //document.write(document.getElementById("e").value);
}