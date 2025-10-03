let container = document.querySelector('.container');

let squaresPerSide = 50;

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

// create hover effect with reduction of opacity
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

