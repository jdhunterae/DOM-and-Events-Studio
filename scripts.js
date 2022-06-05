// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeOffConfirm = "Confirm that the shuttle is ready for takeoff.";
    const shuttleBackground = document.getElementById("shuttleBackground");
    const flightStatus = document.getElementById("flightStatus");
    const takeOffButton = document.getElementById("takeoff");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    function takeOff() {
        if (confirm(takeOffConfirm)) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    }

    takeOffButton.addEventListener("click", takeOff);
}

window.addEventListener("load", init);