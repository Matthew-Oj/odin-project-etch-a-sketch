const container = document.querySelector(".container");

const defaultSize = 16;
const defaultColor = "black";

let currentSize = defaultSize;
let color = defaultColor; 
let rainbowMode = false; 
let darkMode = false; 

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
        col.dataset.darkness = "0"; 
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
    darkMode = false;
    makeGrid(currentSize);
}

function setRainbowMode() {
    rainbowMode = true;
    darkMode = false;
}

function setDarkMode() {
    rainbowMode = false;
    darkMode = true;
    color = "grey"; 
}

function clearGrid() {
    color = defaultColor;
    rainbowMode = false;
    darkMode = false;
    createNewGrid();
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenSquare(square) {
    let darkness = parseInt(square.dataset.darkness);
    if (darkness < 100) {
        darkness += 10; 
        square.dataset.darkness = darkness;
        const shade = 255 - Math.round((darkness / 100) * 255);
        square.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
    }
}


container.addEventListener("mouseenter", function(e) {
    if (e.target && e.target.classList.contains("col")) {
        if (rainbowMode) {
            e.target.style.backgroundColor = getRandomColor();
        } else if (darkMode) {
            darkenSquare(e.target);
        } else {
            e.target.style.backgroundColor = color;
        }
    }
}, true);

createNewGrid();