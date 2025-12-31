const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

const audios = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
  document.getElementById("audio6"),
];

// Stop all audios
function stopAll() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Play corresponding audio
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    stopAll();
    audios[index].play();
  });
});

// Stop button
stopButton.addEventListener("click", stopAll);
