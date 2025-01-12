document.addEventListener("DOMContentLoaded", () => {
    // �x���������d���o
    const downloadButtons = document.querySelectorAll('.download-link');

    // ��ÿ�����o����¼��O 
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // ��ֹ���o��Ĭ�J�О飨��ֹ����|�l��
            e.preventDefault();

            // �ҵ���ǰ���o�����Ļ���ӍϢ
            const feedbackMessage = button.nextElementSibling;

            if (feedbackMessage) {
                // �@ʾ����ӍϢ
                feedbackMessage.style.display = "inline";

                // һ�Εr�g���[�ػ���ӍϢ
                setTimeout(() => {
                    feedbackMessage.style.display = "none";
                }, 3000);

                // ģ�M�|�l���d�����Ƴ����У��������y�ã�
                window.location.href = button.href;
            }
        });
    });
});