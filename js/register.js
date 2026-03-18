/*
  ═══════════════════════════════════════════════════════════════
  AVFC CRICKET LEAGUE — Register Page JS  (js/register.js)
  ═══════════════════════════════════════════════════════════════
*/

const APPS_SCRIPT_URL = CONFIG.APPS_SCRIPT_URL;
let isSubmitting = false; /* ← prevents double submit */

/* ════════════════════════════════════════
   SUBMIT HANDLER
════════════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();

  /* ── Block if already submitting ── */
  if (isSubmitting) return;

  /* ── Validate required fields ── */
  const required = ['fname', 'lname', 'age', 'city', 'phone', 'prev_avfc', 'role'];
  let firstInvalid = null;

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      el.classList.add('error');
      el.addEventListener('input', () => el.classList.remove('error'), { once: true });
      if (!firstInvalid) firstInvalid = el;
    }
  });

  /* ── Validate photo ── */
  const photo    = document.getElementById('photo');
  const fileWrap = document.querySelector('.file-input-wrap');
  if (!photo.files || photo.files.length === 0) {
    fileWrap.style.borderColor = '#C0392B';
    if (!firstInvalid) firstInvalid = photo;
  }

  if (firstInvalid) { firstInvalid.focus(); return; }

  /* ── Lock submission ── */
  isSubmitting = true;
  const btn    = document.querySelector('.submit-btn');
  btn.textContent = 'Submitting…';
  btn.disabled    = true;

  /* ── Read and compress photo, then submit ── */
  const file   = photo.files[0];
  const fname  = document.getElementById('fname').value.trim();
  const lname  = document.getElementById('lname').value.trim();
  const reader = new FileReader();

  /* Only assign onload once */
  reader.onload = function(event) {
    const img    = new Image();

    img.onload = function() {
      /* ── Compress image ── */
      const canvas  = document.createElement('canvas');
      const maxSize = 800;
      let width     = img.width;
      let height    = img.height;

      if (width > height && width > maxSize) {
        height = Math.round(height * maxSize / width);
        width  = maxSize;
      } else if (height > maxSize) {
        width  = Math.round(width * maxSize / height);
        height = maxSize;
      }

      canvas.width  = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);

      const compressed = canvas.toDataURL('image/jpeg', 0.7);
      const base64     = compressed.split(',')[1];
      const fileName   = fname + '_' + lname + '.jpg';

      /* ── Build payload ── */
      const payload = {
        fname        : fname,
        lname        : lname,
        age          : document.getElementById('age').value.trim(),
        city         : document.getElementById('city').value.trim(),
        phone        : document.getElementById('phone').value.trim(),
        prev_avfc    : document.getElementById('prev_avfc').value.trim(),
        role         : document.getElementById('role').value.trim(),
        photo_base64 : base64,
        photo_name   : fileName,
      };

      /* ── Send to Apps Script ── */
      fetch(APPS_SCRIPT_URL, {
        method : 'POST',
        mode   : 'no-cors',
        body   : JSON.stringify(payload),
      })
      .then(() => {
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('successScreen').classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(() => {
        isSubmitting    = false;
        btn.textContent = 'Submit Registration →';
        btn.disabled    = false;
        alert('Something went wrong. Please check your connection and try again.');
      });
    };

    img.src = event.target.result;
  };

  /* ── Start reading — only called once ── */
  reader.readAsDataURL(file);
}

/* ════════════════════════════════════════
   FILE LABEL UPDATE
════════════════════════════════════════ */
function updateFileLabel(input) {
  document.querySelector('.file-input-wrap').style.borderColor = '';
  document.getElementById('file-name').textContent =
    input.files[0] ? input.files[0].name : 'Tap to upload your photo';
}