document.getElementById("tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // 獲取選中的標籤
    const games = document.querySelectorAll(".featured-games .exhibit-item"); // 獲取所有遊戲項目

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

document.getElementById("music-tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // 獲取選中的標籤
    const musicItems = document.querySelectorAll(".featured-music .exhibit-item"); // 限定篩選範圍為音樂頁面的 exhibit-item

    musicItems.forEach(music => {
        const tags = music.getAttribute("data-tags").split(","); // 獲取該音樂的標籤列表

        // 顯示或隱藏音樂
        if (selectedTag === "all" || tags.includes(selectedTag)) {
            music.style.display = "block";
        } else {
            music.style.display = "none";
        }
    });
});
