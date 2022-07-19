
window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key);
    audio.currentTime = 0; // enables key spamming
    audio.play();
    key.classList.add("playing");
});
