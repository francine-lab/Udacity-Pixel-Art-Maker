// Select color input
let colorPicker = document.querySelector('#colorPicker');

// Select size input
let sizePicker = document.querySelector('#sizePicker');
let table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;   
    makeGrid(width, height);
});

function makeGrid(width, height, lucky = false) {
    // .innerHTML property sets or returns the HTML content.
    table.innerHTML = "";
    for (let m = 0; m < height; m++) {
        let row = document.createElement('tr');
        for (let n = 0; n < width; n++) {
            let column = document.createElement('td');
            // This is for the 'I am feeling lucky' button
            column.style.backgroundColor = getColor(lucky);
            row.appendChild(column);
        };
        table.appendChild(row);
    };
    table.addEventListener('click', function (event) {
        event.target.style.backgroundColor = colorPicker.value;
    });
};

// I am feeling lucky button goes here!
let lucky = document.querySelector('#lucky');

lucky.addEventListener('submit', function (event) {
    event.preventDefault();
    // This I got from https://www.w3schools.com/jsref/jsref_random.asp
    width = Math.floor((Math.random() * 30) + 1);
    height = Math.ceil((Math.random() * 30) + 1);
    document.querySelector('#inputHeight').value = height;
    document.querySelector('#inputWidth').value = width;
    makeGrid(width, height, true);
});

function getColor(lucky) {
    if(lucky) {
        // This I got from https://css-tricks.com/snippets/javascript/random-hex-color/
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    };
    return "#FFFFFF";
}