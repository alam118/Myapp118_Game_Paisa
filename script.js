// ============================================
// RENDER FEATURED GAMES
// ============================================
function renderGames(containerId, games) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = games.map(game => `
    <div class="game-card animate-in" onclick="openGameDetail(${game.id})">
      ${game.isHot ? '<span class="badge badge-hot">🔥 Hot</span>' : ''}
      ${game.isNew ? '<span class="badge badge-new">🆕 New</span>' : ''}
      ${game.isTrending ? '<span class="badge badge-trending">📈 Trending</span>' : ''}
      
      <div class="game-icon">${game.icon}</div>
      <div class="game-name">${game.name}</div>
      <div class="game-category">${getCategoryName(game.category)}</div>
      
      <div class="game-stats">
        <span>⭐ ${game.rating}</span>
        <span>📥 ${game.downloads}</span>
        <span>💰 ₹${game.minWithdrawal}</span>
      </div>
      
      <div class="trust-score trust-${game.trustScore}">
        ${game.trustScore === 'high' ? '✅' : '⚠️'} 
        ${game.trustScore === 'high' ? 'सुरक्षित' : game.trustScore === 'medium' ? 'सावधानी' : 'जोखिम'}
      </div>
      
      <div class="game-actions">
        <a href="${game.officialLink}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation()">
          📥 Download
        </a>
        <button class="btn btn-outline" onclick="event.stopPropagation(); toggleFavorite(${game.id})">
          ⭐
        </button>
      </div>
    </div>
  `).join('');
}

function getCategoryName(cat) {
  const map = {
    quiz: '🧠 Quiz',
    ludo: '🎲 Ludo',
    fantasy: '🏏 Fantasy',
    casual: '🎮 Casual',
    puzzle: '🧩 Puzzle',
    reward: '💰 Reward',
    survey: '📋 Survey',
    cashback: '💵 Cashback'
  };
  return map[cat] || cat;
}

// ============================================
// INIT HOME PAGE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Featured Games
  const featured = gamesData.filter(g => g.isHot || g.isTrending).slice(0, 6);
  renderGames('featuredGames', featured);

  // New Games
  const newGames = gamesData.filter(g => g.isNew).slice(0, 4);
  renderGames('newGames', newGames);

  // Load Favorites from LocalStorage
  loadFavorites();

  // Load Theme
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
});

// ============================================
// SEARCH FUNCTION
// ============================================
function searchGames(query) {
  const filtered = gamesData.filter(g => 
    g.name.toLowerCase().includes(query.toLowerCase()) ||
    g.category.includes(query.toLowerCase())
  );
  renderGames('featuredGames', filtered.slice(0, 6));
  renderGames('newGames', []);
  
  if (query.length > 0) {
    document.querySelector('#featuredGames').innerHTML = filtered.map(g => `
      <div class="game-card animate-in" onclick="openGameDetail(${g.id})">
        <div class="game-icon">${g.icon}</div>
        <div class="game-name">${g.name}</div>
        <div class="game-category">${getCategoryName(g.category)}</div>
        <div class="game-stats">
          <span>⭐ ${g.rating}</span>
          <span>📥 ${g.downloads}</span>
        </div>
        <div class="game-actions">
          <a href="${g.officialLink}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation()">
            📥 Download
          </a>
        </div>
      </div>
    `).join('');
  }
}

// ============================================
// FILTER BY CATEGORY
// ============================================
function filterGames(category) {
  // Update chips
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector(`.chip[onclick*="${category}"]`)?.classList.add('active');

  const filtered = category === 'all' ? gamesData : gamesData.filter(g => g.category === category);
  renderGames('featuredGames', filtered.slice(0, 6));
  renderGames('newGames', []);
}

// ============================================
// GAME DETAIL PAGE
// ============================================
function openGameDetail(id) {
  const game = gamesData.find(g => g.id === id);
  if (!game) return;

  // Store in localStorage for detail page
  localStorage.setItem('selectedGame', JSON.stringify(game));
  window.location.href = 'game-detail.html';
}

// ============================================
// FAVORITES
// ============================================
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('⭐ फेवरेट से हटा दिया गया', 'info');
  } else {
    favorites.push(id);
    showToast('⭐ फेवरेट में जोड़ दिया गया', 'success');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
  // No UI update needed on home page, but we need the data for favorites page
}

function getFavorites() {
  return gamesData.filter(g => favorites.includes(g.id));
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  
  const btn = document.querySelector('.app-bar-actions button:first-child');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// ============================================
// FAQ ACCORDION
// ============================================
function toggleFAQ(element) {
  const item = element.closest('.faq-item');
  item.classList.toggle('open');
}

// ============================================
// SHARE APP
// ============================================
function shareApp() {
  if (navigator.share) {
    navigator.share({
      title: 'Smart Gamer Guide',
      text: 'घर बैठे पैसे कमाने वाले गेम्स की पूरी गाइड!',
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('लिंक कॉपी हो गया!', 'success');
  }
}

// ============================================
// RATE APP
// ============================================
function rateApp() {
  showToast('⭐ हमें 5 स्टार रेटिंग दें!', 'info');
  // In real app, redirect to Play Store
}
