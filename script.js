const container = document.querySelector("#container");
//I can target a div individually with gridSquares but NOT squares
const squares = document.querySelector("#container").childNodes;
const gridSquares = document.getElementsByClassName("square");
const clearButton = document.querySelector("#clear");
const submit = document.getElementById("newSize");

let numberOfDivs;
let backgroundColorWell;
let backgroundDefault = "#dddddd";
let drawingColorWell;
let drawingDefault = "#333333"

init();

// ******* FUNCTION DEFINITIONS ******** //

// Runs on page load to initialize drawing pad and mouse event listeners
function init() {
    makeGrid();
    makeDivs();
    container.addEventListener("mouseover", changeToBlack);
    container.addEventListener("click", changeToWhite);
    clearButton.addEventListener("click", clearScreen);
    submit.addEventListener("click", () => {
        makeGrid();
    });
}

function updateFirst(event) {
    for (var i = 0; i < 100 * 100; i++) {
        gridSquares[i].style.backgroundcolor = event.target.value;
    }
}

// fills the empty container with a grid full of divs
function makeGrid() {
    getValue();
    //    getTotalDivs();
    clearScreen();
    // set CSS property for grid columns/rows
    container.style.gridTemplateColumns = "repeat(" + newSizeValue + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + newSizeValue + ", 1fr)";
}

function getValue() {
    newSize = document.querySelector("#boxSize").value;
    return newSizeValue = Number(newSize);
}

function makeDivs() {
    for (var i = 0; i < 100 * 100; i++) {
        newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.classList.remove("black");
        container.append(newSquare);
    }
}

// returns all black squares to gray
function clearScreen() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList = "square";
        //gridSquares[i].style.backgroundcolor = "#ddd";
    }
}

function changeToBlack(e) {
    e.target.classList.add("black");
}

function changeToWhite(e) {
    e.target.classList.remove("black");
}
