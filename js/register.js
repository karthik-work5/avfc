/*
  ═══════════════════════════════════════════════════════════════
  AVFC CRICKET LEAGUE — Register Page JS  (js/register.js)
  ═══════════════════════════════════════════════════════════════
*/

const APPS_SCRIPT_URL = CONFIG.APPS_SCRIPT_URL;

let isSubmitting = false;

function handleSubmit(e) {
  e.preventDefault();

  if (isSubmitting) return;

  /* ── Validate required fields ── */
  const required = ['fname', 'lname', 'age', 'city', 'phone', 'prev_avfc', 'role'];
  let firstInvalid = null;

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      el.classList.add('error');
      el.style.borderColor = '#C0392B';
      el.addEventListener('change', () => {
        el.classList.remove('error');
        el.style.borderColor = '';
      }, { once: true });
      el.addEventListener('input', () => {
        el.classList.remove('error');
        el.style.borderColor = '';
      }, { once: true });
      if (!firstInvalid) firstInvalid = el;
    }
  });

  /* ── Validate photo ── */
  const photo    = document.getElementById('photo');
  const fileWrap = document.querySelector('.file-input-wrap');

  if (!photo.files || photo.files.length === 0) {
    fileWrap.style.borderColor = '#C0392B';
    document.getElementById('file-name').textContent = 'Please select a photo';
    if (!firstInvalid) firstInvalid = photo;
  } else if (photo.files[0].size > 10 * 1024 * 1024) {
    fileWrap.style.borderColor = '#C0392B';
    document.getElementById('file-name').textContent = 'Photo too large — please choose under 10MB';
    if (!firstInvalid) firstInvalid = photo;
  }

  if (firstInvalid) {
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  /* ── Lock submission immediately ── */
  const btn    = document.querySelector('.submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Submitting…';
  isSubmitting    = true;

  /* ── Read photo ── */
  const file   = photo.files[0];
  const fname  = document.getElementById('fname').value.trim();
  const lname  = document.getElementById('lname').value.trim();
  const reader = new FileReader();

  reader.onload = function(event) {
    const img  = new Image();

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

      /* ── Send with timeout ── */
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 30000)
      );

      Promise.race([
        fetch(APPS_SCRIPT_URL, {
          method : 'POST',
          mode   : 'no-cors',
          body   : JSON.stringify(payload),
        }),
        timeout
      ])
      .then(() => {
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('successScreen').classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((err) => {
        isSubmitting    = false;
        btn.textContent = 'Submit Registration →';
        btn.disabled    = false;
        if (err.message === 'timeout') {
          alert('Request timed out. Please check your connection and try again.');
        } else {
          alert('Something went wrong. Please try again.');
        }
      });
    };

    img.onerror = function() {
      isSubmitting    = false;
      btn.textContent = 'Submit Registration →';
      btn.disabled    = false;
      alert('Could not read the photo. Please choose a different image.');
    };

    img.src = event.target.result;
  };

  reader.onerror = function() {
    isSubmitting    = false;
    btn.textContent = 'Submit Registration →';
    btn.disabled    = false;
    alert('Could not read the photo. Please try again.');
  };

  reader.readAsDataURL(file);
}

function updateFileLabel(input) {
  document.querySelector('.file-input-wrap').style.borderColor = '';
  document.getElementById('file-name').textContent =
    input.files[0] ? input.files[0].name : 'Tap to upload your photo';
}
