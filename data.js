// ============================================
// GAMES DATA
// ============================================
const gamesData = [
  {
    id: 1,
    name: 'MPL (Mobile Premier League)',
    icon: '🏏',
    category: 'fantasy',
    rating: 4.5,
    downloads: '50M+',
    minWithdrawal: '₹100',
    paymentMethods: ['UPI', 'Paytm', 'Bank Transfer'],
    review: 'भारत का सबसे बड़ा ई-स्पोर्ट्स प्लेटफॉर्म। क्रिकेट, फुटबॉल, कार्ड गेम्स और बहुत कुछ।',
    pros: ['₹100 से Withdrawal', 'UPI Support', 'Trusted Platform'],
    cons: ['कुछ गेम्स में Skill की जरूरत', 'KYC जरूरी'],
    trustScore: 'high',
    isNew: false,
    isHot: true,
    isTrending: true,
    officialLink: 'https://play.google.com/store/apps/details?id=com.mpl.mpl'
  },
  {
    id: 2,
    name: 'Dream11',
    icon: '🏏',
    category: 'fantasy',
    rating: 4.4,
    downloads: '100M+',
    minWithdrawal: '₹100',
    paymentMethods: ['UPI', 'Paytm', 'Google Pay', 'Bank Transfer'],
    review: 'फैंटसी क्रिकेट का सबसे बड़ा प्लेटफॉर्म। अपनी टीम बनाएं और रियल कैश जीतें।',
    pros: ['₹100 Withdrawal', 'सभी Payment Methods', 'Official IPL Partner'],
    cons: ['गेम समझने में समय लगता है', 'KYC जरूरी'],
    trustScore: 'high',
    isNew: false,
    isHot: true,
    isTrending: true,
    officialLink: 'https://play.google.com/store/apps/details?id=com.dream11.fantasy.cricket'
  },
  {
    id: 3,
    name: 'Ludo Supreme',
    icon: '🎲',
    category: 'ludo',
    rating: 4.3,
    downloads: '10M+',
    minWithdrawal: '₹50',
    paymentMethods: ['UPI', 'Paytm'],
    review: 'रियल कैश लूडो। दोस्तों के साथ खेलें और पैसे जीतें।',
    pros: ['₹50 से Withdrawal', 'लोकल गेम', 'आसान इंटरफेस'],
    cons: ['कुछ खिलाड़ी Cheat करते हैं', 'Network Issue हो सकता है'],
    trustScore: 'medium',
    isNew: true,
    isHot: false,
    isTrending: true,
    officialLink: 'https://play.google.com/store/apps/details?id=com.ludo.supreme'
  },
  {
    id: 4,
    name: 'Quizizz - Money Quiz',
    icon: '🧠',
    category: 'quiz',
    rating: 4.2,
    downloads: '5M+',
    minWithdrawal: '₹200',
    paymentMethods: ['UPI', 'Paytm', 'PhonePe'],
    review: 'GK, स्पोर्ट्स, बॉलीवुड क्विज खेलें और पैसे जीतें।',
    pros: ['ज्ञान बढ़ता है', 'Multiple Categories', 'Daily New Quiz'],
    cons: ['₹200 Minimum Withdrawal', 'कुछ सवाल मुश्किल हैं'],
    trustScore: 'medium',
    isNew: true,
    isHot: false,
    isTrending: false,
    officialLink: 'https://play.google.com/store/apps/details?id=com.quizizz.money'
  },
  {
    id: 5,
    name: 'Rummy Circle',
    icon: '🃏',
    category: 'casual',
    rating: 4.6,
    downloads: '20M+',
    minWithdrawal: '₹100',
    paymentMethods: ['UPI', 'Paytm', 'Google Pay', 'Bank Transfer'],
    review: 'ऑनलाइन रम्मी का सबसे भरोसेमंद प्लेटफॉर्म। 24/7 कस्टमर सपोर्ट।',
    pros: ['₹100 Withdrawal', 'Trusted Platform', '24/7 Support'],
    cons: ['गेम समझना थोड़ा मुश्किल', 'KYC जरूरी'],
    trustScore: 'high',
    isNew: false,
    isHot: true,
    isTrending: true,
    officialLink: 'https://play.google.com/store/apps/details?id=com.rummycircle'
  },
  {
    id: 6,
    name: 'Pocket Money - Survey App',
    icon: '📋',
    category: 'survey',
    rating: 4.0,
    downloads: '1M+',
    minWithdrawal: '₹250',
    paymentMethods: ['UPI', 'Paytm', 'Amazon Gift Card'],
    review: 'घर बैठे सर्वे भरें और पैसे कमाएं। हर सर्वे में ₹10-₹50।',
    pros: ['कोई Skill नहीं चाहिए', 'आसान काम', 'Gift Cards भी मिलते हैं'],
    cons: ['₹250 Minimum', 'सर्वे कम आते हैं'],
    trustScore: 'medium',
    isNew: false,
    isHot: false,
    isTrending: false,
    officialLink: 'https://play.google.com/store/apps/details?id=com.pocketmoney.survey'
  },
  {
    id: 7,
    name: 'WinZO - Cash Games',
    icon: '🎮',
    category: 'casual',
    rating: 4.3,
    downloads: '50M+',
    minWithdrawal: '₹50',
    paymentMethods: ['UPI', 'Paytm', 'Google Pay', 'PhonePe'],
    review: 'रियल कैश गेम्स का किंग। 100+ गेम्स, सबसे कम Withdrawal Limit।',
    pros: ['₹50 से Withdrawal', '100+ गेम्स', 'सबसे पॉपुलर'],
    cons: ['कुछ गेम्स में लत लग सकती है', 'KYC जरूरी'],
    trustScore: 'high',
    isNew: false,
    isHot: true,
    isTrending: true,
    officialLink: 'https://play.google.com/store/apps/details?id=com.winzo.game'
  },
  {
    id: 8,
    name: 'Cashify - Cashback App',
    icon: '💵',
    category: 'cashback',
    rating: 4.1,
    downloads: '1M+',
    minWithdrawal: '₹100',
    paymentMethods: ['UPI', 'Paytm', 'Amazon Gift Card'],
    review: 'ऑनलाइन शॉपिंग पर Cashback पाएं। Amazon, Flipkart, Myntra सब पर।',
    pros: ['हर खरीदारी पर Cashback', 'Easy to Use', 'Gift Cards Available'],
    cons: ['₹100 Minimum', 'कैशबैक मिलने में 7 दिन लगते हैं'],
    trustScore: 'medium',
    isNew: true,
    isHot: false,
    isTrending: false,
    officialLink: 'https://play.google.com/store/apps/details?id=com.cashify.app'
  }
];

