document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const floatingMenu = document.getElementById('floating-menu');

    // 메뉴 열기
    menuButton.addEventListener('click', () => {
        floatingMenu.classList.add('open');
        menuButton.classList.add('hidden'); // ☰ 버튼 숨기기
    });

    // 메뉴 닫기
    menuClose.addEventListener('click', () => {
        floatingMenu.classList.remove('open');
        menuButton.classList.remove('hidden'); // ☰ 버튼 다시 표시
    });
    const characters = [
        { id: 'sakuya', image: 'assets/images/SdIcon_001.png' },
        { id: 'masum9', image: 'SdIcon_002.png' },
        { id: 'tsuzuru', image: 'SdIcon_003.png' },
        { id: 'itaru', image: 'SdIcon_004.png' },
        // 추가 캐릭터
    ];

    const container = document.getElementById('circle-container');

    characters.forEach(char => {
        const div = document.createElement('div');
        div.classList.add('circle');
        div.style.backgroundImage = `url('file://d:/voice/sdicon/${char.image}')`;
        container.appendChild(div);
    });
});
