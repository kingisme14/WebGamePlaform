document.querySelectorAll('.tab-button').forEach((item) => {
    item.addEventListener('click', function (event) {
        const rect = item.getBoundingClientRect(); // �@ȡ�^�K�ߴ�
        const numPieces = 50; // ��Ҏ�tС�K����

        // �[��ԭ������
        //item.style.visibility = 'hidden';

        // ��������Ч��
        for (let i = 0; i < numPieces; i++) {
            const piece = document.createElement('div');
            piece.classList.add('piece');

            // �S�C�������D��λ��
            const dx = Math.random() * 2 - 1; // ˮƽ����
            const dy = Math.random() * 2 - 1; // ��ֱ����
            const r = Math.random(); // �S�C���D
            const x = Math.random() * rect.width; // ��ʼλ�� X
            const y = Math.random() * rect.height; // ��ʼλ�� Y

            // �S�C���ɶ�߅���Π�
            const randomPolygon = generateRandomPolygon();
            piece.style.clipPath = `polygon(${randomPolygon})`;

            piece.style.setProperty('--dx', dx);
            piece.style.setProperty('--dy', dy);
            piece.style.setProperty('--r', r);
            piece.style.left = `${x}px`;
            piece.style.top = `${y}px`;

            // ��С�K���� game-item ����
            item.appendChild(piece);

            // �Ӯ��Y�����Ƴ�С�K
            piece.addEventListener('animationend', () => piece.remove());
        }
    });
});

/**
 * �S�C���ɶ�߅����c
 * ����ֵ������ "0 0, 100% 0, 100% 100%, 0 100%" ���ַ���
 */
function generateRandomPolygon() {
    const points = [];
    const numPoints = Math.floor(Math.random() * 4) + 3; // �S�C��c����3��6���c��

    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 100; // �S�C X �ٷֱ�
        const y = Math.random() * 100; // �S�C Y �ٷֱ�
        points.push(`${x}% ${y}%`);
    }

    return points.join(', '); // ���cƴ�Ӟ��߅��
}
