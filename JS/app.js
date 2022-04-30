const score = document.querySelector('.score')
const startScreen = document.querySelector('.startScreen')
const gameArea = document.querySelector('.gameArea')
startScreen.addEventListener('click', start)
var count = 0;
function start() {

    gameArea.innerHTML = ""
    startScreen.classList.add('hide')

    player.start = true
    for (let i = 0; i < 5; i++) {
        let div = document.createElement('div')
        div.classList.add('lines')
        div.y = (i * 150)
        div.style.top = (i * 150) + 'px'
        gameArea.appendChild(div)
    }
    for (let i = 0; i < 3; i++) {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.y = ((i + 1) * 600) * (-1)
        enemy.style.top = enemy.y + 'px'
        enemy.style.left = Math.floor(Math.random() * 150) + "px"
        enemy.style.backgroundColor = randomColor()
        enemy.innerText = `${i + 1}`
        gameArea.appendChild(enemy)
    }
    let car = document.createElement('div')
    car.setAttribute('class', 'car')
    gameArea.appendChild(car)
    console.log(gameArea)
    player.X = car.offsetLeft
    player.Y = car.offsetTop
    console.log(player)
    window.requestAnimationFrame(playGame)


}
function movelines() {
    let lines = document.querySelectorAll('.lines')
    lines.forEach(function (item) {
        console.log(item.y)
        if (item.y > 750) {
            item.y -= 750
        }
        else {
            item.y += player.speed
            item.style.top = item.y + 'px'
        }
    }
    )
}
function moveenemy(car) {
    let enemy = document.querySelectorAll('.enemy')
    let score = document.querySelector('.score')

    enemy.forEach(function (item) {
        if (isCollide(car, item)) {
            gameEnd()
        }

        if (item.y > 1500) {
            item.y = - 600
            item.style.left = Math.floor(Math.random() * 150) + "px"
        }

        item.y += player.speed
        item.style.top = item.y + 'px'
    }
    )


}


function gameEnd() {
    player.start = false
    score.innerHTML = `<h3>Game Over<h3><p>Score was ${player.score}`
    startScreen.classList.remove('hide')


}
function randomColor() {
    function C() {
        let hex = Math.floor(Math.random() * 256).toString(16);
        return ("0" + String(hex)).substr(-2)

    }
    return "#" + C() + C() + C()
}
function isCollide(a, b) {
    let aRect = a.getBoundingClientRect()
    let bRect = b.getBoundingClientRect()
    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
}
const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player = { speed: 5, score: 0 }
document.addEventListener('keydown', pressOn)
document.addEventListener('keyup', pressOff)
function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true
    console.log(e.key)
}
function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false

}
function playGame() {

    let car = document.querySelector('.car')
    let road = gameArea.getBoundingClientRect()
    count++;
    movelines()
    moveenemy(car, count)


    if (player.start) {
        if (keys.ArrowUp && player.Y > (road.top)) player.Y -= player.speed
        if (keys.ArrowDown && player.Y < (road.bottom)) player.Y += player.speed
        if (keys.ArrowLeft && player.X > 0) player.X -= player.speed
        if (keys.ArrowRight && player.X < (road.width - 50)) player.X += player.speed

        car.style.left = player.X + 'px'
        car.style.top = player.Y + 'px'
        window.requestAnimationFrame(playGame)

        player.score += 1
        score.innerText = "Score:" + player.score


    }
}

