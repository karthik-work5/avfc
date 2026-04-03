/*
  ═══════════════════════════════════════════════════════════════
  AVFC CRICKET LEAGUE — Players JS
  Updated: Grade + Local Images (fn_ln format)
  ═══════════════════════════════════════════════════════════════
*/

const PLAYERS = [
  { fn: 'Ramarao', ln: 'Suggula', place: 'Vijayawada', grade: 'B+' },
  { fn: 'ACP', ln: 'Deepak', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Sravan tej', ln: 'Buragadda', place: 'Vijayawada', grade: 'A' },
  { fn: 'S v Kishore Kumar', ln: 'Sri ram', place: 'Vijayawada', grade: 'B' },
  { fn: 'Manikantha', ln: 'Grandhi', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Dinesh', ln: 'perumalla', place: 'Vijayawada', grade: 'A' },
  { fn: 'Santosh', ln: 'Kumar G', place: 'Vijayawada', grade: 'B' },
  { fn: 'Doondeswar', ln: 'Alapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Jagadish kumar', ln: 'Chandolu', place: 'Vijayawada', grade: 'B' },
  { fn: 'Naga pavan', ln: 'Kumar', place: 'Vijayawada', grade: 'A' },
  { fn: 'Rohit', ln: 'Pallapothu', place: 'Vijayawada', grade: 'B' },
  { fn: 'Sameer', ln: 'Akula', place: 'Vijayawada', grade: 'A' },
  { fn: 'Kabalavai Chiranjeevi', ln: 'Dinesh', place: 'Vijayawada', grade: 'B' },
  { fn: 'HARSHA VARDHAN', ln: 'GONUGUNTLA', place: 'VIJAYAWADA', grade: 'B+' },
  { fn: 'Prudhvi', ln: 'Raju', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Venkatesh', ln: 'Vajanepalli', place: 'Vijayawada', grade: 'B' },
  { fn: 'Vinod', ln: 'Kumar', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Nagavenkatesh', ln: 'Sriram', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Pavan', ln: 'Padmanabhuni', place: 'Guntur', grade: 'B+' },
  { fn: 'Karthikeya', ln: 'Tondepu', place: 'Vijayawada', grade: 'B+' },
  { fn: 'KIRITI', ln: 'SARANAM', place: 'VIJAYAWADA', grade: 'A' },
  { fn: 'Chunduru', ln: 'Shanmukha', place: 'Vijayawada', grade: 'B' },
  { fn: 'Sasikanth', ln: 'Kurnala', place: 'Vijayawada', grade: 'B' },
  { fn: 'Nikhil', ln: 'Garlapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Sundeep', ln: 'Uppala', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Jithendra', ln: 'Kumar', place: 'Hyderabad', grade: 'B+' },
  { fn: 'Sravan', ln: 'Paluvadi', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Vinay', ln: 'Alapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Satya', ln: 'Peruri', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Praveen', ln: 'Namburu', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Kolipakula Anil', ln: 'Kumar', place: 'Vijayawada', grade: 'B' },
  { fn: 'Krishna vihar', ln: 'Chaluvadi', place: 'Vijayawada', grade: 'A' },
  { fn: 'Harsha', ln: 'Challa', place: 'Vijayawada', grade: 'B' },
  { fn: 'Satya', ln: 'Vinod', place: 'Vijayawada', grade: 'B' },
  { fn: 'Maddu', ln: 'Ramakrishna', place: 'Guntur', grade: 'B+' },
  { fn: 'Swami', ln: 'B', place: 'Vijayawada', grade: 'A' },
  { fn: 'Siva', ln: 'Kumar', place: 'Vijayawada', grade: 'B' },
  { fn: 'Karthikeya', ln: 'Atmakuri', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Ajay Murari Krish', ln: 'Chandrupatla', place: 'VIJAYAWADA', grade: 'B+' },
  { fn: 'sri hari', ln: 'Nandipati', place: 'vijayawada', grade: 'B+' },
  { fn: 'Vineel', ln: 'Bolisetty', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Varadarajulu', ln: 'Alapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'RAGHAVENDRA', ln: 'DHOOPAGUNTLA', place: 'Vijayawada', grade: 'B' },
  { fn: 'Karthik Pavan Kumar', ln: 'Vutukuri', place: 'Vijayawada', grade: 'B' },
  { fn: 'Manoj', ln: 'Kumar', place: 'Vijayawada', grade: 'B' },
  { fn: 'Bharadwaj', ln: 'Potturu', place: 'Vijayawada', grade: 'B+' },
  { fn: 'mahesh', ln: 'sriram', place: 'Vijayawada', grade: 'B' },
  { fn: 'Siva Venkata Datta', ln: 'Sanka', place: 'Vijayawada', grade: 'A' },
  { fn: 'Prudhvi', ln: 'Kota', place: 'Vijayawada', grade: 'A' },
  { fn: 'Venkatesh', ln: 'Maddala', place: 'Vijayawada', grade: 'B' },
  { fn: 'Pramod', ln: 'Chakravarthy', place: 'Guntur', grade: 'B+' },
  { fn: 'Ravikumar', ln: 'Chandaluru', place: 'Vijayawada', grade: 'B' },
  { fn: 'Sagar', ln: 'Kambhampati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'ANIL', ln: 'EMMADISETTY', place: 'GUNTUR', grade: 'B+' },
  { fn: 'AJAY', ln: 'KANAMARLAPUDI', place: 'GUNTUR', grade: 'B+' },
  { fn: 'Krishna chaitanya', ln: 'Pothuru', place: 'Guntur', grade: 'B+' },
  { fn: 'Naveen Kumar', ln: 'Sriram', place: 'Vijayawada', grade: 'B' },
  { fn: 'Vijay Kumar', ln: 'Kanamarlapudi', place: 'GUNTUR', grade: 'B+' },
  { fn: 'Vijay', ln: 'Rajiv', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Jaswanth', ln: 'Sama', place: 'Vijayawada', grade: 'B' },
  { fn: 'Kuldeep', ln: 'Golla', place: 'Vijayawada', grade: 'B' },
  { fn: 'Sunil kumar Chata', ln: 'kundu', place: 'Guntur', grade: 'A' },
  { fn: 'kaushik', ln: 'Polisetty', place: 'GUNTUR', grade: 'B+' },
  { fn: 'Naga prasad', ln: 'Vakkalagadda', place: 'Vijayawada', grade: 'B' },
  { fn: 'Shiva Krishna', ln: 'Kasetty', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Chandan', ln: 'Paruchuri', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Rajesh', ln: 'Khande', place: 'Guntur', grade: 'A' },
  { fn: 'Sandeep', ln: 'Namburu', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Sandeep', ln: 'B', place: 'Guntur', grade: 'B+' },
  { fn: 'Nithin', ln: 'Chitturi', place: 'Vijayawada', grade: 'A' },
  { fn: 'Akhil vishnu', ln: 'M', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Pravesh', ln: 'Gajavalli', place: 'Vijayawada', grade: 'B' },
  { fn: 'MADDI ESWAR', ln: 'ANIL', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Chitturi', ln: 'Nikhil', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Sai prudhvi', ln: 'Kesanapalli', place: 'Vijayawada', grade: 'B' },
  { fn: 'Surendra', ln: 'G', place: 'Mopidevi', grade: 'B+' },
  { fn: 'Kashyap', ln: 'Bhavirisetty', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Alapati', ln: 'Vishal', place: 'Vijayawada', grade: 'B' },
  { fn: 'JITHENDRA', ln: 'ATTULURI', place: 'VIJAYAWADA', grade: 'A' },
  { fn: 'Nikhil kumar', ln: 'Kasula', place: 'Vijayawada', grade: 'A' },
  { fn: 'Sunil', ln: 'Garlapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Rama', ln: 'Rohit', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Pavankumar', ln: 'Sanagapalli', place: 'Vijayawada', grade: 'B' },
  { fn: 'Tavva', ln: 'Prudhvith', place: 'Vijayawada', grade: 'A' },
  { fn: 'arun sampath', ln: 'Kanigalla', place: 'Vijayawada', grade: 'B' },
  { fn: 'Namburu', ln: 'Kiran', place: 'Vijayawada', grade: 'A' },
  { fn: 'RK', ln: 'Nalam', place: 'Vijayawada', grade: 'A' },
  { fn: 'sridhar', ln: 'tavva', place: 'Vijayawada', grade: 'B' },
  { fn: 'Jwala Avinash', ln: 'Vuppala', place: 'Vijayawada', grade: 'A' },
  { fn: 'Ramanuja', ln: 'Nandipati', place: 'vijayawada', grade: 'B+' },
  { fn: 'Dileep', ln: 'Namburu', place: 'Vijayawada', grade: 'B' },
  { fn: 'Mohan', ln: 'Krishna', place: 'Vijayawada', grade: 'B' },
  { fn: 'Bhargav', ln: 'G', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Pavan', ln: 'Bharat', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Santosh', ln: 'Vakkalagadda', place: 'Vijayawada', grade: 'B' },
  { fn: 'Thiriveedhi', ln: 'Satya', place: 'Vijayawada', grade: 'B' },
  { fn: 'Koushalendra', ln: 'Bayyana', place: 'Vijayawada', grade: 'B' },
  { fn: 'Krishna', ln: 'Alapati', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Harshadeep', ln: 'Buragadda', place: 'Vijayawada', grade: 'B' },
  { fn: 'Shanmuk', ln: '', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Ganesh', ln: 'Suprateek', place: 'Vijayawada', grade: 'B' },
  { fn: 'Manoj', ln: '', place: 'Vijayawada', grade: 'B' },
  { fn: 'Rama', ln: '', place: 'Vijayawada', grade: 'B' },
  { fn: 'Neehar', ln: 'Chinnam', place: 'Vijayawada', grade: 'B' },
  { fn: 'Sujay', ln: 'Tammana', place: 'Vijayawada', grade: 'A' },
  { fn: 'Avinash', ln: '', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Naga anil kumar', ln: 'K', place: 'Vijayawada', grade: 'A' },
  { fn: 'harinath', ln: 'K', place: 'Vijayawada', grade: 'B+' },
  { fn: 'Akash', ln: 'Vemu', place: 'Vijayawada', grade: 'B' },
  { fn: 'kiriti', ln: 'T', place: 'Vijayawada', grade: 'B' },
  { fn: 'Manohar', ln: 'Tummalapenta', place: 'Vijayawada', grade: 'B+'}
];

/* ════════════════════════════════════════
   HELPERS
════════════════════════════════════════ */

/* Initials fallback */
function getInitials(name) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/* 🔥 YOUR EXACT PHOTO LOGIC (fn_ln format) */
function getPhotoPath(player) {
  if (!player.ln) {
    return `images/players/${player.fn}.jpg`;
  }
  return `images/players/${player.fn}_${player.ln}.jpg`;
}


function getPhotoPath(player) {
  if (!player.ln) {
    return `images/players/${player.fn}.jpg`;
  }
  return `images/players/${player.fn}_${player.ln}.jpg`;
}

function createCard(player) {
  const card = document.createElement('div');
  card.className = 'player-card';

  const fullName = player.ln
    ? player.fn + ' ' + player.ln
    : player.fn;

  const photoDiv = document.createElement('div');
  photoDiv.className = 'player-photo';

  const img = document.createElement('img');
  img.src = getPhotoPath(player);
  img.alt = fullName;

  img.onerror = () => {
    photoDiv.removeChild(img);
    photoDiv.textContent = getInitials(fullName);
  };

  photoDiv.appendChild(img);

  const nameDiv = document.createElement('div');
  nameDiv.className = 'player-name';
  nameDiv.textContent = fullName;

  const placeDiv = document.createElement('div');
  placeDiv.className = 'player-place';
  placeDiv.textContent = player.place;

  const gradeDiv = document.createElement('div');
  gradeDiv.className = 'player-grade';
  gradeDiv.textContent = 'Grade: ' + (player.grade || 'N/A');

  card.appendChild(photoDiv);
  card.appendChild(nameDiv);
  if (player.place) card.appendChild(placeDiv);
  card.appendChild(gradeDiv);

  return card;
}

function updateCount(shown, total) {
  const el = document.getElementById('playerCount');
  if (!el) return;

  el.textContent = shown === total
    ? total + ' Players'
    : shown + ' of ' + total + ' Players';
}

function renderPlayers(list) {
  const grid = document.getElementById('playersGrid');
  const noResults = document.getElementById('noResults');

  grid.innerHTML = '';

  if (list.length === 0) {
    noResults.classList.add('show');
    updateCount(0, PLAYERS.length);
    return;
  }

  noResults.classList.remove('show');

  list.forEach(player => {
    grid.appendChild(createCard(player));
  });

  updateCount(list.length, PLAYERS.length);
}

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  searchClear.style.display = query ? 'block' : 'none';

  if (!query) {
    renderPlayers(PLAYERS);
    return;
  }

  const filtered = PLAYERS.filter(p => {
    const fullName = p.ln ? p.fn + ' ' + p.ln : p.fn;
    return fullName.toLowerCase().includes(query);
  });

  renderPlayers(filtered);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.style.display = 'none';
  searchInput.focus();
  renderPlayers(PLAYERS);
});

renderPlayers(PLAYERS);