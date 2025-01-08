document.querySelectorAll('.tab-button').forEach((item) => {
    item.addEventListener('click', function (event) {
        const rect = item.getBoundingClientRect(); // 獲取區塊尺寸
        const numPieces = 50; // 不規則小塊數量

        // 隱藏原本內容
        //item.style.visibility = 'hidden';

        // 創建破碎效果
        for (let i = 0; i < numPieces; i++) {
            const piece = document.createElement('div');
            piece.classList.add('piece');

            // 隨機方向、旋轉和位置
            const dx = Math.random() * 2 - 1; // 水平方向
            const dy = Math.random() * 2 - 1; // 垂直方向
            const r = Math.random(); // 隨機旋轉
            const x = Math.random() * rect.width; // 初始位置 X
            const y = Math.random() * rect.height; // 初始位置 Y

            // 隨機生成多邊形形狀
            const randomPolygon = generateRandomPolygon();
            piece.style.clipPath = `polygon(${randomPolygon})`;

            piece.style.setProperty('--dx', dx);
            piece.style.setProperty('--dy', dy);
            piece.style.setProperty('--r', r);
            piece.style.left = `${x}px`;
            piece.style.top = `${y}px`;

            // 將小塊加入 game-item 容器
            item.appendChild(piece);

            // 動畫結束後移除小塊
            piece.addEventListener('animationend', () => piece.remove());
        }
    });
});

/**
 * 隨機生成多邊形頂點
 * 返回值為形如 "0 0, 100% 0, 100% 100%, 0 100%" 的字符串
 */
function generateRandomPolygon() {
    const points = [];
    const numPoints = Math.floor(Math.random() * 4) + 3; // 隨機頂點數（3到6個點）

    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 100; // 隨機 X 百分比
        const y = Math.random() * 100; // 隨機 Y 百分比
        points.push(`${x}% ${y}%`);
    }

    return points.join(', '); // 將點拼接為多邊形
}
