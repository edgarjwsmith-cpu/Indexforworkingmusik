(function () {
  'use strict';

  var audio       = document.getElementById('bg-audio');
  var enterBtn    = document.getElementById('enter-btn');
  var toggle      = document.getElementById('audio-toggle');
  var confirmMsg  = document.getElementById('audio-confirm');

  var STORAGE_KEY = 'ifwm_audio_playing';

  /* ---------- Enter: start audio ---------- */
  enterBtn.addEventListener('click', function () {
    audio.volume = 0.6;

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          // Audio started successfully
          sessionStorage.setItem(STORAGE_KEY, 'true');
          showPlayingState();
        })
        .catch(function (err) {
          // Most likely: audio file missing, or playback blocked
          console.warn('Audio could not play:', err);
          alert(
            'Audio could not play.\n\n' +
            'This usually means the file audio/track.mp3 is missing ' +
            'or has not been added yet. Add your MP3 to the audio/ ' +
            'folder and reload the page.'
          );
        });
    }
  });

  /* ---------- Mute / unmute ---------- */
  toggle.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      toggle.classList.remove('muted');
      toggle.querySelector('.icon-playing').textContent = '◼';
      toggle.setAttribute('aria-label', 'Mute audio');
    } else {
      audio.pause();
      toggle.classList.add('muted');
      toggle.querySelector('.icon-playing').textContent = '▶';
      toggle.setAttribute('aria-label', 'Play audio');
    }
  });

  /* ---------- Show playing UI ---------- */
  function showPlayingState() {
    toggle.hidden = false;
    confirmMsg.hidden = false;
    enterBtn.disabled = true;
    enterBtn.textContent = 'Entered';
  }

  /* ---------- If audio was already playing before reload ---------- */
  if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
    // Browsers may still block autoplay, so we don't force it;
    // we just show the toggle so the user can resume manually.
    toggle.hidden = false;
  }
})();