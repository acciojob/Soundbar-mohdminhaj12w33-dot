const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

const sounds = {};

// Load sounds
buttons.forEach(button => {
  const soundName = button.dataset.sound;
  sounds[soundName] = new Audio(`sounds/${soundName}.mp3`);

  button.addEventListener("click", () => {
    stopAllSounds();
    sounds[soundName].play();
  });
});

// Stop all sounds
function stopAllSounds() {
  for (let sound in sounds) {
    sounds[sound].pause();
    sounds[sound].currentTime = 0;
  }
}

// Stop button
stopButton.addEventListener("click", stopAllSounds);
