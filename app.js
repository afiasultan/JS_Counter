const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

const counterElement = document.querySelector(".counter");

let counterValue = 0;

increase.addEventListener("click", function() {

    counterValue += 1;
    counterElement.textContent = counterValue;

});

decrease.addEventListener("click", function() {

    counterValue -= 1;
    counterElement.textContent = counterValue;

});

reset.addEventListener("click", function() {

    counterValue = 0;
    counterElement.textContent = counterValue;

});
