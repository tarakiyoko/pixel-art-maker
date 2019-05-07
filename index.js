let container = document.querySelector('.container')

let color = "white";
let colorSelector = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white'];

for(let i=1;i<=12;i++){
    let rowElement = document.createElement('div')
    container.appendChild(rowElement); 
    for(let j=1;j<=12;j++) {
        let squareElement = document.createElement('div')
        squareElement.className = "square"
        squareElement.id = i+j
        rowElement.appendChild(squareElement); 
        let buttonClick = squareElement.addEventListener('click', (evt) => {
            evt.target.style.background = color;
        })
    }
}

let palette = document.querySelector('.palette-container');
let colorIndicator = document.createElement('div');
colorIndicator.className = 'square';
colorIndicator.style.borderRadius = '15px';
palette.appendChild(colorIndicator);

for(let i=0;i<=9;i++){
    let paletteElement = document.createElement('div');
    paletteElement.className = 'square';
    paletteElement.style.background = colorSelector[i];
    palette.appendChild(paletteElement);
    let paletteClick = paletteElement.addEventListener('click', (evt) => {
        color = evt.target.style.background;
        colorIndicator.style.background = color;
    })
}