var x = 10
var y = 10
var culx = 0
var culy = 0
var cx = document.getElementById("a").style.marginLeft
var cy = document.getElementById("a").style.marginTop
const screenHeight = window.screen.height - 200
const screenWidth = window.screen.width - 150
var count = 0
var audio2 = new Audio('../audio/mmms.mp3')
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
  if (localStorage.getItem("num") == null){
      localStorage.setItem("num",0);
  }
  if (localStorage.getItem("mum") == null){
      localStorage.setItem("mum",75);
  }
  if (localStorage.getItem("numgold") == null){
      localStorage.setItem("numgold",0);
  }
  if (localStorage.getItem("trashcan") == null){
      localStorage.setItem("trashcan", "0")
  }
  if (localStorage.getItem("moneybuy") == null){
      localStorage.setItem("moneybuy", "0")
  }
  if (localStorage.getItem("almanac") == null){
      localStorage.setItem("almanac", "0")
  }
  count = count + 1
  if (count == 15){
    if (localStorage.getItem("num2") == 1){
      audio2.cloneNode(true).play();
      localStorage.setItem("num2",0);
    }
    for (let i = 0; i < parseInt(document.getElementById("nm2").innerHTML); i++){
      imherer = Math.floor(Math.random()*500)
      if (imherer == 0){
          audio2.cloneNode(true).play();
      }
      count = 0
    }
    
  }
  
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