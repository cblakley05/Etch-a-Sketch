
const container = document.querySelector('.container');
const clear = document.querySelector('.clear')

// reset button
clear.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("hovered");
    }
})

// generating squares
function createSquare(sideLength) {
    let newSquare = document.createElement('div');
    let size = `${100 / sideLength}%`
    newSquare.style.width = size;
    newSquare.style.height = size;
    newSquare.style.margin = "0";
    newSquare.classList.add('square');
    return newSquare
}

// generating grid of squares
function renderGrid(sideLength) {
    // clear old squares from container
    while (container.firstChild) {
        console.log("looping")
        container.removeChild(container.lastChild)
    };

    // generate new squares and add to container
    let numSquares = sideLength * sideLength;
    for (let i = 0; i < numSquares; i++) {
        let square = createSquare(sideLength);
        container.appendChild(square);
    }

    // set squares to listen for hover and add .hovered
    const squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function () {
            squares[i].classList.add("hovered");
        })
    }
}

renderGrid(10)