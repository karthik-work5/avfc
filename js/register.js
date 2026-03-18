/*
  ═══════════════════════════════════════════════════════
  AVFC CRICKET LEAGUE — Register Page JS  (js/register.js)
  ═══════════════════════════════════════════════════════
*/

function handleSubmit(e) {
  e.preventDefault();
  const required = ['fname','lname','age','city','phone','email','role','batting'];
  let firstInvalid = null;

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add('error');
      el.addEventListener('input', () => el.classList.remove('error'), { once: true });
      if (!firstInvalid) firstInvalid = el;
    }
  });

  if (firstInvalid) { firstInvalid.focus(); return; }

  /* Show success screen */
  document.getElementById('regForm').style.display = 'none';
  document.getElementById('successScreen').classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateFileLabel(input) {
  document.getElementById('file-name').textContent =
    input.files[0] ? input.files[0].name : 'Tap to upload your photo';
}
