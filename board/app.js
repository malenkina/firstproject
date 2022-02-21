const board = document.querySelector('#board')
const squareNum = 500
const colors = ['#9b6767', '#7c71d8', '#d871cf', '#71d893', 'white']

for (let i = 0; i < squareNum; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    board.append(square)

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}