// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  
  const section = document.getElementById('explore');
  const img = section.querySelector('img');
  const textArea = section.querySelector('#text-to-speak');
  const voiceSelect = section.querySelector('#voice-select');
  const button = section.querySelector('button');
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }
  
  button.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedName = voiceSelect.value;
    const selectedVoice = voices.find(v => v.name === selectedName);
    if (selectedVoice) {
      utterThis.voice = selectedVoice;
    }

    utterThis.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
      img.alt = 'Speaking';
    };
    utterThis.onend = () => {
      img.src = 'assets/images/smiling.png';
      img.alt = 'Smiling face';
    };

    synth.speak(utterThis);
  });
}
