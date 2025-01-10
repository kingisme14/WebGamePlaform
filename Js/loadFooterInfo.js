// 創建 footer 元素
const footer = document.createElement('footer');
const footerContent = document.createElement('div');
footerContent.classList.add('footer-content');  // 添加類名

// 創建第1個 p 元素
const p1 = document.createElement('p');
p1.innerHTML = '&copy; 2025 WaaMooGeePlay. All rights reserved.';
footerContent.appendChild(p1);

// 創建第2個 p 元素
const p2 = document.createElement('p');
p2.innerHTML = '<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>';
footerContent.appendChild(p2);

// 創建第3個 p 元素
const p3 = document.createElement('p');
p3.innerHTML = 'Follow us on: ';

// 創建並添加各個社交媒體的 <a> 標籤------------------------------------------
const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com';
facebookLink.id = 'facebook-link';
facebookLink.textContent = 'Facebook';

const twitterLink = document.createElement('a');
twitterLink.href = 'https://www.twitter.com';
twitterLink.id = 'Twitter-link';
twitterLink.textContent = 'Twitter';

const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com';
instagramLink.id = 'Instagram-link';
instagramLink.textContent = 'Instagram';

// 將社交媒體鏈接加入 p3 元素中
p3.appendChild(facebookLink);
p3.appendChild(document.createTextNode(', '));  // 添加逗號分隔
p3.appendChild(twitterLink);
p3.appendChild(document.createTextNode(', '));  // 添加逗號分隔
p3.appendChild(instagramLink);

footerContent.appendChild(p3);

// 將 footerContent 添加到 footer
footer.appendChild(footerContent);

// 將動態創建的頁尾元素插入到 body 中
document.body.appendChild(footer);