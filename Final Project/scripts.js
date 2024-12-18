//Question Block Easter Egg Shenanigans
function sfxAudio() {
    const coinSound = new Audio('audio/coin.mp3');
    coinSound.play();
}
const mushSound = new Audio('audio/oneUP.wav');
const qBlock = document.getElementById('questionBlock');
let clickCount = 0;
qBlock.addEventListener('click', () => {
    // Increments the click counter
    clickCount++;
  
    // Plays the sound every 10 clicks
    if (clickCount % 10 === 0) {
      mushSound.play();
    }
});