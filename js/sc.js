var input = document.getElementById("e")
var a = ["PepiMazon", "Car", "Cul", "PepiNote"]
//a.push("aaa")
var aa = []
var a2 = "a23"
var a3 = ""
var p = 0
var c = 0
var am = 0
var pe = 0
//aa.sort()
//console.log(aa)
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.getElementById("1i").style.display = "block"
      document.getElementById("2i").style.display = "block"
      document.getElementById("3i").style.display = "block"
      document.getElementById("1").href = ""
      document.getElementById("2").href = ""
      document.getElementById("3").href = ""
      aa = []
      p = 0
      c = 0
      am = 0
      pe = 0
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
          }
        }
      }
      //document.getElementById("1").innerHTML = a3
      aa.push(p + "p", c + "c", am + "a", pe + "e")
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
        }
      if (document.getElementById("e").value == "" || p == 0 && c == 0 && am == 0){
        if (document.getElementById("e").value != "" || p == 0 && c == 0 && am == 0){
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