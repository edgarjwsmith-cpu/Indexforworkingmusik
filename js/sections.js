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
            '<a class="release" href="https://indexforworkingmusik.bandcamp.com/music">' +
              '<img src="images/bunker-ii.jpg" alt="Bunker Intimations II">' +
              '<span>Bunker Intimations II</span></a>' +
            '<a class="release" href="https://indexforworkingmusik.bandcamp.com/music">' +
              '<img src="images/beam.jpg" alt="Which Direction Goes The Beam">' +
              '<span>Which Direction Goes The Beam</span></a>' +
            '<a class="release" href="https://indexforworkingmusik.bandcamp.com/music">' +
              '<img src="images/purple-born.jpg" alt="Purple Born">' +
              '<span>Purple Born</span></a>' +
            '<a class="release" href="https://indexforworkingmusik.bandcamp.com/music">' +
              '<img src="images/indexee.jpg" alt="Indexe&#39;e">' +
              '<span>Indexe&#39;e</span></a>' +
            '<a class="release" href="https://indexforworkingmusik.bandcamp.com/music">' +
              '<img src="images/needlework.jpg" alt="Dragging the Needlework for The Kids at Uphole">' +
              '<span>Dragging the Needlework for The Kids at Uphole</span></a>' +
          '</div>' +
        '</section>'
    },
    press: {
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

    if (section.bg) {
      bgLayer.style.backgroundImage = 'url("' + section.bg + '")';
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