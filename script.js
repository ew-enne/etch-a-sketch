let container = document.querySelector('.container');

let squaresPerSide = 4;

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
