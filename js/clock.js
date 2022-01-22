const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    let hour = String(date.getHours()).padStart(2,"0");
    let min = String(date.getMinutes()).padStart(2,"0");
    let sec = String(date.getSeconds()).padStart(2,"0");

    const currentTime = `${hour}:${min}:${sec}`;
    clock.innerText = currentTime;
};

getClock();
setInterval(getClock,1000);