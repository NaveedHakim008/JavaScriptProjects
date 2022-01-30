const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btnid');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    const n = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[n];
    btn.style.backgroundColor = colors[n];
    color.textContent = colors[n];
})

