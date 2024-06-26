var input = document.getElementById("e")
var a = ["PepiMazon", "Car", "Cul", "PepiNote", "Nanobot", "BounceDupe", "CollisionTest", "Nuke The Witch"]
//a.push("aaa")
var aa = []
var a2 = "a23"
var a3 = ""
var p = 0
var c = 0
var am = 0
var pe = 0
var n = 0
var bu = 0
var cl = 0
var wt = 0
//aa.sort()
console.log(a)
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.getElementById("e").value != "") {
      document.getElementById("serc").innerHTML = parseInt(document.getElementById("serc").innerHTML) + 1
      document.getElementById("1i").style.display = "block"
      document.getElementById("2i").style.display = "block"
      document.getElementById("3i").style.display = "block"
      document.getElementById("1").href = ""
      document.getElementById("2").href = ""
      document.getElementById("3").href = ""
      const elm = document.createElement("a")
      elm.id = "4"
      elm.style = "font-size: 25px;"
      const elm2 = document.createElement("br")
      elm2.id = "br1"
      const elm3 = document.createElement("img")
      elm3.id = "4i"
      const elm4 = document.createElement("br")
      elm4.id = "br2"
      document.getElementById('cdi').appendChild(elm)
      document.getElementById('cdi').appendChild(elm2)
      document.getElementById('cdi').appendChild(elm3)
      document.getElementById('cdi').appendChild(elm4)
      const elma = document.createElement("a")
      elma.id = "5"
      elma.style = "font-size: 25px;"
      const elma2 = document.createElement("br")
      elma2.id = "br3"
      const elma3 = document.createElement("img")
      elma3.id = "5i"
      const elma4 = document.createElement("br")
      elma4.id = "br4"
      document.getElementById('cdi').appendChild(elma)
      document.getElementById('cdi').appendChild(elma2)
      document.getElementById('cdi').appendChild(elma3)
      document.getElementById('cdi').appendChild(elma4)
      aa = []
      p = 0
      c = 0
      am = 0
      pe = 0
      n = 0
      bu = 0
      cl = 0
      wt = 0
      if (document.getElementById("e").value == a[0][0]) {
        document.getElementById("1").innerHTML = a[0]
      }
      for (let i = 0; i < a.length; i++) {
        a3 += i
        for (let j = 0; j < a[i].length; j++) {
          //aa.push(a[i][j])
          //console.log(j)
          if (document.getElementById("e").value[j] == a[i][j].toLowerCase() || document.getElementById("e").value[j] == a[i][j].toUpperCase()) {
            if (i == 0) {
                p += 1
            }
            if (i == 1) {
                c += 1
            }
            if (i == 2) {
                am += 1
            }
            if (i == 3) {
                pe += 1
            }
            if (i == 4) {
                n += 1
            }
            if (i == 5) {
                bu += 1
            }
            if (i == 6) {
                cl += 1
            }
            if (i == 7) {
                wt += 1
            }
          }
        }
      }
      //document.getElementById("1").innerHTML = a3
      aa.push(p + "p", c + "c", am + "a", pe + "e", n + "n", bu + "b", cl + "cl", wt + "w")
      aa.sort()
      aa.reverse()
      //console.log(aa)
      for (let i = 0; i < aa.length; i++) {
        if (aa[i][1] == "a"){
          document.getElementById(i + 1).innerHTML = a[2].bold()
          document.getElementById(i + 1).href = "html/cul.html"
          document.getElementById(i + 1 + "i").src = "img/3s.png"
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "p"){
          document.getElementById(i + 1).innerHTML = a[0].bold()
          document.getElementById(i + 1).href = "PEPIMAZON/PepiMazon.html"
          document.getElementById(i + 1 + "i").src = "img/2s.png"
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "c"){
          document.getElementById(i + 1).innerHTML = a[1].bold()
          document.getElementById(i + 1).href = "html/car.html"
          document.getElementById(i + 1 + "i").src = "img/1s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "e"){
          document.getElementById(i + 1).innerHTML = a[3].bold()
          document.getElementById(i + 1).href = "html/PepiNote.html"
          document.getElementById(i + 1 + "i").src = "img/4s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "n"){
          document.getElementById(i + 1).innerHTML = a[4].bold()
          document.getElementById(i + 1).href = "html/nanobot.html"
          document.getElementById(i + 1 + "i").src = "img/5s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "b"){
          document.getElementById(i + 1).innerHTML = a[5].bold()
          document.getElementById(i + 1).href = "html/BounceDupe.html"
          document.getElementById(i + 1 + "i").src = "img/6s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "c" && aa[i][2] == "l"){
          document.getElementById(i + 1).innerHTML = a[6].bold()
          document.getElementById(i + 1).href = "html/TEST.html"
          document.getElementById(i + 1 + "i").src = "img/7s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        if (aa[i][1] == "w"){
          document.getElementById(i + 1).innerHTML = a[7].bold()
          document.getElementById(i + 1).href = "html/NukeTheWitch.html"
          document.getElementById(i + 1 + "i").src = "img/8s.png"
          //console.log(i + 1 + "a")
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
        }
        }
      if (document.getElementById("e").value == "" || p == 0 && c == 0 && am == 0 && pe == 0 && cl == 0){
        if (document.getElementById("e").value != "" || p == 0 && c == 0 && am == 0 && pe == 0 && cl == 0){
          document.getElementById("none1").innerHTML = "No results".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
          document.getElementById("1").innerHTML = ""
          document.getElementById("2").innerHTML = ""
          document.getElementById("3").innerHTML = ""
        }
        if (document.getElementById("e").value == ""){
          document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
          document.getElementById("none1").style = "font-size: 75px;text-align: center;font-family:'Courier New', Courier, monospace;"
          document.getElementById("1").innerHTML = ""
          document.getElementById("2").innerHTML = ""
          document.getElementById("3").innerHTML = ""
        }

        document.getElementById("1i").style.display = "none"
        document.getElementById("2i").style.display = "none"
        document.getElementById("3i").style.display = "none"
      }
    }
  }
);
function exi() {
  const bbb = parseInt(document.getElementById("serc").innerHTML)
  document.getElementById("serc").innerHTML = "0"
  document.getElementById("none1").innerHTML = "SEARCH!!!".bold()
  document.getElementById("1").innerHTML = ""
  document.getElementById("2").innerHTML = ""
  document.getElementById("3").innerHTML = ""
  document.getElementById("1i").style.display = "none"
  document.getElementById("2i").style.display = "none"
  document.getElementById("3i").style.display = "none"
  document.getElementById("e").value = ""
  for (let i = 0; i < bbb + 1; i++) {
    document.getElementById("4").remove()
    document.getElementById("4i").remove()
    document.getElementById("5").remove()
    document.getElementById("5i").remove()
    document.getElementById("br1").remove()
    document.getElementById("br2").remove()
    document.getElementById("br3").remove()
    document.getElementById("br4").remove()
  }
}