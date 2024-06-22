var x = 0
var y = x
var px = x
var culx = 0
var culy = 0
var cx = document.getElementById("a").style.marginLeft
var cy = document.getElementById("a").style.marginTop
document.getElementById("a").style.marginLeft = "0px"
document.getElementById("a").style.marginTop = "30px"
cx = document.getElementById("a").style.marginLeft
cy = document.getElementById("a").style.marginTop
const screenHeight = window.screen.height - 200
const screenWidth = window.screen.width - 150
//function getRandomInt(max) {
//  return Math.floor(Math.random() * max);
//}
//culx = getRandomInt(screenWidth)
//culy = getRandomInt(screenHeight)
//cx = (parseInt(document.getElementById("a").style.marginLeft.replace(/px/,""))+culx)+"px"
//cy = (parseInt(document.getElementById("a").style.marginTop.replace(/px/,""))+culy)+"px"
//document.getElementById("a").style.marginLeft = cx
//document.getElementById("a").style.marginTop = cy
document.getElementById("idd").value = 0
function animate() {
  const newimg = document.createElement('img')
  document.getElementById("t").innerHTML = parseInt(document.getElementById("t").innerHTML) + 1
  if (px != parseInt(document.getElementById("idd").value)) {
    if (x < 0) {
      x = parseInt(document.getElementById("idd").value) * -1
    }
    if (x > -1) {
      x = parseInt(document.getElementById("idd").value)
    }
    if (y < 0) {
      y = parseInt(document.getElementById("idd").value) * -1
    }
    if (y > -1) {
      y = parseInt(document.getElementById("idd").value)
    }
    px = x
  }
  //document.getElementById("iiii").innerHTML = x + '  ' + y
  newimg.src = document.getElementById('a').src
  newimg.id = "ooo"
  newimg.style = "position: absolute"
  newimg.style.marginLeft = document.getElementById("a").style.marginLeft
  newimg.style.marginTop = document.getElementById("a").style.marginTop
  if (document.getElementById("t2").innerHTML == "1") {
    document.getElementById('z').appendChild(newimg)
  }
  //document.getElementById("2r").innerHTML = cy.replace(/px/,"") + "         " + screenHeight
  if (cx.replace(/px/,"") > screenWidth || cx.replace(/px/,"") < 0) {
    x *= -1
    //document.getElementById("2r").innerHTML = "ee"
  }
  if (cy.replace(/px/,"") > screenHeight || cy.replace(/px/,"") < 30) {
    y *= -1
    //document.getElementById("2r").innerHTML = cy + "         " + screenHeight + "          " + "yeaaa"
  }
  cx = (parseInt(document.getElementById("a").style.marginLeft.replace(/px/,""))+x)+"px"
  cy = (parseInt(document.getElementById("a").style.marginTop.replace(/px/,""))+y)+"px"
  document.getElementById("a").style.marginLeft = cx
  document.getElementById("a").style.marginTop = cy
  if (document.getElementById("t3").innerHTML == "1") {
    document.getElementById("a").style.marginLeft = document.getElementById("x").value + "px"
    document.getElementById("a").style.marginTop = document.getElementById("y").value + "px"

  }
  window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate);