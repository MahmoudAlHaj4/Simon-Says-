const btn = document.getElementById("play");
const colors = ["blue", "red", "yellow", "green"];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const tiles = document.querySelectorAll('.tile');
const container = document.querySelector(".container");


btn.addEventListener("click", function () {
    const color = colors[generatePattern()];
    console.log("color:", color);

    playSound(color);

    container?.classList.remove("unclickable");
    
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.remove("inactive");
            setTimeout(() => {
                tile.classList.add("inactive");
            }, 500);
        }, index * 1000);
    });
});