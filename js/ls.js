function save(){
    document.getElementById("p").innerHTML = document.getElementById("e").value;
    localStorage.setItem("mjau",document.getElementById("e").value);
}