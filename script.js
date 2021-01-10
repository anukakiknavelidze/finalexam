let canvasHeight = 500
let row
let grid
let amtOfHorizontalCircles = 15
let linesAmt = 50
let ySpacing = 10
let lineSpacing = canvasHeight/linesAmt

const createCircle = (fillColor, x, y, maxRadius) => {
    let xpos = x
    let ypos = y
    return {
        xpos,
        ypos,
        display() {
            noStroke()
            fill(fillColor)
            ellipse(xpos, ypos, maxRadius, maxRadius)
        },
    }
}

const createLine = (arr, amt,x, y) => {
    if( arr.length < amt) {
        arr.push(createCircle(`rgba(0, 0, 0, ${Math.random().toFixed(1)})`, x,  y, Math.random()*9))
        createLine(arr, amt, x+=width/amtOfHorizontalCircles, y)
    }
    return arr
}


const createGrid = (arr, linesAmt, y) => {
    if( arr.length < linesAmt) {
        arr.push(createLine([], amtOfHorizontalCircles, 0, y))
        createGrid(arr, linesAmt, y += lineSpacing)}
    return arr
}

const slideRow = () => {
    grid.forEach( (line) => {
        line.forEach( x => {
            x.slide(ySpacing)
        })
    })
}


function setup () {
    createCanvas(600, canvasHeight)
    background("#255")
    grid = createGrid([], linesAmt, 10)
    setInterval(slideRow, 1000)
}

function draw () {
    background("255")
    grid.forEach( row => {
        row.forEach( x => {
            x.display()
        })
    })
}
