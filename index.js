const container = document.querySelector(".container");

const defaultSize = 16;
const defaultColor = "black";

let currentSize = defaultSize;
let color = defaultColor; 
let rainbowMode = false; 

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

function promptSize() {
    let newSize = prompt("Enter grid size (1-100):");
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        currentSize = newSize;
    } else {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createNewGrid();
}

function createNewGrid() {
    color = defaultColor;
    rainbowMode = false;
    makeGrid(currentSize);
}

function setRainbowMode() {
    rainbowMode = true;
}

function setDarkMode() {
    rainbowMode = false;
    color = "grey";
}

function clearGrid() {
    color = defaultColor;
    rainbowMode = false;
    createNewGrid();
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener("mouseenter", function(e) {
    if (e.target && e.target.classList.contains("col")) {
        if (rainbowMode) {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            e.target.style.backgroundColor = color;
        }
    }
}, true); 


createNewGrid();