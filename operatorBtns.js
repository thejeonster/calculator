// ----- Buttons For Operations & Equal ----- // 

let valueDict = {
    x: '',
    y: '',
    op: '',             
};

// ----- Button Elements For Operations ----- // 

const operContainer = document.createElement("div");
operContainer.classList.add("operatorContainer");
operContainer.style.display = "flex";
operContainer.style.flexDirection = "column";
operContainer.style.height = "375px";
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
        opBtnArr[i].style.backgroundColor = "#FFFFCC";
        opBtnArr[i].style.borderRadius = "10px";
        opBtnArr[i].textContent = `${opArr[i]}`;
        operContainer.appendChild(opBtnArr[i]); 
    }
}) 

numShell.appendChild(operContainer);

// ----- Click Events For Operations ----- // 

let y; 

clrBtn.addEventListener("click", () => {
    valueDict = {
        x: '',
        y: '',
        op: '',             
    };
    displayShell.textContent = ''; 
    subDisplayShell.textContent = '';
});

plusBtn.addEventListener("click", () => {
    if (valueDict.x != '') {
        valueDict.y = `${displayShell.textContent}`;
        let newVal = operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y));
        valueDict = {
            x: '',
            y: '',
            op: '',             
        };
    } else {
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `+`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' + '; 
    };
}); 

subBtn.addEventListener("click", () => {
    if (valueDict.x != '') {
        valueDict.y = `${displayShell.textContent}`;
        let newVal = operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y));
        valueDict = {
            x: '',
            y: '',
            op: '',             
        };
    } else { 
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `-`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' - '; 
    };
}); 

multBtn.addEventListener("click", () => {
    if (valueDict.x != '') {
        valueDict.y = `${displayShell.textContent}`;
        let newVal = operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y));
        valueDict = {
            x: '',
            y: '',
            op: '',             
        };
    } else { 
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `x`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' x '; 
    };
}); 

divBtn.addEventListener("click", () => {
    if (valueDict.x != '') {
        valueDict.y = `${displayShell.textContent}`;
        let newVal = operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y));
        valueDict = {
            x: '',
            y: '',
            op: '',             
        };
    } else { 
    valueDict.x = `${displayShell.textContent}`
    valueDict.op = `/`;
    displayShell.textContent = '';
    subDisplayShell.textContent = subDisplayShell.textContent + ' / '; 
    };
});  

equalBtn.addEventListener("click", () => {
    valueDict.y = `${displayShell.textContent}`
    if (valueDict.y == '0') {
        alert("Why are you dividing by zero?")
        return displayShell.textContent = '';
    } else if (valueDict.x == '') {
        alert("You need to input a number.")
        return displayShell.textContent = '';
    } else if (valueDict.y == '') {
        alert("You need to input a number.")
        return displayShell.textContent = '';
    }
    operate(valueDict.op, parseFloat(valueDict.x), parseFloat(valueDict.y))
});