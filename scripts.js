if (top !== self) {
    // 如果頁面被嵌入到 iframe 中，則強制退出
    top.location = self.location;
}
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is fully loaded and parsed');
});
// 定義遊戲的 URL 列表
const gameUrls = [
    "https://kingisme14.github.io/webTopGame/",
    "http://www.gamesmomo.com/a.asp?id=5404",  // 假設第二個遊戲的 URL
    "https://kuioo.tw/g/play/Squid-game-io/",
    "https://www.youtube.com/embed/7EVofmoN0K8?si=7VeUzfUIWLeZvt3C"  // 假設第三個遊戲的 URL
];

let currentGameIndex = 0;  // 當前顯示的遊戲索引

const iframe = document.getElementById('game-frame');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// 切換遊戲的函數
function switchGame(newIndex) {
    iframe.style.opacity = 0;  // 讓 iframe 淡出
    iframe.style.transform = 'translateX(-50px)';  // 稍微平移，增強動畫效果

    setTimeout(() => {
        // 更新 iframe 的 src
        currentGameIndex = newIndex;
        iframe.src = gameUrls[currentGameIndex];
        
        // 等待動畫結束後再顯示新遊戲
        setTimeout(() => {
            iframe.style.opacity = 1;  // 讓 iframe 淡入
            iframe.style.transform = 'translateX(0)';  // 恢復初始位置
        }, 50);  // 稍微延遲，避免過快顯示
    }, 500);  // 過渡時間，與 CSS 動畫時間相同
}

// 切換到上一個遊戲
prevButton.addEventListener('click', () => {
    let newIndex = currentGameIndex > 0 ? currentGameIndex - 1 : gameUrls.length - 1;
    switchGame(newIndex);
});

// 切換到下一個遊戲
nextButton.addEventListener('click', () => {
    let newIndex = currentGameIndex < gameUrls.length - 1 ? currentGameIndex + 1 : 0;
    switchGame(newIndex);
});