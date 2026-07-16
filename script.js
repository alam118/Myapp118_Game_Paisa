// ============================================
// ===== MOBILE MENU TOGGLE =====
// ============================================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// ============================================
// ===== DAILY TIP (Home Page) =====
// ============================================
const tips = [
    "Ludo में: हमेशा 6 आने पर ही गोटी बाहर निकालें, बाकी समय दूसरी गोटियाँ चलाएं",
    "Rummy में: शुरुआत में Pure Sequence बनाना सबसे जरूरी है",
    "क्विज ऐप्स में: '50-50' और 'टाइम एक्सटेंशन' पॉवर्स का सही इस्तेमाल करें",
    "Dream11: हमेशा मौसम पूर्वानुमान देखकर टीम बनाएं",
    "गेमिंग में लगातार हार पर 10 मिनट का ब्रेक लें, इससे फोकस बढ़ता है",
    "Free Fire में: हेडशॉट के लिए हमेशा M1887 और Sniper का कॉम्बो यूज करें",
    "BGMI में: पहले 5 मिनट तक कम लड़ें, ज्यादा लूट करें",
    "पज़ल गेम्स में: हमेशा किनारों (edges) से शुरू करें"
];

// Daily Tip दिखाना (Home Page)
const tipElement = document.getElementById('dailyTip');
if (tipElement) {
    const dayIndex = new Date().getDate() % tips.length;
    tipElement.textContent = tips[dayIndex];
}

// ============================================
// ===== TIPS PAGE =====
// ============================================
const tipsData = [
    {
        game: '🎲 Ludo',
        tips: [
            '6 आने पर ही गोटी बाहर निकालें',
            'दुश्मन के गोटी को काटने के लिए 2 गोटियाँ पास रखें',
            'हार की स्थिति में Safe Zone का इस्तेमाल करें'
        ]
    },
    {
        game: '🃏 Rummy',
        tips: [
            'Joker का इस्तेमाल हमेशा मुश्किल सेट बनाने में करें',
            'Middle Cards (5-8) को पकड़कर रखें',
            'बिना Sequence के कभी भी शो न करें'
        ]
    },
    {
        game: '🏏 Dream11',
        tips: [
            'पिच रिपोर्ट और मौसम जरूर देखें',
            'ऑलराउंडर्स को हमेशा कप्तान बनाएं',
            'लोकल प्लेयर्स पर फोकस करें'
        ]
    },
    {
        game: '🔫 BGMI / Free Fire',
        tips: [
            'पहले 5 मिनट तक कम लड़ें, ज्यादा लूट करें',
            'हमेशा कवर के पीछे से फायर करें',
            'ग्रेनेड और स्मोक बम हमेशा साथ रखें'
        ]
    },
    {
        game: '🧩 Quiz Games',
        tips: [
            '50-50 का सही इस्तेमाल करें',
            'टाइम एक्सटेंशन पॉवर बचाकर रखें',
            'सवाल को ध्यान से पढ़ें'
        ]
    },
    {
        game: '⚽ Football Games',
        tips: [
            'फॉर्मेशन 4-3-3 सबसे बैलेंस्ड है',
            'हमेशा पासिंग गेम खेलें',
            'डिफेंस में 2 खिलाड़ी जरूर रखें'
        ]
    }
];

