var x = 10
var y = 10
var culx = 0
var culy = 0
var cx = document.getElementById("a").style.marginLeft
var cy = document.getElementById("a").style.marginTop
const screenHeight = window.screen.height - 350
const screenWidth = window.screen.width - 250
//function getRandomInt(max) {
//  return Math.floor(Math.random() * max);
//}
//culx = getRandomInt(screenWidth)
//culy = getRandomInt(screenHeight)
//cx = (parseInt(document.getElementById("a").style.marginLeft.replace(/px/,""))+culx)+"px"
//cy = (parseInt(document.getElementById("a").style.marginTop.replace(/px/,""))+culy)+"px"
//document.getElementById("a").style.marginLeft = cx
//document.getElementById("a").style.marginTop = cy
function animate() {
  //document.getElementById("2r").innerHTML = cy.replace(/px/,"") + "         " + screenHeight
  if (cx.replace(/px/,"") > screenWidth || cx.replace(/px/,"") < 0) {
    x *= -1
    //document.getElementById("2r").innerHTML = "ee"
  }
  if (cy.replace(/px/,"") > screenHeight || cy.replace(/px/,"") < 0) {
    y *= -1
    //document.getElementById("2r").innerHTML = cy + "         " + screenHeight + "          " + "yeaaa"
  }
  cx = (parseInt(document.getElementById("a").style.marginLeft.replace(/px/,""))+x)+"px"
  cy = (parseInt(document.getElementById("a").style.marginTop.replace(/px/,""))+y)+"px"
  document.getElementById("a").style.marginLeft = cx
  document.getElementById("a").style.marginTop = cy
  window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate);