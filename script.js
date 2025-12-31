const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

// ✅ 0.2s silent mp3 (base64)
const silentAudio =
  "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA" +
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const audios = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
  document.getElementById("audio6"),
];

// assign valid audio source
audios.forEach(audio => {
  audio.src = silentAudio;
  audio.muted = false;
});

function stopAll() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    stopAll();

    const playPromise = audios[index].play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  });
});

stopButton.addEventListener("click", stopAll);
