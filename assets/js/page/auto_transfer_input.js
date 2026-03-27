const radioButtons = document.querySelectorAll('.option-input');
const labels = document.querySelectorAll('.btn-option');

radioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
        // 1. 모든 라벨에서 is-selected 클래스 제거
        labels.forEach(label => label.classList.remove('is-selected'));
        // 2. 현재 선택된(checked) 라디오 바로 뒤에 있는 라벨에만 클래스 추가
        if (e.target.checked) {
            const targetLabel = document.querySelector(`label[for="${e.target.id}"]`);
            targetLabel.classList.add('is-selected');
        }
    });
});