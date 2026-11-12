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
        '<section class="panel scrapbook">' +
          '<h2 class="section-title">Press & Reviews</h2>' +
          
          // 1. The Mojo Quote
          '<blockquote>' +
            '"Index often aurally conjure the clanging and droning of early-\'90s alt-guitar legends Pavement and My Bloody Valentine, sometimes topped with doubly disorientating loops, while the acoustic-strumming imagines Fat White Family fronted by a scabrous Leonard Cohen."' +
            '<cite>— Mojo</cite>' +
          '</blockquote>' +

          // 2. Shindig Review
          '<h3>Shindig Magazine (8/10)</h3>' +
          '<p>Index For Working Musik were allegedly inspired by sacred and profane photos and words on Christian hermits found in a piss-stained Spanish alley. The Londoners\' ritualistic second album offers arcane, post-industrial Anglicana, with guitars as its sacrament. Pestilent, fly-buzz strings drone through "Thursday\'s Bells" and flickering, Gamma-ray pulses irradiate "Halb Liebe I". Eight-minute centrepiece "Purple Born" conjures a recognisable England of poverty, paranoia, whispered hate and irrational love.</p>' +
          '<img class="press-clipping" src="images/press-clipping-2.jpg" alt="Shindig Review">' +

          // 3. The Guardian Quote
          '<blockquote>' +
            '"A brilliant, haunting set of recordings, lurking between hypnotic space rock and creaking post-rock instrumentals."' +
            '<cite>— The Guardian</cite>' +
          '</blockquote>' +

          // 4. Louder Than War Review
          '<h3>Louder Than War</h3>' +
          '<p>It\'s become a bit of a cliché to talk about "lockdown albums". All too easy to interpret the sounds of any record made over the past three years as being tense and "claustrophobic" as a result of all that time spent cocooned indoors. But here\'s a record where that literally is true.</p>' +
          '<p>A strange psychic brew built of imagined mysticism and domestic realities, of fever dreams and days that stretched into weeks and months. It sounds best on headphones in the dark. All that\'s missing is a surprise visit from Valerie Solanas.</p>' +
          '<cite style="display:block; margin-top:-1rem; margin-bottom: 2rem; font-size: 0.85rem; color: rgba(255,255,255,0.7); text-transform: uppercase;">— Tim Cooper, Louder Than War</cite>' +
          
          // 5. The Clipping - Uncut Feature
          '<img class="press-clipping" src="images/press-clipping-1.jpg" alt="Uncut Feature">' +

          // 6. Tim Cooper Quote
          '<blockquote>' +
            '"It\'s original and atmospheric stuff that sounds like something that might have been recorded in The Factory and discovered decades later in a dusty corner of Warhol\'s archive."' +
            '<cite>— Tim Cooper</cite>' +
          '</blockquote>' +

          // 7. Babystep / Musosguide Live Quotes
          '<h3>Live: The Bunker & Beyond</h3>' +
          '<p>"There was something profoundly unsettling and weird about these lot, just the way we like it. The double bass playing throughout was like watching throats played throughout a slasher pic, slashidy slash slash, the horse hairs peeled and broke away from their taut housing. No going back now. It took at least a full five seconds for us to realise the band had left the stage and for reality to set back in."</p>' +
          '<cite style="display:block; margin-top:-1rem; margin-bottom: 2rem; font-size: 0.85rem; color: rgba(255,255,255,0.7); text-transform: uppercase;">— Captain Stavros, Musosguide</cite>' +
          
          '<p>"An enduring vampire-esque aesthetic, enriched by decadent themes that are reminiscent of movements from the beat generation, to the avant-garde proto-punk of The Velvet Underground."</p>' +
          '<cite style="display:block; margin-top:-1rem; margin-bottom: 2rem; font-size: 0.85rem; color: rgba(255,255,255,0.7); text-transform: uppercase;">— Alex Dallas, Babystep Magazine</cite>' +

          // 8. The Clipping - Uncut Review
          '<img class="press-clipping" src="images/press-clipping-3.jpg" alt="Uncut Review">' +

          // 9. Song Bar Quote
          '<blockquote>' +
            '"Mysterious, enigmatic, slightly disturbing, often using unusual chord progressions and darker, more dissonant scales and melodies, they\'re a mesmeric, atypical listen. Fantastically inventive, stylishly strange, experimental post-punk."' +
            '<cite>— Song Bar</cite>' +
          '</blockquote>' +

          // 10. Tom Lax Review
          '<h3>Tom Lax (Siltbreeze)</h3>' +
          '<p>In this post Sounds world, the boundaries of Post Punk have not only broadened but splintered. And over the course of (now) four releases, Index For Working Musik have seen to using the sprawling boundaries to great effect, flexing a polyglot of styles to convey the language of the moment.</p>' +
          '<p>On Which Direction Goes The Beam, the murky, distant ambience that was 2023\'s Indexé has been fleshed out, incorporating everything from the Brian Aldiss laced, ground lightning shudder of Dome, to the chamber-like arrangements of This Kind Of Punishment. There\'s even a candle flickering in the window for Think Fellers Union Local 282 that warmed these ears. And if you\'re a fan of the great Dutch band, Trespassers W (who isn\'t?), the collective consciousness IFWM enunciates on here is a similar testament of a band growing more sure footed in the pursuit of not only knowing all the ways in, but carving a few of their own on the way out. And it\'s discerning releases like Which Direction Goes The Beam that keep us in the hunt. Long may they forge.</p>' +

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
    if (name === 'press') {
      content.classList.add('press-active');
    } else {
      content.classList.remove('press-active');
    }

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