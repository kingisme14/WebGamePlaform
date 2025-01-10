document.getElementById("tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // 獲取選中的標籤
    const games = document.querySelectorAll(".game-item"); // 獲取所有遊戲項目

    games.forEach(game => {
        const tags = game.getAttribute("data-tags").split(","); // 獲取該遊戲的標籤列表

        // 顯示或隱藏遊戲
        if (selectedTag === "all" || tags.includes(selectedTag)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});