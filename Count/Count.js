let count = 0;

function increase() {
    const increase = document.getElementById("number")
    count++;
    increase.innerText = count;
}

function decrease() {
    const decrease = document.getElementById("number")
    count--;
    decrease.innerText = count;
}