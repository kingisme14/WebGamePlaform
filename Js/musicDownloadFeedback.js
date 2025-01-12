document.addEventListener("DOMContentLoaded", () => {
    // 選擇所有下載按鈕
    const downloadButtons = document.querySelectorAll('.download-link');

    // 為每個按鈕添加事件監聽
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 阻止按鈕的默認行為（防止多次觸發）
            e.preventDefault();

            // 找到當前按鈕對應的回饋訊息
            const feedbackMessage = button.nextElementSibling;

            if (feedbackMessage) {
                // 顯示回饋訊息
                feedbackMessage.style.display = "inline";

                // 一段時間後隱藏回饋訊息
                setTimeout(() => {
                    feedbackMessage.style.display = "none";
                }, 3000);

                // 模擬觸發下載（可移除此行，留作實測用）
                window.location.href = button.href;
            }
        });
    });
});