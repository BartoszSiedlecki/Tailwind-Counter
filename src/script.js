var dayCont = document.getElementById("days-left");
var hrCont = document.getElementById("hours-left");
var minCont = document.getElementById("minutes-left");
var secCont = document.getElementById("seconds-left");
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
window.onload = function setUpTimer() {
    days = 5;
    hours = 12;
    minutes = 23;
    seconds = 59;
    changeDays();
    changeHours();
    changeMinutes();
    changeSeconds();
};
var countDown = window.setInterval(function () {
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        return;
    }
    seconds -= 1;
    changeSeconds();
    if (seconds < 0) {
        seconds = 59;
        changeSeconds();
        minutes -= 1;
        changeMinutes();
        if (minutes < 0) {
            minutes = 59;
            changeMinutes();
            hours -= 1;
            changeHours();
            if (hours < 0) {
                hours = 23;
                changeHours();
                days -= 1;
                changeDays();
            }
        }
    }
}, 1000);
function changeSeconds() {
    if (secCont != null) {
        secCont.innerHTML = String(seconds);
        if (seconds < 10) {
            secCont.innerHTML = "0" + seconds;
        }
    }
}
function changeMinutes() {
    if (minCont != null) {
        minCont.innerHTML = String(minutes);
        if (minutes < 10) {
            minCont.innerHTML = "0" + minutes;
        }
    }
}
function changeHours() {
    if (hrCont != null) {
        hrCont.innerHTML = String(hours);
        if (hours < 10) {
            hrCont.innerHTML = "0" + hours;
        }
    }
}
function changeDays() {
    if (dayCont != null) {
        dayCont.innerHTML = String(days);
        if (days < 10) {
            dayCont.innerHTML = "0" + days;
        }
    }
}
