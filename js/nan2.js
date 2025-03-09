var h = window.screen.availHeight - 350
var w = window.screen.availWidth - 200
var audio = new Audio('../audio/mmms.mp3')
var audio2 = new Audio('../audio/mmms.mp3')

var num = 0
var numero = 0
var money = 75
var jum = 0
var numerogold = 0
var numgold = 0










function start(){
    if (localStorage.getItem("mum") != null){
        money = parseInt(localStorage.getItem("mum"))
    }
    
    document.getElementById('momy').innerHTML = "Money: " + money.toString() + "$"
    if (localStorage.getItem("num") != 0){

        for (let i = 0; i < localStorage.getItem("num")-localStorage.getItem("numgold"); i++) {
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
            document.getElementById('nm').innerHTML = "Nanobots ordered: " + num
            document.getElementById('nm2').innerHTML = num
        }
        for (let i = 0; i < localStorage.getItem("numgold"); i++) {
            num += 1
            const newimg = document.createElement('img')
            newimg.src = "../img/nanobotoggold.png"
            newimg.setAttribute("onclick", "gold()")
            numgold+=1
            newimg.style = "position: absolute"
            newimg.style.marginLeft = Math.floor(Math.random()*w) + 'px'
            newimg.style.marginTop = Math.floor(Math.random()*h) + 'px'
            document.getElementById('z').appendChild(newimg)
            document.getElementById('nm').innerHTML = "Nanobots ordered: " + num
            document.getElementById('nm2').innerHTML = num
        }
    }
}

function gold() {
    money = parseInt(money) + 1
    document.getElementById('momy').innerHTML = "Money: " + money.toString() + "$"
    localStorage.setItem("mum",money);
}


function cul() {
    if (money-25 > -1){
        money = money - 25
        localStorage.setItem("mum",money);
        audio.cloneNode(true).play();
        //num = Math.floor(Math.random() * 10);
        num += 1

        numero = Math.floor(Math.random()*4)
        numerogold = Math.floor(Math.random()*1000)
        
        const newimg = document.createElement('img')
        
        //document.getElementById("2r").innerHTML = w + ' ' + h
        if (num != 1000) {
            
            if (numerogold == 0){
                newimg.src = "../img/nanobotoggold.png"
                newimg.setAttribute("onclick", "gold()")
                numgold+=1
            }
            
            if (numerogold != 0){
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
            
            
        }
        
        if (num == 1000) {
            document.getElementById("a").style = "margin-top: 0px;margin-left: 0px;position: absolute;display:flex"
        }
        newimg.style = "position: absolute"
        newimg.style.marginLeft = Math.floor(Math.random()*w) + 'px'
        newimg.style.marginTop = Math.floor(Math.random()*h) + 'px'
        document.getElementById('z').appendChild(newimg)
        document.getElementById('nm').innerHTML = "Nanobots ordered: " + num.toString()
        document.getElementById('nm2').innerHTML = num
        document.getElementById('momy').innerHTML = "Money: " + money.toString() + "$"
        localStorage.setItem("num",num);
        localStorage.setItem("numgold", numgold);
        if (num==1){
            localStorage.setItem("mum",money);
            location.reload()
            localStorage.setItem("num2",1);
        }
    }
}

function fun() {
    //document.getElementById('but').remove()
    localStorage.setItem("num",0);
    localStorage.setItem("mum",75);
    localStorage.setItem("numgold",0);
    localStorage.setItem("trashcan", "0")
    localStorage.setItem("moneybuy", "0")
    localStorage.setItem("almanac", "0")
    location.reload()
}

