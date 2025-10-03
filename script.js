let container = document.querySelector('.container');

let squaresPerSide = 10;

// create divs for the grid
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

// create hover effect
let square = document.querySelectorAll('.square-column');
square.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });
});

