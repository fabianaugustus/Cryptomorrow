document.addEventListener('DOMContentLoaded' , () => {
    const fabian = document.querySelector('.fabian')
    const gameDisplay = document.querySelector('.farbeyond-container')
    const houses = document.querySelector('.houses')
    const movinghouses = document.querySelector('.movinghouses')

    let fabianLeft = 220
    let fabianBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 439


    function startGame() {
        fabianBottom -= gravity
        fabian.style.bottom = fabianBottom + 'px'
        fabian.style.left = fabianLeft + 'px'

    } 
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (fabianBottom < 500) fabianBottom += 50
        fabian.style.bottom = fabianBottom + 'px'
        console.log(fabianBottom)
    }
    document.addEventListener('keyup', control)

    function generateChimney() {
        let chimneyLeft = 500
        let movinghousesLeft = 420
        let randomHeight = Math.random() * 60
        let chimneyBottom = randomHeight
        const chimney = document.createElement('div')
        const owls = document.createElement('div')
        const movinghouses = document.createElement('div')
        if (!isGameOver) {
            chimney.classList.add('chimney')
            owls.classList.add('owls')
            movinghouses.classList.add('movinghouses')
        }
        gameDisplay.appendChild(chimney)
        gameDisplay.appendChild(owls)
        gameDisplay.appendChild(movinghouses)
        chimney.style.left = chimneyLeft + 'px'
        owls.style.left = chimneyLeft + 'px'
        movinghouses.style.left = movinghousesLeft + 'px'
        chimney.style.bottom = chimneyBottom + 'px'
        owls.style.bottom = chimneyBottom + gap + 'px'
        movinghouses.style.bottom = chimneyBottom + 200 + 'px'

        function moveChimney() {
            chimneyLeft -=2
            movinghousesLeft -=2
            chimney.style.left = chimneyLeft + 'px'
            owls.style.left = chimneyLeft + 'px'
            movinghouses.style.left = movinghousesLeft + 'px'

            if (chimneyLeft === -300) {
                clearInterval(timerId)
                gameDisplay.removeChild(chimney)
                gameDisplay.removeChild(owls)
                gameDisplay.removeChild(movinghouses)
            }

                if (
                chimneyLeft > 200 && chimneyLeft < 270 && fabianLeft === 220 &&
                (fabianBottom < chimneyBottom + 150 || fabianBottom > chimneyBottom + gap -200) ||
                fabianBottom === 93) {
                gameOver()
                clearInterval(timerId)
            }

       
        }
        let timerId = setInterval(moveChimney, 20)
        if (!isGameOver) setTimeout(generateChimney, 3000)
    }
    generateChimney()

    function gameOver() {
        clearInterval(gameTimerId)
        console.log('Game Over')
        isGameOver = true
        document.removeEventListener('keyup', control)
    }

})