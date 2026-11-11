(function () {
  'use strict';

  var audio      = document.getElementById('bg-audio');
  var enterBtn   = document.getElementById('enter-btn');
  var toggle     = document.getElementById('audio-toggle');
  var confirmMsg = document.getElementById('audio-confirm');
  var splash     = document.getElementById('splash');

  var STORAGE_KEY = 'ifwm_audio_playing';

  /* ---------- Enter: play audio, fade splash, unlock scroll ---------- */
  function enterSite() {
    audio.volume = 0.6;

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          sessionStorage.setItem(STORAGE_KEY, 'true');
          toggle.hidden = false;
          confirmMsg.hidden = false;
        })
        .catch(function (err) {
          // Audio failed (missing file, blocked autoplay, etc.)
          // Still enter the site — just without sound.
          console.warn('Audio could not play:', err);
          confirmMsg.hidden = false;
          confirmMsg.textContent = 'Audio unavailable — entering without sound.';
        });
    }

    // Fade out splash and unlock scroll regardless of audio outcome
    splash.classList.add('is-hidden');
    document.body.classList.remove('is-locked');

    // Focus the first nav link so keyboard users land somewhere sensible
    var firstNav = document.querySelector('.nav-link');
    if (firstNav) firstNav.focus();
  }

  enterBtn.addEventListener('click', enterSite);

  // Keyboard: Enter or Space on the splash also enters
  splash.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enterSite();
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

  /* ---------- If audio was already playing before reload ---------- */
  if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
    toggle.hidden = false;
  }
})();