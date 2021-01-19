const button = document.querySelector("#button");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
	button.classList.remove("on");
	button.classList.add("off");
    
  } else {
    audio.pause();
   button.classList.remove("off");
   button.classList.add("on");
  }
});