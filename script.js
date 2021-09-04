let counter = document.getElementById("Counter");
let btnDecrease = document.getElementById("decrease");
let btnReset = document.getElementById("reset");
let btnIncrease = document.getElementById("increase");

let count = 0;

updateDisplay()

btnDecrease.addEventListener("click",()=>{
    count--;
    updateDisplay();
});
btnReset.addEventListener("click",()=>{
    count=0;
    updateDisplay();
});
btnIncrease.addEventListener("click",()=>{
    count++;
    updateDisplay();
});

function updateDisplay(){
    counter.innerHTML = count;
};

