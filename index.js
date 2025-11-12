const container = document.querySelector(".container");
var defaultSize = 16;
let currentSize = defaultSize;

function makeGrid(size = 16) {
    container.innerHTML = "";
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const col = document.createElement("div");
        col.className = "col";
        col.style.width = `${squareSize}px`;
        col.style.height = `${squareSize}px`;
        col.style.border = "1px solid #eee";
        col.style.boxSizing = "border-box";
        col.style.backgroundColor = "white";
        container.appendChild(col);
    }
}

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createNewGrid() {
    clearContainer();
    makeGrid(currentSize);
    draw();
}

function promptSize() {
    let newSize = prompt("Enter grid size (1-100):");
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        makeGrid(newSize);
        currentSize = newSize;
    } else {
        alert('Please enter a number between 1 and 100.');
    }
    createNewGrid(newSize);

}

function clearGrid() {
    createNewGrid();
}

function draw() {
    // if 



    const columns = document.querySelectorAll(".col");
        columns.forEach(col => {
            col.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
        });
}


// init
makeGrid();
draw();