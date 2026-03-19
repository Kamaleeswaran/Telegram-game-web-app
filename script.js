let count = 0;
const balanceDisplay = document.getElementById('balance');
const coinBtn = document.getElementById('game-btn');

// Telegram Web App initialize panrom
const tg = window.Telegram.WebApp;
tg.expand(); // Screen full-ah open aagum

coinBtn.addEventListener('click', () => {
    count++;
    balanceDisplay.innerText = count;
    
    // Haptic feedback (Vibration) - User-ku game feel kedaikum
    tg.HapticFeedback.impactOccurred('medium');
});