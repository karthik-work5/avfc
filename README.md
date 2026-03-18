AVFC CRICKET LEAGUE — Project Files
=====================================

FOLDER STRUCTURE
─────────────────
avfc/
├── index.html              ← Main website (open this in browser)
├── register.html           ← Registration page
│
├── css/
│   ├── style.css           ← Main site styles
│   └── register.css        ← Register page styles
│
├── js/
│   ├── main.js             ← Hamburger menu + video interstitial
│   └── register.js         ← Form validation + success screen
│
├── images/
│   ├── sponsors/           ← PUT SPONSOR PHOTOS HERE
│   │   ├── rajesh-kumar.jpg
│   │   ├── priya-sharma.jpg
│   │   ├── anil-verma.jpg
│   │   └── suresh-reddy.jpg
│   └── organisers/         ← PUT ORGANISER PHOTOS HERE
│       ├── mohan-naidu.jpg
│       ├── deepa-krishnan.jpg
│       ├── arjun-bhat.jpg
│       └── sneha-pillai.jpg
│
└── videos/                 ← PUT SPONSOR VIDEOS HERE
    ├── YOUR_VIDEO_1.mp4
    ├── YOUR_VIDEO_2.mp4
    ├── YOUR_VIDEO_3.mp4
    ├── YOUR_VIDEO_4.mp4
    └── YOUR_VIDEO_5.mp4


HOW TO ADD PHOTOS
──────────────────
1. Prepare your photo: square crop, 300×300px minimum, JPG or WebP
2. Save it in the correct folder (images/sponsors/ or images/organisers/)
3. Open index.html and find the person's card
4. Replace the initials with an <img> tag:

   BEFORE:
     <div class="sponsor-photo">
       RK
     </div>

   AFTER:
     <div class="sponsor-photo">
       <img src="images/sponsors/rajesh-kumar.jpg" alt="Rajesh Kumar">
     </div>

   The CSS automatically crops it into a perfect circle.
   object-position: top center — so the face is always centred.


HOW TO ADD VIDEOS
──────────────────
1. Save your 5 MP4 files in the videos/ folder
2. Open js/main.js
3. Find the SPONSOR_VIDEOS array (around line 20)
4. Replace each src value:

   { src: 'videos/rk-enterprises.mp4', sponsor: 'RK Enterprises' },
   { src: 'videos/sharma-motors.mp4',  sponsor: 'Sharma Motors'  },
   ... and so on


HOW TO OPEN LOCALLY
────────────────────
• Just double-click index.html — it opens in your browser.
• Videos will only play if you run a local server (e.g. VS Code Live Server).
  For everything else (fonts, photos, styles) a simple file open works fine.


CUSTOMISING CONTENT
────────────────────
• Change tournament name   → index.html, line 8 (<title>) and nav logo
• Change dates/prize pool  → index.html, hero stats section
• Change sponsor names     → index.html, sponsors section
• Change organiser emails  → index.html, organisers section
• Change registration date → index.html, cta-deadline + register.html sidebar