const tipsContainer = document.getElementById('tipsContainer');
if (tipsContainer) {
    tipsData.forEach(category => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${category.game}</h2>
            ${category.tips.map(tip => `<p style="padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9;">✅ ${tip}</p>`).join('')}
        `;
        tipsContainer.appendChild(div);
    });
}

// ============================================
// ===== QUIZ PAGE =====
// ============================================
const quizQuestions = [
    {
        question: 'BGMI का फुल फॉर्म क्या है?',
        options: ['Battlegrounds Mobile India', 'Big Game Mobile India', 'Battle Grounds Main India', 'Best Game Mobile India'],
        correct: 0
    },
    {
        question: 'Rummy में कितने कार्ड्स होते हैं?',
        options: ['13', '21', '52', '7'],
        correct: 0
    },
    {
        question: 'गेमिंग के दौरान कितनी देर बाद ब्रेक लेना चाहिए?',
        options: ['10 मिनट', '30 मिनट', '1 घंटा', '2 घंटे'],
        correct: 1
    },
    {
        question: 'Dream11 किस खेल से जुड़ा है?',
        options: ['सिर्फ क्रिकेट', 'सिर्फ फुटबॉल', 'क्रिकेट और फुटबॉल दोनों', 'बास्केटबॉल'],
        correct: 2
    },
    {
        question: 'सबसे पहला वीडियो गेम कौन सा था?',
        options: ['Pong', 'Space Invaders', 'Tetris', 'Super Mario'],
        correct: 0
    }
];

let currentQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

const quizContent = document.getElementById('quizContent');

function loadQuiz() {
    if (!quizContent) return;

    if (currentQuestion >= quizQuestions.length) {
        // Result Show
        const total = quizQuestions.length;
        const percentage = Math.round((quizScore / total) * 100);
        let message = '';
        if (percentage === 100) message = 'शानदार! आप एक मास्टर गेमर हैं! 🏆';
        else if (percentage >= 60) message = 'अच्छा है! और प्रैक्टिस करें! 💪';
        else message = 'कोई बात नहीं, टिप्स पढ़कर आओ! 📚';

        quizContent.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <span style="font-size: 4rem;">🏆</span>
                <h2 style="font-size: 2rem; margin: 1rem 0;">आपका स्कोर</h2>
                <p style="font-size: 3rem; font-weight: bold; color: #2563eb;">${quizScore}/${total}</p>
                <p style="font-size: 1.2rem; margin: 1rem 0;">${message}</p>
                <button class="btn btn-primary" onclick="resetQuiz()">🔄 फिर से खेलें</button>
            </div>
        `;
        return;
    }

    const q = quizQuestions[currentQuestion];
    quizAnswered = false;

    let html = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
            <span style="background: #dbeafe; padding: 0.25rem 1rem; border-radius: 9999px;">
                प्रश्न ${currentQuestion + 1}/${quizQuestions.length}
            </span>
            <span style="background: #dcfce7; padding: 0.25rem 1rem; border-radius: 9999px;">
                ✅ ${quizScore} सही
            </span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">${q.question}</h2>
        <div id="quizOptions">
    `;

    q.options.forEach((opt, index) => {
        html += `
            <button class="quiz-option" data-index="${index}" onclick="selectAnswer(${index})">
                ${opt}
            </button>
        `;
    });

    html += `</div>`;
    quizContent.innerHTML = html;
}

function selectAnswer(index) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index && i !== q.correct) btn.classList.add('wrong');
    });

    if (index === q.correct) quizScore++;

    setTimeout(() => {
        currentQuestion++;
        loadQuiz();
    }, 1500);
}

function resetQuiz() {
    currentQuestion = 0;
    quizScore = 0;
    loadQuiz();
}

// Quiz load करें अगर quiz page पर हैं
if (quizContent) loadQuiz();

// ============================================
// ===== TRACKER PAGE =====
// ============================================
let sessions = JSON.parse(localStorage.getItem('gameSessions')) || [];

function updateTrackerUI() {
    const totalMinutes = sessions.reduce((sum, s) => sum + s.minutes, 0);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    const totalEl = document.getElementById('totalTime');
    if (totalEl) totalEl.textContent = `आज का कुल समय: ${hours} घंटे ${mins} मिनट`;

    const warningEl = document.getElementById('warningMessage');
    if (warningEl) {
        if (totalMinutes > 120) warningEl.style.display = 'block';
        else warningEl.style.display = 'none';
    }

    const historyList = document.getElementById('historyList');
    if (historyList) {
        if (sessions.length === 0) {
            historyList.innerHTML = '<p style="color: #94a3b8; text-align: center;">अभी तक कोई सेशन नहीं</p>';
        } else {
            historyList.innerHTML = sessions.map(s => `
                <div class="history-item">
                    <span>${s.date}</span>
                    <span>${Math.floor(s.minutes / 60)}h ${s.minutes % 60}m</span>
                </div>
            `).join('');
        }
    }
}

function addSession() {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');

    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes <= 0) {
        alert('कृपया सही समय डालें!');
        return;
    }

    const session = {
        date: new Date().toLocaleDateString('hi-IN'),
        minutes: totalMinutes,
        id: Date.now()
    };

    sessions.push(session);
    localStorage.setItem('gameSessions', JSON.stringify(sessions));

    hoursInput.value = '';
    minutesInput.value = '';

    updateTrackerUI();
}

// Tracker UI अपडेट करें अगर tracker page पर हैं
if (document.getElementById('historyList')) updateTrackerUI();

// ============================================
// ===== HOMEPAGE - WELCOME NAME =====
// ============================================
const heroH1 = document.querySelector('.hero h1');
if (heroH1) {
    const name = localStorage.getItem('userName') || 'गेमर';
    heroH1.textContent = `नमस्ते, ${name}! 👋`;
}
