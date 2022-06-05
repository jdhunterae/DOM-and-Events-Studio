// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const shuttleBackground = document.getElementById("shuttleBackground");
    const flightStatus = document.getElementById("flightStatus");
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    function takeOff() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    }

    function land() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    }
    
    function abort() {
        it (confirm("Confirm that you want to abort the mission."))  {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    }

    takeOffButton.addEventListener("click", takeOff);
    landButton.addEventListener("click", land);
}

window.addEventListener("load", init);