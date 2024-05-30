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

clrBtn.addEventListener("click", () => {
    displayShell.textContent = ''; 
    subDisplayShell.textContent = '';
});

plusBtn.addEventListener("click", () => {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `+`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' + '; 
    console.log(valueDict);
}); 


subBtn.addEventListener("click", () => {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `-`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' - '; 
    console.log(valueDict);
}); 

multBtn.addEventListener("click", () => {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `x`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' x '; 
    console.log(valueDict);
}); 

divBtn.addEventListener("click", () => {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `/`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' / '; 
    console.log(valueDict);
});  

equalBtn.addEventListener("click", () => {
    valueDict.y = `${displayShell.textContent}`
    if (valueDict.y == '0') {
        alert("Why are you dividing by zero?")
        return displayShell.textContent = '';
    }
    operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y))

})