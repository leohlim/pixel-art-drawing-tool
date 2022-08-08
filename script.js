let color = "#e66465";
let gridSize = document.querySelector('.grid-size');
const colorPicker = document.getElementById("colorPicker");
colorPicker.oninput = (e) => changeColor(e.target.value);



function createGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener ("mouseover", colorSquare);
        square.classList.add("square");
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", square);
    }
}


createGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createGrid(input);
        gridSize.textContent ="Grid Size: " + `${input}x${input}`;
    }
    else {
        console.log("Error: please enter a value between 2 and 100.");
    }
}

function colorSquare() {
    if((color == 'random')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
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