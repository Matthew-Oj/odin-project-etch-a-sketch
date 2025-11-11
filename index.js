// global vars
const container = document.querySelector(".container");

function makeGrid(size = 16) {
    // loop row div horizontally stack
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    
    // each row div has a column div (flexbox css)
    for (let j = 0; j < size; j++) {
        const col = document.createElement("div");
        col.className = "col";
        row.appendChild(col);
        }
    }
}

function numberOfSquares() {
    // prompt 
    let num = prompt("Enter number of squares");

    // convert 
    num = parseInt(num); 

    // max 64
    if (num > 64) {
        num = 64;
    }

    // clear dom
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // call make grid func
    makeGrid(num);
}



// init
makeGrid();
