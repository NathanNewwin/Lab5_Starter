// expose.js
window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti()

function init() {
  console.log('Init called');
  const section = document.getElementById('expose');
  const hornSelect = section.querySelector('#horn-select');
  const hornImage = section.querySelector('img');
  const volumeSlider = section.querySelector('#volume');
  const volumeIcon = section.querySelector('#volume-controls img');
  const playButton = section.querySelector('button');
  const audio = section.querySelector('audio');

  updateHorn();
  updateVolume();

  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti()
    }
  });

  function updateHorn() {
    const choice = hornSelect.value;
    console.log('Selected horn:', choice);

    if (!choice || choice === 'select') {
      hornImage.src = 'assets/images/no-image.png';
      hornImage.alt = 'No image selected';
      audio.src = '';
      return;
    }
    hornImage.src = `assets/images/${choice}.svg`;
    hornImage.alt = `${choice.replace('-', ' ')} image`;
    audio.src = `assets/audio/${choice}.mp3`;
  }

  function updateVolume() {
    const vol = parseInt(volumeSlider.value, 10);
    console.log('Volume set to:', vol);
    audio.volume = vol / 100;
    let level;
    if (vol === 0) {
      level = 0;
    } else if (vol < 33) {
      level = 1;
    } else if (vol < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  }
}
