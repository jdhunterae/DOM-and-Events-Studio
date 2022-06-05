// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const LANDED = 0;
    const FLYING = 1;

    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const flightStatus = document.getElementById("flightStatus");
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    let rocketPos = 0;
    let rocketHeight = 0;
    let rocketStatus = LANDED;

    function readableHeight(num) {
        return num.toLocaleString("en-US");
    }

    function takeOff() {
        if (rocketStatus === LANDED) {
            if (confirm("Confirm that the shuttle is ready for takeoff.")) {
                flightStatus.innerHTML = "Shuttle in flight.";
                shuttleBackground.style.backgroundColor = "blue";
                rocketHeight = 10000;
                rocketPos = 0;
                rocketStatus = FLYING;
                updateRocket();
            }
        } else {
            alert("Already in flight.");
        }
    }

    function land() {
        if (rocketStatus === FLYING) {
            alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            rocketHeight = 0;
            rocketPos = 0;
            updateRocket();
        } else {
            alert("Already on the ground.");
        }
    }
    function abort() {
        if (rocketStatus === FLYING) {
            if (confirm("Confirm that you want to abort the mission.")) {
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                rocketHeight = 0;
                rocketPos = 0;
                updateRocket();
            }
        } else {
            alert("Already on the ground.");
        }
    }

    function up() {
        if (rocketStatus === LANDED) {
            return;
        }

        rocketHeight += 10000;
        updateRocket();
    }

    function down() {
        if (rocketStatus === LANDED) {
            return;
        }

        rocketHeight -= 10000;
        updateRocket();
    }

    function left() {
        if (rocketStatus === LANDED) {
            return;
        }

        rocketPos -= 10;
        updateRocket();
    }

    function right() {
        if (rocketStatus === LANDED) {
            return;
        }

        rocketPos += 10;
        updateRocket();
    }

    function upDownRocket() {
        rocketHeight = Math.max(rocketHeight, 0);
        spaceShuttleHeight.innerHTML = readableHeight(rocketHeight);
    }

    function leftRightRocket() {
        if (rocketPos < 0) {
            rocketPos = Math.max(rocketPos, -430);
            rocket.style.marginLeft = "0px";
            rocket.style.marginRight = `${Math.abs(rocketPos)}px`;
        } else {
            rocketPos = Math.min(rocketPos, 430);
            rocket.style.marginLeft = `${Math.abs(rocketPos)}px`;
            rocket.style.marginRight = "0px";
        }
    }

    function updateRocket() {
        upDownRocket();
        leftRightRocket();
    }

    takeOffButton.addEventListener("click", takeOff);
    landButton.addEventListener("click", land);
    abortButton.addEventListener("click", abort);

    upButton.addEventListener("click", up);
    downButton.addEventListener("click", down);
    leftButton.addEventListener("click", left);
    rightButton.addEventListener("click", right);
}

window.addEventListener("load", init);