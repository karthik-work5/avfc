/*
  ═══════════════════════════════════════════════════════
  AVFC CRICKET LEAGUE — Main JS  (js/main.js)
  ═══════════════════════════════════════════════════════
*/

/* ── Hamburger menu ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mainNav    = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* Close on outside tap */
document.addEventListener('click', e => {
  if (!mainNav.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
});

/* ═══════════════════════════════════════════════════════════════
   VIDEO INTERSTITIAL

   ADD YOUR 5 SPONSOR VIDEOS HERE
   ───────────────────────────────
   Replace each src with the path to your video file.
   Files should be placed in:  avfc/videos/
   Recommended format: MP4 (H.264), 720p, under 10MB each

   Example:
     { src: 'videos/rk-enterprises.mp4',   sponsor: 'RK Enterprises'    },
     { src: 'videos/sharma-motors.mp4',     sponsor: 'Sharma Motors'     },
═══════════════════════════════════════════════════════════════ */
const SPONSOR_VIDEOS = [
  { src: 'videos/demo.mp4', sponsor: 'AVFC'    }, /* ← REPLACE */
  // { src: 'videos/demo.mp4', sponsor: 'Sharma Motors'     }, /* ← REPLACE */
  // { src: 'videos/demo.mp4', sponsor: 'Verma Steel Works' }, /* ← REPLACE */
  // { src: 'videos/demo.mp4', sponsor: 'Reddy & Sons'      }, /* ← REPLACE */
  // { src: 'videos/demo.mp4', sponsor: 'AVFC Partner'      }, /* ← REPLACE */
];

const SKIP_AFTER_SECONDS = 5; /* seconds before skip button activates */

/* ── State ── */
let skipTimer = null, progTimer = null, countdown = SKIP_AFTER_SECONDS;

const overlay      = document.getElementById('videoOverlay');
const video        = document.getElementById('sponsorVideo');
const skipBtn      = document.getElementById('voSkip');
const skipCd       = document.getElementById('skipCountdown');
const sponsorTag   = document.getElementById('voSponsorTag');
const progressFill = document.getElementById('voProgressFill');

function openVideoOverlay() {
  const pick = SPONSOR_VIDEOS[Math.floor(Math.random() * SPONSOR_VIDEOS.length)];
  video.src = pick.src;
  sponsorTag.textContent = pick.sponsor;

  /* Lock skip for N seconds */
  // countdown = SKIP_AFTER_SECONDS;
  // skipBtn.classList.add('locked');
  // skipCd.textContent = '(' + countdown + ')';
  // skipTimer = setInterval(() => {
  //   countdown--;
  //   if (countdown <= 0) {
  //     clearInterval(skipTimer);
  //     skipBtn.classList.remove('locked');
  //     skipCd.textContent = '';
  //   } else {
  //     skipCd.textContent = '(' + countdown + ')';
  //   }
  // }, 1000);

  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  video.muted = false;
  video.load();
  video.play().catch(() => {});
  progTimer = setInterval(updateProgress, 100);
  video.onended = () => goToRegister();
}

function updateProgress() {
  if (!video.duration) return;
  progressFill.style.width = (video.currentTime / video.duration * 100) + '%';
}

function goToRegister() {
  clearInterval(skipTimer);
  clearInterval(progTimer);
  video.pause();
  window.location.href = 'register.html';
}

function toggleMute() {
  video.muted = !video.muted;
  document.getElementById('iconUnmute').style.display = video.muted ? 'none' : '';
  document.getElementById('iconMute').style.display   = video.muted ? ''     : 'none';
}

/* Intercept all "Register" link/button clicks */
document.addEventListener('click', e => {
  const el = e.target.closest('a, button');
  if (!el) return;
  const href = el.getAttribute('href') || '';
  const text = el.textContent.trim().toLowerCase();
  if (href === 'register.html' || text.includes('register')) {
    e.preventDefault();
    closeMenu();
    openVideoOverlay();
  }
});

function loadRegCount() {
  fetch(CONFIG.APPS_SCRIPT_URL)
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById('regCount');
      if (!el || typeof data.count !== 'number') return;

      const newText = data.count + '/100';

      if (el.textContent !== newText) {
        el.style.transition = 'opacity 0.3s';
        el.style.opacity    = '0';
        setTimeout(() => {
          el.textContent   = newText;
          el.style.opacity = '1';
        }, 300);
      }
    })
    .catch(err => {
      console.log('Count fetch failed:', err);
    });
}

loadRegCount();
setInterval(loadRegCount, 10000);