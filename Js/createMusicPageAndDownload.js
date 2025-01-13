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

// 函數：生成音樂卡片
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
    iframe.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    );
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
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

    // 創建反饋訊息
    const feedbackMessage = document.createElement('span');
    feedbackMessage.className = 'feedback-message';
    feedbackMessage.style.display = 'none';
    feedbackMessage.style.color = 'green';
    feedbackMessage.style.fontSize = '0.9em';
    feedbackMessage.style.marginTop = '5px';
    feedbackMessage.textContent = 'Download started!';

    // 將所有元素添加到 exhibit-item
    exhibitItem.appendChild(videoContainer);
    exhibitItem.appendChild(h3);
    exhibitItem.appendChild(p);
    exhibitItem.appendChild(button);
    exhibitItem.appendChild(feedbackMessage);

    // 將 exhibit-item 添加到容器
    container.appendChild(exhibitItem);
}

// 迴圈生成所有音樂卡片
musicCards.forEach((cardData) => createMusicCard('music-container', cardData));

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