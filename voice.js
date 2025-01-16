const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
    // 오디오 재생
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = none;
    } else {
        audioPlayer.pause();
        playButton.textContent = none;
    }
});
