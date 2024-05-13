var input = document.getElementById("e")
var a = ["PepiMazon", "Car", "Cul"]
//a.push("aaa")
var aa = []
var a2 = "a23"
var a3 = ""
var p = 0
var c = 0
var am = 0
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
      if (document.getElementById("e").value == a[0][0]) {
        document.getElementById("1").innerHTML = a[0]
      }
      for (let i = 0; i < a.length; i++) {
        a3 += i
        for (let j = 0; j < a[i].length; j++) {
          //aa.push(a[i][j])
          if (document.getElementById("e").value[j] == a[i][j]) {
            //console.log("uuuiii")
            if (i == 0) {
                p += 1
            }
            if (i == 1) {
                c += 1
            }
            if (i == 2) {
                am += 1
            }
          }
        }
      }
      //document.getElementById("1").innerHTML = a3
      aa.push(p + "p", c + "c", am + "a")
      aa.sort()
      aa.reverse()
      //console.log(aa)
      for (let i = 0; i < aa.length; i++) {
        if (aa[i][1] == "a"){
          document.getElementById(i + 1).innerHTML = a[2].bold()
          document.getElementById(i + 1).href = "html/cul.html"
          document.getElementById(i + 1 + "i").src = "img/3s.png"
        }
        if (aa[i][1] == "p"){
          document.getElementById(i + 1).innerHTML = a[0].bold()
          document.getElementById(i + 1).href = "PEPIMAZON/PepiMazon.html"
          document.getElementById(i + 1 + "i").src = "img/2s.png"
        }
        if (aa[i][1] == "c"){
          document.getElementById(i + 1).innerHTML = a[1].bold()
          document.getElementById(i + 1).href = "html/car.html"
          document.getElementById(i + 1 + "i").src = "img/1s.png"
          //console.log(i + 1 + "a")
        }
        }
      if (document.getElementById("e").value == ""){
        document.getElementById("1").innerHTML = ""
        document.getElementById("2").innerHTML = ""
        document.getElementById("3").innerHTML = ""

        document.getElementById("1i").style.display = "none"
        document.getElementById("2i").style.display = "none"
        document.getElementById("3i").style.display = "none"
      }
      }
    }
);