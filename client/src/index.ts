import "./styles.css";

const element = document.getElementById("timer");
const future = new Date("Sep 5, 2023 00:00:00");

const getTime = () => {
    let now = new Date();

    let difference = future.getTime() - now.getTime();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    element!.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (difference < 0) {
        clearInterval(timer);
        element!.innerHTML = "Expired";
    }
}


const timer = setInterval(getTime, 1000);