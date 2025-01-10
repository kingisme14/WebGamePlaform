document.getElementById("tag-filter").addEventListener("change", function () {
    const selectedTag = this.value; // �@ȡ�x�еĘ˻`
    const games = document.querySelectorAll(".game-item"); // �@ȡ�����[���Ŀ

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