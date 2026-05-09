selection = document.querySelector("#container");
for(let i = 0;i<256;i++){
    carrer = document.createElement("div")
    carrer.classList.add("cell")
    selection.appendChild(carrer)
}