// ============================================
// ARTICLES DATA
// ============================================
const articlesData = [
  {
    id: 1,
    title: 'घर बैठे पैसे कैसे कमाएं? पूरी गाइड',
    category: 'Guide',
    readTime: '5 मिनट',
    excerpt: 'गेमिंग, सर्वे, कैशबैक ऐप्स से घर बैठे पैसे कमाने का पूरा तरीका...',
    icon: '💰'
  },
  {
    id: 2,
    title: 'UPI Withdrawal Guide - सबसे आसान तरीका',
    category: 'Guide',
    readTime: '3 मिनट',
    excerpt: 'गेमिंग ऐप्स से UPI के जरिए पैसे कैसे निकालें? स्टेप बाय स्टेप गाइड...',
    icon: '💳'
  },
  {
    id: 3,
    title: 'Scam से कैसे बचें? 7 जरूरी टिप्स',
    category: 'Safety',
    readTime: '4 मिनट',
    excerpt: 'फेक गेमिंग ऐप्स और स्कैम से बचने के 7 आसान तरीके...',
    icon: '🛡️'
  },
  {
    id: 4,
    title: 'Best Earning Apps 2025 - Top 10 List',
    category: 'Review',
    readTime: '6 मिनट',
    excerpt: '2025 में सबसे ज्यादा कमाई देने वाले 10 ऐप्स की पूरी लिस्ट...',
    icon: '🏆'
  },
  {
    id: 5,
    title: 'Beginner Guide - पहली बार पैसे कैसे कमाएं?',
    category: 'Guide',
    readTime: '7 मिनट',
    excerpt: 'अगर आपने कभी पैसे नहीं कमाए तो ये गाइड आपके लिए है...',
    icon: '📖'
  },
  {
    id: 6,
    title: 'गेम से कमाई कैसे होती है? पूरा Process',
    category: 'Guide',
    readTime: '4 मिनट',
    excerpt: 'गेम कंपनियां कैसे पैसे देती हैं? एडवरटाइजमेंट, इन-ऐप पर्चेज, और बहुत कुछ...',
    icon: '🎯'
  }
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: 'क्या सच में गेम खेलकर पैसे मिलते हैं?',
    answer: 'हाँ, लेकिन यह आपकी स्किल, समय और गेम की नीतियों पर निर्भर करता है। हर गेम में जीतने की गारंटी नहीं होती।'
  },
  {
    question: 'क्या UPI से पैसे निकाल सकते हैं?',
    answer: 'हाँ, लगभग सभी अच्छे गेमिंग ऐप्स UPI, Paytm, Google Pay और Bank Transfer का सपोर्ट करते हैं।'
  },
  {
    question: 'Minimum Withdrawal कितना है?',
    answer: 'यह गेम पर निर्भर करता है। कुछ में ₹50, तो कुछ में ₹200 या ₹500।'
  },
  {
    question: 'क्या आधार कार्ड चाहिए?',
    answer: 'ज्यादातर ऐप्स में KYC के लिए आधार या PAN कार्ड की जरूरत होती है। यह सुरक्षा के लिए है।'
  },
  {
    question: 'क्या PAN कार्ड जरूरी है?',
    answer: '₹5000 से ज्यादा Withdrawal पर PAN कार्ड जरूरी होता है। यह Tax नियमों के कारण है।'
  },
  {
    question: 'क्या Fake Apps से बच सकते हैं?',
    answer: 'हाँ, हमेशा Official Play Store से डाउनलोड करें, Review पढ़ें और Privacy Policy चेक करें।'
  }
];
