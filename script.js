let container = document.querySelector('.container');
let userInput;


// create button to enter number of squares
let button = document.createElement('button');
button.textContent = 'Click to enter grid size';
container.appendChild(button);

button.addEventListener('click', () => {
    userInput = parseInt(prompt('Please enter the grid size (max 100) : '));
    if (userInput > 100) {
        prompt('Please enter a number small or equal to 100!')
    } else {
        if (container.childElementCount <= 1) {
            createGrid(userInput);
        } else {
            removeGrid();
            createGrid(userInput);
        }
    }
});


// create grid with the number of squares entered by the user
function createGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {
            let row = document.createElement('div');
            container.appendChild(row);
            row.classList.add("square-row");
        
            for (let j = 0; j < squaresPerSide; j++) {
                let column = document.createElement('div');
                row.appendChild(column);
                column.classList.add("square-column");
            }
        }
    hoverEffect();
}

// remove grid and create blank slate for new grid
function removeGrid() {
    document.querySelectorAll('.square-row').forEach(item => {
        item.remove();
    });
}


// create hover effect with reduction of opacity
function hoverEffect() {
    let square = document.querySelectorAll('.square-column');
    square.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(255, 99, 71, 0.5)';
            item.style.cursor = 'pointer';

            let currentOpacity = item.style.opacity;
            if (!currentOpacity || currentOpacity ==='') {
                item.style.opacity = 1;
            } else {
                let newOpacity = parseFloat(currentOpacity) - 0.1;
                item.style.opacity = Math.max(0, newOpacity);
            };  
        });
    });
}