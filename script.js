var clockElement = document.getElementById( "timeanddate" );

function updateClock(clock) {
        clock.innerHTML = new Date();
}

updateClock(clockElement);

setInterval(function () {
    updateClock(clockElement);
}, 1000);