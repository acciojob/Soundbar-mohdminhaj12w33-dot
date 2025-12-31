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

function stopAll() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    stopAll();

    // ✅ IMPORTANT: catch the promise rejection
    const playPromise = audios[index].play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  });
});

stopButton.addEventListener("click", stopAll);
