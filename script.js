var date;
const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const mins1 = document.getElementById('mins');
const seconds1 = document.getElementById('seconds');
dateReseter1 = false;
var person;

function setDate() {
    person = prompt("Please enter a date after today in the form of 'month day year'", "Jan 1 2024");
    if (person != null) {
        date = person;
        timeToDate();
        var d = setInterval(timeToDate, 1000);
        function timeToDate() {
            const designatedDate = new Date(date);
            const currentDate = new Date();
            const totalSeconds = (designatedDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds/24/3600);
            const hours = Math.floor(((totalSeconds / 3600 / 24) - days) * 24);
            console.log(hours)
            const mins = Math.floor(((((totalSeconds / 3600 / 24) - days) * 24) - hours) * 60);
            const seconds = Math.floor(((((((totalSeconds / 3600 / 24) - days) * 24) - hours) * 60) - mins) * 60);
            let daysExtra = (days < 0) ? 0: days;
            let secondsExtra = (seconds < 10) ? ('0' + seconds): seconds;
            let minsExtra = (mins < 10) ? ('0' + mins): mins;
            let hoursExtra;
            if (hours - 1 < 0) {
                hoursExtra = 0;
            }
            else if (hours < 10 && days > 0) {
                hoursExtra = '0' + hours - 1;
            }
            else {
                hoursExtra = hours;
            }
            if (days <= 0 && hours <= 0 && mins <= 0 && seconds <= 0) {
                alert("Date Reached!");
                clearInterval(d);
                return;
            }
            if (dateReseter1) {
                clearInterval(d);
                console.clear();
                daysExtra = 0;
                secondsExtra = 0;
                minsExtra = 0;
                hoursExtra = 0;
                console.log(daysExtra, hoursExtra, minsExtra, secondsExtra);
                days1.innerHTML = "00";
                hours1.innerHTML = "00";
                mins1.innerHTML = "00";
                seconds1.innerHTML = "00";
                alert("Date Cleared!");
                dateReseter1 = false;
                return;
            }
            console.log(daysExtra, hoursExtra, minsExtra, secondsExtra);
            days1.innerHTML = daysExtra;
            hours1.innerHTML = hoursExtra;
            mins1.innerHTML = minsExtra;
            seconds1.innerHTML = secondsExtra;
        }
    }
}

function resetDate() {
    if (person != null) {
        dateReseter1 = true;
        person = null;
    }
}

var hoursHelp = 0;
var minsHelp = 0;
var secondsHelp = 0;
var timePassed = 0;
var totalCount = 0;
totalCount = 0;
var resetCounter = 0;
var reseter;
reseter = false;
resetCounter = -1;

const hoursTimer = document.getElementById('hoursINT');
const minsTimer = document.getElementById('minsINT');
const secondsTimer = document.getElementById('secondsINT');

function setTimer() {
    resetCounter = resetCounter + 1;
    var hours = prompt("Please enter the number of hours you would like to time", "3");
    var mins = prompt("Please enter the number of minutes you would like to time", "3")
    var seconds = prompt("Please enter the number of seconds you would like to time", "3")
    if (hours != null || mins != null || seconds != null) {
        hoursHelp = hours;
        minsHelp = mins;
        secondsHelp = seconds - (-1 * totalCount);
    }
    var d = setInterval(timerFunction, 1000);
    function timerFunction() {
        // Counter to override the current set timer
        if (resetCounter > 0) {
            clearInterval(d);
            resetCounter = 0;
        }
        totalCount = totalCount + 1;
        timePassed = timePassed + 1;
        const totalSeconds = (3600 * hoursHelp + minsHelp * 60 + secondsHelp * 1) - timePassed;
        const hours = Math.floor(totalSeconds / 3600);
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds - hours * 3600 - mins * 60);
        let secondsExtra = (seconds < 10) ? ('0' + seconds): seconds;
        let minsExtra = (mins < 10) ? ('0' + mins): mins;
        let hoursExtra = (hours < 10) ? ('0' + hours): hours;
        console.log(hoursExtra, minsExtra, secondsExtra);
        hoursTimer.innerHTML = hoursExtra;
        minsTimer.innerHTML = minsExtra;
        secondsTimer.innerHTML = secondsExtra;
        // Involves the end portion
        if (reseter) {
            clearInterval(d);
            console.clear();
            secondsExtra = 0;
            minsExtra = 0;
            hoursExtra = 0;
            console.log(hoursExtra, minsExtra, secondsExtra);
            hoursTimer.innerHTML = "00";
            minsTimer.innerHTML = "00";
            secondsTimer.innerHTML = "00";
            alert("Timer Cleared!");
            reseter = false;
            resetCounter = -1;
        }
        // Involves the end portion
        if (hours <= 0 && mins <= 0 && seconds <= 0) {
            clearInterval(d);
            console.clear();
            alert("Timer Done!");
            resetCounter = -1;
        }
    }
}

setTimeout(function() {
    //your code to be executed after 1 second
  }, 5000);

function resetTimer() {
    if (hoursHelp > 0 || minsHelp > 0 || secondsHelp > 0) {
        reseter = true;
        hoursHelp = 0;
        minsHelp = 0;
        secondsHelp = 0;
    }
}