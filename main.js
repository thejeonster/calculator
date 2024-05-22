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

const numSpacer = document.createElement("div");
numSpacer.style.height = "50px";
calcShell.appendChild(numSpacer);

const numShell = document.createElement("div"); 
numShell.classList.add("numShell")
numShell.style.display = "flex"; 
numShell.style.flexDirection = "column"
numShell.style.justifyContent = "space-around";
numShell.style.height = "200px";
calcShell.appendChild(numShell); 

const sevenToNine = document.createElement("div");
sevenToNine.style.order = "1"
const fourToSix = document.createElement("div");
fourToSix.style.order = "2"
const oneToThree = document.createElement("div");
oneToThree.style.order = "3"
const zero = document.createElement("div");
zero.style.order = "4";


const digitArr = [oneToThree, fourToSix, sevenToNine];
const mapDigitArr = digitArr.map((num) => {
    num.style.justifyContent = "space-around";
    numShell.appendChild(num)}); 

function makeNumBtns(numBtns) {
    for (i = 0; i < numBtns; i++) {
        
        let numberBtn = document.createElement("button");
        numberBtn.style.height = "55px";
        numberBtn.style.width = "55px";
        numberBtn.textContent = `${i}`; 

        if (1 <= i && i <= 3) {
            oneToThree.appendChild(numberBtn);
        } else if (4 <= i && i <= 6) {
            fourToSix.appendChild(numberBtn);
        } else if (7 <= i && i <= 9) {
            sevenToNine.appendChild(numberBtn); 
        }
    }
} makeNumBtns(10)

// ----- Buttons For Operations & Equal ----- // 

let operKey = {
    plusBtn: "+",
    subBtn: "-",
    multBtn: "x",
    divBtn: "/",
};

// Is there a way to use an object to assign text content to each button? // 

const operContainer = document.createElement("div");
operContainer.style.order = "5";

const plusBtn = document.createElement("button");
const subBtn = document.createElement("button");
const multBtn = document.createElement("button");
const divBtn = document.createElement("button"); 
const opBtnArr = [plusBtn, subBtn, multBtn, divBtn];


const mapOpBtn = opBtnArr.map((oper) => {
    for (i = 0; i < opBtnArr.length; i++) {
        opBtnArr[i].style.height = "55px";
        opBtnArr[i].style.width = "55px";
        operContainer.appendChild(opBtnArr[i]); 
    }
}) 


numShell.appendChild(operContainer);

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