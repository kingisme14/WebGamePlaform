// 音樂篩選器數據
const musicFilterOptions = [
    { value: "All", label: "All" },
    { value: "Beat", label: "Beat" },
    { value: "Pop", label: "Pop" },
    { value: "Epic", label: "Epic" },
    { value: "Lively", label: "Lively" }
];
// 音樂卡片數據陣列
const musicCards = [
    {
        title: "Beat1",
        videoSrc: "https://www.youtube.com/embed/r50UEk1-J-I?si=utP21aByPajRAUrk",
        audioSrc: "./audio/beat1.mp3",
        author: "jacklehamster",
        tag: "All,Beat"
    },
    {
        title: "Epic1",
        videoSrc: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
        audioSrc: "./audio/epic1.mp3",
        author: "epiccomposer",
        tag: "All,Epic"
    },
    {
        title: "Pop1",
        videoSrc: "https://www.youtube.com/embed/5qap5aO4i9A",
        audioSrc: "./audio/pop1.mp3",
        author: "chillstation",
        tag: "All,Pop"
    },
    {
        title: "Beat2",
        videoSrc: "https://www.youtube.com/embed/r50UEk1-J-I?si=utP21aByPajRAUrk",
        audioSrc: "./audio/beat2.mp3",
        author: "jacklehamster",
        tag: "All,Beat"
    },
    {
        title: "Epic2",
        videoSrc: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
        audioSrc: "./audio/epic2.mp3",
        author: "epiccomposer",
        tag: "All,Epic"
    },
    {
        title: "Pop2",
        videoSrc: "https://www.youtube.com/embed/5qap5aO4i9A",
        audioSrc: "./audio/pop2.mp3",
        author: "chillstation",
        tag: "All,Pop"
    },
    {
        title: "Epic3",
        videoSrc: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
        audioSrc: "./audio/epic3.mp3",
        author: "epiccomposer",
        tag: "All,Epic"
    },
    {
        title: "Pop3",
        videoSrc: "https://www.youtube.com/embed/5qap5aO4i9A",
        audioSrc: "./audio/pop3.mp3",
        author: "chillstation",
        tag: "All,Pop"
    },
    {
        title: "Beat3",
        videoSrc: "https://www.youtube.com/embed/r50UEk1-J-I?si=utP21aByPajRAUrk",
        audioSrc: "./audio/beat3.mp3",
        author: "jacklehamster",
        tag: "All,Beat"
    },
    {
        title: "Epic4",
        videoSrc: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
        audioSrc: "./audio/epic4.mp3",
        author: "epiccomposer",
        tag: "All,Epic"
    },
    {
        title: "Pop4",
        videoSrc: "https://www.youtube.com/embed/5qap5aO4i9A",
        audioSrc: "./audio/pop4.mp3",
        author: "chillstation",
        tag: "All,Pop"
    }
];

function createMusicCard(containerId, { title, videoSrc, audioSrc, author, tag }) {
    const container = document.getElementById(containerId);

    // 創建 exhibit-item 容器
    const exhibitItem = document.createElement('div');
    exhibitItem.className = 'exhibit-item';
    exhibitItem.setAttribute('data-tags', tag);

    // 創建 video-container
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    // 創建 iframe
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = videoSrc;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.allowFullscreen = true;

    // 添加 iframe 到 video-container
    videoContainer.appendChild(iframe);

    // 創建 h3 標題
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // 創建 p 標籤（作者名稱）
    const p = document.createElement('p');
    p.textContent = `By ${author}`;

    // 創建按鈕
    const button = document.createElement('button');
    button.className = 'download-button';
    button.textContent = 'Download Audio';
    button.onclick = (event) => downloadAudio(event, audioSrc, title);

    // 將所有元素添加到 exhibit-item
    exhibitItem.appendChild(videoContainer);
    exhibitItem.appendChild(h3);
    exhibitItem.appendChild(p);
    exhibitItem.appendChild(button);

    // 添加 exhibit-item 到容器
    container.appendChild(exhibitItem);
}


// 音樂下載功能
function downloadAudio(event, fileUrl, fileName) {
    event.preventDefault(); // 防止默認行為
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click(); // 模擬點擊下載
    document.body.removeChild(link); // 下載後移除元素
}
function createMusicFilter(containerId, options) {
    const container = document.getElementById(containerId);

    // 創建 <span>
    const span = document.createElement('span');
    span.textContent = 'Category: ';

    // 創建 <select>
    const select = document.createElement('select');
    select.id = 'music-tag-filter';

    // 生成選項
    options.forEach(({ value, label }) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        if (value === "Epic") option.selected = true; // 預設選中 "Epic"
        select.appendChild(option);
    });

    // 添加到篩選器容器
    span.appendChild(select);
    container.appendChild(span);
}
//篩選功能
function filterMusicCards() {
    const selectedTag = document.getElementById('music-tag-filter').value;
    const musicItems = document.querySelectorAll('#music-container .exhibit-item'); // 只選擇音樂容器內的卡片

    musicItems.forEach((item) => {
        const tagsAttr = item.getAttribute('data-tags');
        if (!tagsAttr) return;
        const tags = tagsAttr.split(',');
        if (selectedTag === 'All' || tags.includes(selectedTag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


//初始化：生成篩選器與音樂卡片
let isMusicCardsGenerated = false;  // 記錄音樂卡片是否已生成過

document.addEventListener('DOMContentLoaded', () => {
    // 確保篩選器的元素已經被加載

    // 如果卡片還沒有生成過，則生成篩選器和卡片
    if (!isMusicCardsGenerated) {
        // 生成篩選器
        createMusicFilter('music-filter-container', musicFilterOptions);

        // 生成音樂卡片
        musicCards.forEach((cardData) => createMusicCard('music-container', cardData));

        // 記錄卡片已生成過
        isMusicCardsGenerated = true;
    }

    

    // 重新設置篩選器選擇，這裡設定為 "Epic"（您可以設定為其他值）
    const filterSelect = document.getElementById('music-tag-filter');
    filterSelect.value = 'Epic';

    // 綁定篩選事件
    filterSelect.addEventListener('change', filterMusicCards);


    // 進行初始篩選
    filterMusicCards();
});


