let incrementField = document.getElementById("increment");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let resetButton = document.getElementById("reset");
let currentValue = document.getElementById("number");
let incrementValue = 1;

incrementField.addEventListener("change", function(e){
    incrementValue = parseInt(e.target.value)
});

addButton.addEventListener("click", function(e){
    let total = parseInt(currentValue.innerText) + incrementValue;
    currentValue.innerText = total
});

subtractButton.addEventListener("click", function(e){
    total = parseInt(currentValue.innerText) - incrementValue;
    currentValue.innerText = total
})

resetButton.addEventListener("click", function(e){
    currentValue.innerText = 0;
})