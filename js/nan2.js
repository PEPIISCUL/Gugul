var h = window.screen.availHeight - 350
var w = window.screen.availWidth - 200
var audio = new Audio('../audio/mmms.mp3')
var audio2 = new Audio('../audio/mmms.mp3')

var num = 0
var numero = 0
function start(){
    if (localStorage.getItem("num") != 0){

        for (let i = 0; i < localStorage.getItem("num"); i++) {
            num += 1
            numero = Math.floor(Math.random()*4)
            const newimg = document.createElement('img')
            //document.getElementById("2r").innerHTML = w + ' ' + h
            if (num != 1000) {
                if (numero == 0) {
                    newimg.src = "../img/anim.gif"
                }
                if (numero == 1) {
                    newimg.src = "../img/anim2.gif"
                }
                if (numero == 2) {
                    newimg.src = "../img/nanobotog.png"
                }
                if (numero == 3) {
                    newimg.src = "../img/anim3.gif"
                }
            }
            if (num == 1000) {
                document.getElementById("a").style = "margin-top: 0px;margin-left: 0px;position: absolute;display:flex"
            }
            newimg.style = "position: absolute"
            newimg.style.marginLeft = Math.floor(Math.random()*w) + 'px'
            newimg.style.marginTop = Math.floor(Math.random()*h) + 'px'
            document.getElementById('z').appendChild(newimg)
            document.getElementById('nm').innerHTML = num
        }
    }
}


function cul() {
    audio.cloneNode(true).play();
    //num = Math.floor(Math.random() * 10);
    num += 1

    numero = Math.floor(Math.random()*4)
    const newimg = document.createElement('img')
    //document.getElementById("2r").innerHTML = w + ' ' + h
    if (num != 1000) {
        if (numero == 0) {
            newimg.src = "../img/anim.gif"
        }
        if (numero == 1) {
            newimg.src = "../img/anim2.gif"
        }
        if (numero == 2) {
            newimg.src = "../img/nanobotog.png"
        }
        if (numero == 3) {
            newimg.src = "../img/anim3.gif"
        }
    }
    if (num == 1000) {
        document.getElementById("a").style = "margin-top: 0px;margin-left: 0px;position: absolute;display:flex"
    }
    newimg.style = "position: absolute"
    newimg.style.marginLeft = Math.floor(Math.random()*w) + 'px'
    newimg.style.marginTop = Math.floor(Math.random()*h) + 'px'
    document.getElementById('z').appendChild(newimg)
    document.getElementById('nm').innerHTML = num
    localStorage.setItem("num",num);
    if (num==1){
        location.reload()
        localStorage.setItem("num2",1);
    }
}

function fun() {
    //document.getElementById('but').remove()
    localStorage.setItem("num",0);
    location.reload()
}

