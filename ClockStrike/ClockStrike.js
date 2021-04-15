let clockStrike;

function setvalue() {
    let input = Number(document.getElementById("clockStrike").value);
    input--;
    document.getElementById("clockStrike").value = input;
}

function start() {
    clockStrike = setInterval(setvalue, 1000);
}

function stop() {
    clearInterval(clockStrike);
}