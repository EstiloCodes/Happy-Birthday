const playButton = document.getElementById("playButton");
let audio;

playButton.addEventListener("click", () => {
  if (!audio) {
    audio = new Audio("assets/Happy Birthday Bouncy - E's Jammy Jams.mp3");
    audio.volume = 0.2; // Set the volume to 0.2 (20%)
    audio.play();
  } else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
