(function () {
  'use strict';

  var sections = {
    home: {
      bg: 'images/home-bg.jpg',
      html:
        '<section class="panel">' +
          '<h1 class="band-name">Index for Working Musik</h1>' +
          '<div class="news-box">' +
            '<h2>Latest News</h2>' +
            '<p>Bunker Intimations II is out now on Tough Love. ' +
            'Listen on Bandcamp.</p>' +
          '</div>' +
        '</section>'
    },
discography: {
      bg: 'images/discography-bg.jpg',
      html:
        '<section class="panel">' +
          '<h2>Discography</h2>' +
          '<div class="release-grid">' +
            
            // 1. Bunker Intimations II
            '<div class="release-item">' +
              '<a href="https://indexforworkingmusik.bandcamp.com/album/bunker-intimations-ii" target="_blank" rel="noopener">' +
                '<img src="images/bunker-ii.jpg" alt="Bunker Intimations II">' +
                '<span>Bunker Intimations II</span>' +
              '</a>' +
              '<div class="streaming-links">' +
                '<a href="https://open.spotify.com/album/7LBK4WbFjt5k62AdPawgHr" target="_blank" rel="noopener">Spotify</a> | ' +
                '<a href="https://music.apple.com/gb/album/bunker-intimations-ii/6796131094" target="_blank" rel="noopener">Apple Music</a>' +
              '</div>' +
            '</div>' +

            // 2. Which Direction Goes The Beam
            '<div class="release-item">' +
              '<a href="https://indexforworkingmusik.bandcamp.com/album/which-direction-goes-the-beam" target="_blank" rel="noopener">' +
                '<img src="images/beam.jpg" alt="Which Direction Goes The Beam">' +
                '<span>Which Direction Goes The Beam</span>' +
              '</a>' +
              '<div class="streaming-links">' +
                '<a href="https://open.spotify.com/album/7e1MOBMZnsXpKsloJE7APZ" target="_blank" rel="noopener">Spotify</a> | ' +
                '<a href="https://music.apple.com/gb/album/which-direction-goes-the-beam/6796131468" target="_blank" rel="noopener">Apple Music</a>' +
              '</div>' +
            '</div>' +

            // 3. Purple Born
            '<div class="release-item">' +
              '<a href="https://indexforworkingmusik.bandcamp.com/album/purple-born" target="_blank" rel="noopener">' +
                '<img src="images/purple-born.jpg" alt="Purple Born">' +
                '<span>Purple Born</span>' +
              '</a>' +
              '<div class="streaming-links">' +
                '<a href="https://open.spotify.com/album/3Joz8cHSSMd6u1B6vlmQGS" target="_blank" rel="noopener">Spotify</a> | ' +
                '<a href="https://music.apple.com/gb/album/purple-born-single/6796129687" target="_blank" rel="noopener">Apple Music</a>' +
              '</div>' +
            '</div>' +

            // 4. Indexe'e
            '<div class="release-item">' +
              '<a href="https://indexforworkingmusik.bandcamp.com/album/indexee" target="_blank" rel="noopener">' +
                '<img src="images/indexee.jpg" alt="Indexe&#39;e">' +
                '<span>Indexe&#39;e</span>' +
              '</a>' +
              '<div class="streaming-links">' +
                '<a href="https://open.spotify.com/album/5PqQcVotKIi6tsAqFdwFLK" target="_blank" rel="noopener">Spotify</a> | ' +
                '<a href="https://music.apple.com/gb/album/indexee/6796125361" target="_blank" rel="noopener">Apple Music</a>' +
              '</div>' +
            '</div>' +

            // 5. Dragging the Needlework...
            '<div class="release-item">' +
              '<a href="https://indexforworkingmusik.bandcamp.com/album/dragging-the-needlework-for-the-kids-at-uphole" target="_blank" rel="noopener">' +
                '<img src="images/needlework.jpg" alt="Dragging the Needlework for The Kids at Uphole">' +
                '<span>Dragging the Needlework for The Kids at Uphole</span>' +
              '</a>' +
              '<div class="streaming-links">' +
                '<a href="https://open.spotify.com/album/3dwvOpGOM3Qpkc3ANaalI0" target="_blank" rel="noopener">Spotify</a> | ' +
                '<a href="https://music.apple.com/gb/album/dragging-the-needlework-for-the-kids-at-uphole/6796128035" target="_blank" rel="noopener">Apple Music</a>' +
              '</div>' +
            '</div>' +

          '</div>' +
        '</section>'
    },    press: {
      bg: 'images/press-bg.jpg',
      html:
        '<section class="panel">' +
          '<h2>Press</h2>' +
          '<p class="placeholder">Reviews and quotes coming soon.</p>' +
        '</section>'
    },
    contact: {
      bg: 'images/contact-bg.jpg',
      html:
        '<section class="panel">' +
          '<h2>Contact</h2>' +
          '<p class="placeholder">Mailing list sign-up coming soon.</p>' +
          '<p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>' +
        '</section>'
    },
    game: {
      bg: 'images/game-bg.jpg',
      html:
        '<section class="panel">' +
          '<h2>Game</h2>' +
          '<p class="placeholder">Coming soon.</p>' +
        '</section>'
    }
  };

  var content = document.getElementById('content');
  var bgLayer = document.getElementById('section-bg');
  var navLinks = document.querySelectorAll('.nav-link');

  function showSection(name) {
    var section = sections[name];
    if (!section) return;

    content.innerHTML = section.html;

    bgLayer.className = 'section-bg';
    if (section.bg) {
      bgLayer.classList.add(name + '-bg');
    }

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-section') === name);
    });

    sessionStorage.setItem('ifwm_section', name);
    history.replaceState(null, '', '#' + name);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showSection(link.getAttribute('data-section'));
    });
  });

  var initial =
    (location.hash && location.hash.slice(1)) ||
    sessionStorage.getItem('ifwm_section') ||
    'home';

  showSection(initial);

  window.showSection = showSection;
})();