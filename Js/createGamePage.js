// �Y�x������
const filterOptions = [
    { value: "all", label: "All" },
    { value: "puzzle", label: "Puzzle" },
    { value: "arcade", label: "Arcade" },
    { value: "adventure", label: "Adventure" },
    { value: "education", label: "Education" }
];

// �[��Ƭ����
const gameCards = [
    {
        title: "Tap Game",
        href: "./games/TapGame.html",
        imgSrc: "./images/tap.png",
        author: "nulledwine",
        tag: "all,arcade"
    },
    {
        title: "KanaFrog",
        href: "./games/KanaFrog.html",
        imgSrc: "./images/frog.png",
        author: "Chris",
        tag: "all,education"
    },
    {
        title: "ConnectMatching",
        href: "./games/ConnectMatching.html",
        imgSrc: "./images/matching.png",
        author: "PukeBomb",
        tag: "all,education"
    },
    {
        title: "Maze",
        href: "./games/Maze.html",
        imgSrc: "./images/maze.png",
        author: "jacklehamster",
        tag: "all,puzzle"
    },
    {
        title: "NumberGuessing",
        href: "./games/NumberGuessingGame.html",
        imgSrc: "./images/number.png",
        author: "STANNco",
        tag: "all,puzzle"
    },
    {
        title: "ReactionTime",
        href: "./games/ReactionTime.html",
        imgSrc: "./images/ReactionTime.png",
        author: "crow-seeds",
        tag: "all,adventure"
    },
    {
        title: "Snake",
        href: "./games/Snake.html",
        imgSrc: "./images/Snake.png",
        author: "PukeBomb",
        tag: "all,adventure"
    },
    {
        title: "TypingSpeed",
        href: "./games/TypingSpeed.html",
        imgSrc: "./images/TypingSpeed.png",
        author: "jacklehamster",
        tag: "all,adventure"
    },
    {
        title: "1a2b",
        href: "./games/1a2b.html",
        imgSrc: "./images/TypingSpeed.png",
        author: "jacklehamster",
        tag: "all,adventure"
    }
];

function createGameCard(containerId, { title, href, imgSrc, author, tag }) {
    const container = document.getElementById(containerId);

    // ���� exhibit-item ����
    const exhibitItem = document.createElement('div');
    exhibitItem.className = 'exhibit-item';
    exhibitItem.setAttribute('data-tags', tag);

    // ���� <a> Ԫ��
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';

    // �����DƬԪ��
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Game: ${title}`;

    // �������}
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // �����������Q
    const p = document.createElement('p');
    p.textContent = `By ${author}`;

    // ��Ԫ�ؽM��
    link.appendChild(img);
    link.appendChild(h3);
    link.appendChild(p);
    exhibitItem.appendChild(link);

    // ��ӵ�����
    container.appendChild(exhibitItem);
}

function createFilterOptions(containerId, options) {
    const container = document.getElementById(containerId);

    // ���� <span>
    const span = document.createElement('span');
    span.textContent = 'Category: ';

    // ���� <select>
    const select = document.createElement('select');
    select.id = 'tag-filter';

    // �����x�
    options.forEach(({ value, label }) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
    });

    // �� <select> ��ӵ� <span>
    span.appendChild(select);

    // ���Y�x����ӵ�����
    container.appendChild(span);
}

function filterGameCards() {
    const selectedTag = document.getElementById('tag-filter').value;
    const gameItems = document.querySelectorAll('.exhibit-item');

    gameItems.forEach((item) => {
        const tags = item.getAttribute('data-tags').split(',');
        if (selectedTag === 'all' || tags.includes(selectedTag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // ���ɺY�x��
    createFilterOptions('filter-container', filterOptions);

    // �����[��Ƭ
    gameCards.forEach((cardData) => createGameCard('game-container', cardData));

    // �����Y�x�¼�
    document.getElementById('tag-filter').addEventListener('change', filterGameCards);
});
