

document.body.style.cssText = `
    display: flex;
    flexDirection = "column"; 
    height = 100%;
    alignItems = "center";
    justifyContent = "center";`


// ----- The Calculator's Skeleton ----- // 

const calcShell = document.createElement("div");
calcShell.classList.add("calcShell");
calcShell.style.display = "flex";
calcShell.style.flexDirection = "column";
calcShell.style.height = "500px";
calcShell.style.width = "300px"; 
calcShell.style.border = "1px solid black";
calcShell.style.backgroundColor = "#FFEFFE";

document.body.appendChild(calcShell);

// ----- Display For Results ----- // 
let x;

const resultShell = document.createElement("div");
resultShell.classList.add("resultShell");
resultShell.style.display = "flex";
resultShell.style.flexDirection = "column";
resultShell.style.height = "75px";
resultShell.style.width = "240px";
resultShell.style.marginLeft = "auto";
resultShell.style.marginRight = "auto";
resultShell.style.marginTop = "30px";
resultShell.style.border = "1px solid black"; 


calcShell.appendChild(resultShell);

const subDisplayShell = document.createElement("div");
subDisplayShell.classList.add("subDisplayShell");
subDisplayShell.style.height = "25px";
subDisplayShell.style.width = "240px";
subDisplayShell.style.border = "1px solid black";
subDisplayShell.style.fontSize = "10px";

resultShell.appendChild(subDisplayShell);

const displayShell = document.createElement("div");
displayShell.classList.add("displayShell");
displayShell.style.height = "50px";
displayShell.style.width = "240px";
displayShell.style.border = "1px solid black";

resultShell.appendChild(displayShell);
