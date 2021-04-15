const showTime = () => {
    let currentDate = new Date();
    console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
};

setInterval(() => {
    let seconds = document.getElementById("seconds");
    seconds.innerText = new Date().getSeconds();
}, 1000);
setInterval(() => {
    let minutes = document.getElementById("minutes");
    minutes.innerText = new Date().getMinutes();
});

setInterval(() => {
    let hours = document.getElementById("hours");
    hours.innerText = new Date().getHours();
});

setInterval(() => {
    let days = document.getElementById("days");
    let calendar = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < calendar.length; i++) {
        if (new Date().getDay() === i) {
            days.innerText = calendar[i];
        }
    }
});