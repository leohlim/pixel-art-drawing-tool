
let gridSize = document.querySelector('.grid-size');
const colorPicker = document.getElementById("colorPicker");
colorPicker.oninput = (e) => changeColor(e.target.value);
const DEFAULT_COLOR = colorPicker.value;
let color = DEFAULT_COLOR;
console.log(colorPicker.value);

let draw = false;
window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);



// Creates the canvas with a given size. 
function createGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;

    // Creates the individual cells
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener ("mouseover", colorSquare);
        square.addEventListener ("mousedown", colorSquare);
        square.classList.add("square");
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", square);
    }
}


createGrid(16);

// Change the size of the canvas grid.
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createGrid(input);
        gridSize.textContent ="Grid Size: " + `${input}x${input}`;
    }
    else {
        console.log("Error: please enter a value between 2 and 100.");
    }
}

// When user is hovering over and clicking down, change the mode/color.
function colorSquare(e) {
    if(e.type === 'mouseover' && !draw) return;
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
    console.log(color);
}

function changeColor(choice) {
    color = choice;
}


function clearCanvas() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

function toggleGridlines()
{
    const cells = document.querySelectorAll('.square');
    console.log(cells);


    cells.forEach(cell => {
        if(cell.style.borderStyle !== "solid") {
            cell.style.borderStyle = "solid";
        } else {
            cell.style.borderStyle = "none";
        }
    })
    

}