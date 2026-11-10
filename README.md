# Index for Working Musik — Website

Static site for the band Index for Working Musik.

## Current state

Splash page only (`index.html`). Clicking "Enter" starts the background
audio. Navigation to a home page is not yet wired — that comes next.

## Folders

- `css/` — stylesheet(s)
- `js/` — scripts
- `audio/` — background music (add your `track.mp3` here)
- `images/` — background and artwork (add your `landing-bg.jpg` here)

## Adding your own assets

1. Put your background image in `images/` and name it `landing-bg.jpg`
   (or edit the filename in `css/style.css`, under `.splash-bg`).
2. Put your audio file in `audio/` and name it `track.mp3`
   (or edit the filename in `index.html`, in the `<audio>` element).

Both are placeholders at present. The page will still load without them,
but the audio alert will tell you the track is missing.

## Publishing

See `GITHUB-DESKTOP-GUIDE.md` for step-by-step instructions.