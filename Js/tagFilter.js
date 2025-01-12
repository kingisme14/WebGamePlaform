document.getElementById("tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // �@ȡ�x�еĘ˻`
    const games = document.querySelectorAll(".featured-games .exhibit-item"); // �@ȡ�����[���Ŀ

    games.forEach(game => {
        const tags = game.getAttribute("data-tags").split(","); // �@ȡԓ�[��Ę˻`�б�

        // �@ʾ���[���[��
        if (selectedTag === "all" || tags.includes(selectedTag)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});

document.getElementById("music-tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // �@ȡ�x�еĘ˻`
    const musicItems = document.querySelectorAll(".featured-music .exhibit-item"); // �޶��Y�x�������������� exhibit-item

    musicItems.forEach(music => {
        const tags = music.getAttribute("data-tags").split(","); // �@ȡԓ�����Ę˻`�б�

        // �@ʾ���[������
        if (selectedTag === "all" || tags.includes(selectedTag)) {
            music.style.display = "block";
        } else {
            music.style.display = "none";
        }
    });
});
