"use strict"
console.clear()

let btn = document.getElementById("btn")
let img = document.getElementById("image")

btn.addEventListener("click", changeBtn);

function changeBtn() {
    if (btn.textContent.includes("accendi")) {
        img.src = "img/yellow_lamp.png"
        btn.textContent = "spegni"
    }
    else {
        img.src = "img/white_lamp.png"
        btn.textContent = "accendi"
    }
}

