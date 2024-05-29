// ----- Buttons For Operations & Equal ----- // 

let valueDict = {
}

// Is there a way to use an object to assign text content to each button? // 

const operContainer = document.createElement("div");
operContainer.style.order = "5";

const plusBtn = document.createElement("button");
const subBtn = document.createElement("button");
const multBtn = document.createElement("button");
const divBtn = document.createElement("button"); 
const clrBtn = document.createElement("button"); 
const equalBtn = document.createElement("button"); 
const opBtnArr = [plusBtn, subBtn, multBtn, divBtn, clrBtn, equalBtn];


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
let y; 

//clrBtn.addEventListener("click", () => {
  //  x = resultShell.textContent;
  //  resultShell.textContent = ''; 
//});

plusBtn.addEventListener("click", () => {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `+`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' + '; 
    console.log(valueDict);
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

equalBtn.addEventListener("click", () => {
    valueDict.y = `${displayShell.textContent}`
    let result; 
    if (valueDict.op == '+') {
        result = addNum(parseInt(valueDict.x), parseInt(valueDict.y))
        resultShell.textContent = `${result}`;
    }
})