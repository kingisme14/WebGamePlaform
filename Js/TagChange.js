// 獲取所有的按鈕
const buttons = document.querySelectorAll('.tab-button');

// 為每個按鈕添加點擊事件
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 獲取目標section的名稱
        const targetSection = this.getAttribute('data-target');

        // 隱藏所有的 section，除了 game-player
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.className !== 'game-player') { // 不隱藏 game-player
                section.style.display = 'none';
            }
        });

        // 顯示對應的 section
        const target = document.querySelector(`.${targetSection}`);
        if (target) {
            target.style.display = 'block';
        }
    });
});
