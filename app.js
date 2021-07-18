
const container = document.querySelector('.container');
const gridSelect = document.querySelector('.grid-size');
const blackBTN = document.querySelector('.color-black');
const rgbBTN = document.querySelector('.color-rgb');
const invertedBTN = document.querySelector('.color-inverted');
const clear = document.querySelector('.clear');

// grid size select
gridSelect.addEventListener('change', () => {
    renderGrid(gridSelect.value);
});

// grid color object
const gridColors = {
    background: '#FFF',
    color: '#222',
    isRGB: false,
    randColor() {
        function randValue() {
            return Math.floor(Math.random() * 256)
        }
        return `rgb(${randValue()}, ${randValue()}, ${randValue()})`
    }
};

// selecting square color
blackBTN.addEventListener('click', () => {
    gridColors.startColor = '#FFF';
    gridColors.color = '#222';
    gridColors.isRGB = false;
    renderGrid(gridSelect.value);
});

rgbBTN.addEventListener('click', () => {
    gridColors.startColor = '#FFF';
    gridColors.isRGB = true;
    renderGrid(gridSelect.value)
})

invertedBTN.addEventListener('click', () => {
    gridColors.startColor = '#222';
    gridColors.color = '#FFF';
    gridColors.isRGB = false;
    renderGrid(gridSelect.value);
})

// reset button
clear.addEventListener('click', () => {
    renderGrid(gridSelect.value);
})

// generating squares
function createSquare(sideLength) {
    let newSquare = document.createElement('div');
    let size = `${100 / sideLength}%`
    newSquare.style.width = size;
    newSquare.style.height = size;
    newSquare.style.margin = "0";
    newSquare.style.backgroundColor = gridColors.startColor;
    newSquare.classList.add('square');
    return newSquare
}

// generating grid of squares
function renderGrid(sideLength) {
    // clear old squares from container
    while (container.firstChild) {
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
            if (gridColors.isRGB) {
                squares[i].style.backgroundColor = gridColors.randColor();
                console.log(squares[i].style.backgroundColor)
            } else {
                squares[i].style.backgroundColor = gridColors.color;
            }
        });
    }
}

renderGrid(10)