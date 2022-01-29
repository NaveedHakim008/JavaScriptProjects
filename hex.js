const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexcolor = '#';
let index;
const btn = document.getElementById('btnid');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {

    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * hex.length);
        hexcolor += hex[index];



    }

    document.body.style.backgroundColor = hexcolor;
    btn.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
    hexcolor = "#"


});

