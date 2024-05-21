document.body.style.display = "flex";
document.documentElement.style.height = "100%";
document.body.style.height = "100%";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";

// ----- The Calculator's Skeleton ----- // 

const calcShell = document.createElement("div");
calcShell.classList.add("calcShell");
calcShell.style.display = "flex";
calcShell.style.flexDirection = "column";
calcShell.style.height = "500px";
calcShell.style.width = "300px"; 
calcShell.style.border = "1px solid black";

document.body.appendChild(calcShell);

// ----- Display For Results ----- // 

const resultShell = document.createElement("div");
resultShell.classList.add("resultShell");
resultShell.style.height = "75px";
resultShell.style.width = "240px";
resultShell.style.marginLeft = "auto";
resultShell.style.marginRight = "auto";
resultShell.style.marginTop = "30px";
resultShell.style.border = "1px solid black"; 

calcShell.appendChild(resultShell);

// ----- Buttons For 0 to 9 ----- // 

const numShell = document.createElement("div"); 
numShell.classList.add("numShell")
numShell.style.display = "flex"; 
numShell.style.height = "200px";
calcShell.appendChild(numShell); 

const oneToThree = document.createElement("div");
const fourToSix = document.createElement("div");
const sevenToNine = document.createElement("div");

function makeNumBtns(numBtns) {
    for (i = 0; i < numBtns; i++) {
        let numberBtn = document.createElement("button");
        numberBtn.style.height = "45px";
        numberBtn.style.width = "45px";
        numberBtn.textContent = `${i}`; 
        numShell.appendChild(numberBtn); 
    }
} makeNumBtns(10)

// ----- Add, Subtract, Multiply, Divide Functions ----- // 

let addNum = (x, y) => x + y; 
let subNum = (x, y) => x - y;
let mulNum = (x, y) => x * y; 
let divNum = (x, y) => x / y; 

let numOne 
let numTwo
let operator 

let operate = (operator, numOne, numTwo) => {
    if (operator == "add") {
        return addNum(numOne, numTwo);
    } else if (operator == "subtract") {
        return subNum(numOne, numTwo);
    } else if (operator == "multiple") {
        return mulNum(numOne, numTwo);
    } else if (operator == "divide") {
        return divNum(numOne, numTwo); 
    }
}