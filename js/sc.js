var input = document.getElementById("e")
var a = ["pepi", "car", "amogus"]
var a2 = "a23"
var a3 = ""

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (document.getElementById("e").value == a[0][0]) {
        document.getElementById("1").innerHTML = a[0]
      }
      for (let i = 0; i < a.length; i++) {
        a3 += i
      }
      document.getElementById("1").innerHTML = a3
    }
});