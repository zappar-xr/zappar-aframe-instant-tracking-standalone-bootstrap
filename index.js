console.log("Using AFRAME", AFRAME.version);
console.log("Using ZapparAFrame", ZapparAFrame);

window.addEventListener("load", setup);

function setup() {

    // When the user taps on the placement UI
    const placementUI = document.getElementById("zappar-placement-ui");
    placementUI.addEventListener("click", () => {

        // Set placement-mode to false on the instant tracker group
        const instantGroup = document.getElementById("instant-group");
        instantGroup.setAttribute("zappar-instant", "placement-mode: false");

        // Remove the placement UI
        placementUI.remove();
    });

}
