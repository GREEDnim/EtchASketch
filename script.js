


function addGrid(event) {
    sizetext = document.querySelector(".gsize");
    let board = document.querySelector('.board');
    max = this.value || 50;
    sizetext.innerText = `${max}`;
    // console.log(max);
    board.textContent = '';
    for (let row = 1; row <= max; row++) {
        rowBoard = document.createElement('div');
        rowBoard.classList.add("row");

        for (let col = 1; col <= max; col++) {

            box = document.createElement('div');
            box.classList.add("box");
            box.addEventListener('mouseover', addColor);
            rowBoard.appendChild(box);
        }
        board.appendChild(rowBoard);

    }
}

function getRandomColor() {
    const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    s = '#';
    for (let i = 0; i < 6; i++) {
        ind = Math.floor(Math.random() * 16);
        s = s + arrayOfColorFunctions[ind];
    }
    return s;
}
function changeColor(event) {
    random = false;
    color = this.value;
}

function addColor(event) {
    if (random) {

        color = getRandomColor();
    }

    // console.log(color + random);
    this.style.backgroundColor = color;
}
function removeColor() {
    boxElements = document.querySelectorAll(".box");
    boxElements.forEach((box) => { box.style.backgroundColor = "blanchedalmond"; })
}




let color = "#000000";
let max = 50;
random = false;
 boxList = document.querySelectorAll(".box");
gridSize = document.querySelector('#grid-size');
rand = document.querySelector("#random-color");
colorele = document.querySelector('#color-input');
clearColorele = document.querySelector("#clear-color");

addGrid();

gridSize.addEventListener('input', addGrid);
rand.addEventListener('click', () => { random = true; })
colorele.addEventListener('input', changeColor);
clearColorele.addEventListener('click', removeColor);