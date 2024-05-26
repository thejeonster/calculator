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


const opArr = ["+", "-", "x", "/", "c"];

function makeNumBtns(numBtns) {
    for (i = 0; i < numBtns; i++) {
        
        let numberBtn = document.createElement("button");
        numberBtn.style.height = "55px";
        numberBtn.style.width = "55px";
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
        
            function stringDeleter() {
                for (operand in opArr) {
                    if (operand in displayShell.textContent) {
                        let z = displayShell.textContent.indexOf(operand)
                        let y = displayShell.textContent.slice(z + 2); 
                    }
                } return y;
            } stringDeleter();
        
        })
    }
} makeNumBtns(10)

// ----- Buttons For Operations & Equal ----- // 


// Is there a way to use an object to assign text content to each button? // 

const operContainer = document.createElement("div");
operContainer.style.order = "5";

const plusBtn = document.createElement("button");
const subBtn = document.createElement("button");
const multBtn = document.createElement("button");
const divBtn = document.createElement("button"); 
const clrBtn = document.createElement("button"); 
const opBtnArr = [plusBtn, subBtn, multBtn, divBtn, clrBtn];


const mapOpBtn = opBtnArr.map((oper) => {
    for (i = 0; i < opBtnArr.length; i++) {
        opBtnArr[i].style.height = "55px";
        opBtnArr[i].style.width = "55px";
        opBtnArr[i].textContent = `${opArr[i]}`;
        operContainer.appendChild(opBtnArr[i]); 
    }
}) 

numShell.appendChild(operContainer);

// ----- Click Events For Operations ----- // 


clrBtn.addEventListener("click", () => {
    x = resultShell.textContent;
    resultShell.textContent = ''; 
});

plusBtn.addEventListener("click", () => {
    x = displayShell.textContent;
    displayShell.textContent = displayShell.textContent + ' + ';
    subDisplayShell.textContent = subDisplayShell.textContent + ' + '; 
}); 

subBtn.addEventListener("click", () => {
    x = resultShell.textContent;
    resultShell.textContent = '-'; 
}); 

multBtn.addEventListener("click", () => {
    x = resultShell.textContent;
    resultShell.textContent = 'x'; 
}); 

divBtn.addEventListener("click", () => {
    x = resultShell.textContent;
    resultShell.textContent = '/'; 
});  



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