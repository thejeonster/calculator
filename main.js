// ----- Buttons For 0 to 9 ----- // 

const numSpacer = document.createElement("div");
numSpacer.style.height = "50px";
calcShell.appendChild(numSpacer);

const numShell = document.createElement("div"); 
numShell.classList.add("numShell");
numShell.style.display = "flex"; 
numShell.style.flexDirection = "row";
numShell.style.justifyContent = "space-around";
numShell.style.height = "200px";
calcShell.appendChild(numShell); 

const digitShell = document.createElement("div"); 
digitShell.classList.add("numShell");
digitShell.style.display = "flex"; 
digitShell.style.flexDirection = "column";
digitShell.style.justifyContent = "space-around";
digitShell.style.height = "200px";
numShell.appendChild(digitShell); 

const sevenToNine = document.createElement("div");
sevenToNine.style.order = "1";
const fourToSix = document.createElement("div");
fourToSix.style.order = "2";
const oneToThree = document.createElement("div");
oneToThree.style.order = "3";
const zero = document.createElement("div");
zero.style.order = "4";

const digitArr = [oneToThree, fourToSix, sevenToNine, zero];
const mapDigitArr = digitArr.map((num) => {
    num.style.justifyContent = "space-around";
    digitShell.appendChild(num)}); 

const opArr = ["+", "-", "x", "/", "c", '='];

function makeNumBtns(numBtns) {
    for (i = 0; i < numBtns; i++) {
        
        let numberBtn = document.createElement("button");
        numberBtn.style.height = "55px";
        numberBtn.style.width = "55px";
        numberBtn.style.backgroundColor = "#FFFFCC";
        numberBtn.style.borderRadius = "10px";
        numberBtn.textContent = `${i}`; 

        if (1 <= i && i <= 3) {
            numberBtn.classList.add("oneThree");
            oneToThree.appendChild(numberBtn);
        } else if (4 <= i && i <= 6) {
            numberBtn.classList.add("fourSix");
            fourToSix.appendChild(numberBtn);
        } else if (7 <= i && i <= 9) {
            numberBtn.classList.add("sevenNine");
            sevenToNine.appendChild(numberBtn); 
        } 

        // ----- Click Event For Number Buttons ----- //
        numberBtn.addEventListener("click", () => {
            displayShell.textContent = displayShell.textContent + `${numberBtn.textContent}`;
            subDisplayShell.textContent = `${displayShell.textContent}`;
        });
    };
}; makeNumBtns(10);

// ----- Add, Subtract, Multiply, Divide Functions ----- // 

let addNum = (x, y) => x + y; 
let subNum = (x, y) => x - y;
let mulNum = (x, y) => x * y; 
let divNum = (x, y) => x / y; 

let operate = (operator, numOne, numTwo) => {
    let result; 
    if (operator == "+") {
        result = addNum(numOne, numTwo);
    } else if (operator == "-") {
        result = subNum(numOne, numTwo);
    } else if (operator == "x") {
        result = mulNum(numOne, numTwo);
    } else if (operator == "/") {
        result = divNum(numOne, numTwo); 
    } displayShell.textContent = `${result}`;
};