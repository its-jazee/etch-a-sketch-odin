let container = document.querySelector("#container");
let newPadBtn = document.querySelector("#new-pad");

newPadBtn.addEventListener("click",(e) => {
    e.preventDefault();
    let y = prompt("Canvas size : ");
    if ((y <= 100)){
        x = Number(y);
        container.replaceChildren();        // clear out the current grid
        generateGrid(x);
    } else {
        while(!(y <= 100)){
            y = prompt("Canvas size must be a number and cannot be more than 100! Enter new canvas size :");
        }
        x = Number(y);
        container.replaceChildren();        // clear out the current grid
        generateGrid(x);
    }
})

function generateGrid(x){
    for(let i = 0; i < x; i++){
        let row = document.createElement("div");
        row.classList.add("grid-row");
        container.appendChild(row);
        for (let j = 0; j < x; j++){
            let grids = document.createElement("div");
            grids.classList.add("grid");
            row.appendChild(grids);

            grids.addEventListener("mouseover", (event) => {
                grids.style.backgroundColor = "grey";
            })
        }
    }    
}

generateGrid(16);