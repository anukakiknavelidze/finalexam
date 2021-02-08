let symmetry = 6; /* ხაზის სისქე */

let angle = 360 / symmetry; /* რკალის რაოდენობა */
let saveButton, clearButton, mouseButton, keyboardButton; /* ღილაკები */
let slider; /* ფუნჯის ზომის შეცვლა */

function setup() {
    createCanvas(1263, 510); /* ფონი */
    angleMode(DEGREES); /* დახრილობა */
    background('#fae'); /* background-ის ფერი */

    saveButton = createButton('save'); /* შენახვის ფუნქცია */
    saveButton.mousePressed(saveFile);/* მაუსის ღილაკით */

    clearButton = createButton('clear'); /* ახალი ფურცელი */
    clearButton.mousePressed(clearScreen); /* მაუსის ღილაკით */


    brushSizeSlider = createButton('Brush Size Slider'); /* ფუნჯის ზომის რეგულირება */
    sizeSlider = createSlider(1, 32, 4, 0.1);
} /* ზომები */

function saveFile() {
    save('design.jpg');
} /* შენახვის ფუნქცია pnj ფორმატში */

function clearScreen() {
    background('#fae'); /* background-ის ფერი ახალ ფურცელზე */
}


function draw() {
    translate(width / 2, height / 2); /* ცენტრი */

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;
        /* ხაზების დახრილობა, ალგორითმი */

        if (mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                let sw = sizeSlider.value();
                strokeWeight(sw);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            } /* ცენტრის და ხაზის ცვლილებები */
        }
    }
}
